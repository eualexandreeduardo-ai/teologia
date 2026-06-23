(() => {
  const PROGRESS_PREFIXES = ['task_', 'notes_', 'exercise_', 'quiz_'];
  const LOCAL_SNAPSHOT_PREFIX = 'academy_progress_user_';
  const LAST_MODULE_PREFIX = 'academy_last_module_user_';
  const LEGACY_MIGRATION_KEY = 'academy_progress_legacy_migrated';
  let currentUser = null;
  let lastKnownModule = 1;
  let saveTimer = null;

  const isProgressKey = key => PROGRESS_PREFIXES.some(prefix => key.startsWith(prefix));
  const activeKeys = () => Object.keys(localStorage).filter(isProgressKey);

  function readActiveProgress() {
    return activeKeys().reduce((data, key) => {
      data[key] = localStorage.getItem(key);
      return data;
    }, {});
  }

  function writeActiveProgress(data = {}) {
    activeKeys().forEach(key => localStorage.removeItem(key));
    Object.entries(data).forEach(([key, value]) => {
      if (isProgressKey(key) && value !== null && value !== undefined) {
        localStorage.setItem(key, String(value));
      }
    });
  }

  function calculateSummary(data) {
    const coreTaskIds = window.AcademyCoreTaskIds;
    const dailyTaskKeys = Object.keys(data).filter(key => key.startsWith('task_d'));
    const taskKeys = dailyTaskKeys.length
      ? dailyTaskKeys
      : Object.keys(data).filter(key => key.startsWith('task_') && (!coreTaskIds || coreTaskIds.has(key.slice(5))));
    const completedTasks = taskKeys.filter(key => data[key] === '1').length;
    const scores = {};
    const approvedModules = [];
    const dayScores = {};
    const approvedDays = [];

    Object.entries(data).forEach(([key, value]) => {
      const match = key.match(/^quiz_m(\d+)_score$/);
      if (match) scores[match[1]] = Number(value);
      const approvedMatch = key.match(/^quiz_m(\d+)_passed$/);
      if (approvedMatch && value === '1') approvedModules.push(Number(approvedMatch[1]));
      const dayMatch = key.match(/^quiz_d(\d+)_score$/);
      if (dayMatch) dayScores[dayMatch[1]] = Number(value);
      const approvedDayMatch = key.match(/^quiz_d(\d+)_passed$/);
      if (approvedDayMatch && value === '1') approvedDays.push(Number(approvedDayMatch[1]));
    });

    const unlockedModules = [1];
    for (let module = 2; module <= 13; module += 1) {
      if (approvedModules.includes(module - 1)) unlockedModules.push(module);
      else break;
    }
    const unlockedDays = [1];
    for (let day = 2; day <= 21; day += 1) {
      if (approvedDays.includes(day - 1)) unlockedDays.push(day);
      else break;
    }
    const currentDay = Number(document.body.dataset.day || lastKnownModule || unlockedDays.at(-1) || 1);

    return {
      checklists: Object.fromEntries(Object.entries(data).filter(([key]) => key.startsWith('task_'))),
      exercises: Object.fromEntries(Object.entries(data).filter(([key]) => key.startsWith('exercise_') || key.startsWith('notes_'))),
      quiz_answers: Object.fromEntries(Object.entries(data).filter(([key]) => /^quiz_m\d+_q\d+$/.test(key))),
      module_scores: scores,
      approved_modules: approvedModules.sort((a, b) => a - b),
      unlocked_modules: unlockedModules,
      day_scores: dayScores,
      approved_days: approvedDays.sort((a, b) => a - b),
      unlocked_days: unlockedDays,
      overall_percentage: taskKeys.length ? Math.round((completedTasks / taskKeys.length) * 100) : 0,
      raw_local_storage: data,
      last_module: Number(document.body.dataset.module || currentDay),
      last_day: currentDay
    };
  }

  function localSnapshotKey(userId) { return LOCAL_SNAPSHOT_PREFIX + userId; }
  function lastModuleKey(userId) { return LAST_MODULE_PREFIX + userId; }

  async function loadProgress(user) {
    currentUser = user;
    const localSnapshotRaw = localStorage.getItem(localSnapshotKey(user.id));
    const localSnapshot = JSON.parse(localSnapshotRaw || '{}');
    const legacyProgress = !localSnapshotRaw && !localStorage.getItem(LEGACY_MIGRATION_KEY) ? readActiveProgress() : {};
    lastKnownModule = Number(localStorage.getItem(lastModuleKey(user.id)) || 1);
    let cloudData = null;

    try {
      const { data, error } = await window.supabaseClient
        .from('user_progress')
        .select('progress_data')
        .eq('user_id', user.id)
        .maybeSingle();
      if (error) throw error;
      cloudData = data?.progress_data?.raw_local_storage || null;
      lastKnownModule = Number(data?.progress_data?.last_module || localStorage.getItem(lastModuleKey(user.id)) || 1);
    } catch (error) {
      console.warn('Não foi possível carregar o progresso da nuvem; usando a cópia local.', error.message);
    }

    const progress = cloudData || (localSnapshotRaw ? localSnapshot : legacyProgress);
    writeActiveProgress(progress);
    localStorage.setItem(localSnapshotKey(user.id), JSON.stringify(progress));
    if (!localSnapshotRaw && Object.keys(legacyProgress).length) {
      localStorage.setItem(LEGACY_MIGRATION_KEY, '1');
      queueSave();
    }
    localStorage.setItem(lastModuleKey(user.id), String(lastKnownModule));
    window.dispatchEvent(new CustomEvent('academy:cloud-progress-ready', { detail: { user, source: cloudData ? 'cloud' : 'local' } }));
    return progress;
  }

  async function saveProgress() {
    if (!currentUser) return { saved: false, reason: 'no-user' };
    const activeData = readActiveProgress();
    const progressData = calculateSummary(activeData);
    lastKnownModule = progressData.last_module;
    localStorage.setItem(localSnapshotKey(currentUser.id), JSON.stringify(activeData));
    localStorage.setItem(lastModuleKey(currentUser.id), String(lastKnownModule));

    if (!navigator.onLine || !window.supabaseClient) return { saved: false, reason: 'offline', progressData };

    try {
      const { error } = await window.supabaseClient
        .from('user_progress')
        .upsert({ user_id: currentUser.id, progress_data: progressData, updated_at: new Date().toISOString() }, { onConflict: 'user_id' });
      if (error) throw error;
      window.dispatchEvent(new CustomEvent('academy:progress-saved', { detail: { progressData } }));
      return { saved: true, progressData };
    } catch (error) {
      console.warn('Não foi possível sincronizar agora; a cópia local foi preservada.', error.message);
      return { saved: false, reason: 'network', error, progressData };
    }
  }

  function queueSave() {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => { saveProgress(); }, 700);
  }

  function markLastModule(moduleNumber) {
    if (!Number.isFinite(Number(moduleNumber))) return;
    lastKnownModule = Number(moduleNumber);
    if (currentUser) localStorage.setItem(lastModuleKey(currentUser.id), String(lastKnownModule));
  }

  window.AcademyProgressCloud = { loadProgress, saveProgress, queueSave, calculateSummary, markLastModule };
  document.addEventListener('academy:progress-changed', queueSave);
  window.addEventListener('online', () => { if (currentUser) saveProgress(); });
})();
