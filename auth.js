(() => {
  const TOTAL_DAYS = 21;
  const ADMIN_EMAIL = 'eualexandreeduardo@gmail.com';
  let currentUserEmail = '';
  let isAdmin = false;

  const dayKey = day => String(day).padStart(2,'0');
  const ls = { get:k=>localStorage.getItem(k), set:(k,v)=>localStorage.setItem(k,v), del:k=>localStorage.removeItem(k) };
  const taskKey = id => 'task_' + id;
  const exerciseKey = id => 'exercise_' + id;
  const passedKey = day => `quiz_m${day}_passed`;
  const scoreKey = day => `quiz_m${day}_score`;
  const totalKey = day => `quiz_m${day}_total`;

  function emitChange() { window.dispatchEvent(new CustomEvent('academy:progress-changed')); }
  function approved(day) { return isAdmin || ls.get(passedKey(day)) === '1'; }
  function unlocked(day) { return isAdmin || day === 1 || approved(day - 1); }
  function dayTasks(day) { return [...document.querySelectorAll(`.day-check[data-day="${day}"]`)]; }
  function dayProgress(day) {
    const ids = [`d${day}c1`,`d${day}c2`,`d${day}c3`];
    const done = ids.filter(id => ls.get(taskKey(id)) === '1').length;
    const pct = Math.round((done / ids.length) * 100);
    return { done, total: ids.length, pct };
  }
  function allTasksDone(day) { return dayProgress(day).done === dayProgress(day).total; }

  function saveFields() {
    document.querySelectorAll('.day-check').forEach(input => {
      const saved = ls.get(taskKey(input.id));
      if (saved === '1') input.checked = true;
      input.addEventListener('change', () => {
        input.checked ? ls.set(taskKey(input.id),'1') : ls.del(taskKey(input.id));
        updateUI(); emitChange();
      });
    });
    document.querySelectorAll('.exercise-field').forEach(field => {
      const key = exerciseKey(field.dataset.exercise || field.id);
      field.value = ls.get(key) || '';
      field.addEventListener('input', () => { ls.set(key, field.value); emitChange(); });
    });
  }

  function updateCards() {
    for (let day=1; day<=TOTAL_DAYS; day++) {
      const p = dayProgress(day);
      const card = document.querySelector(`[data-day-card="${day}"]`);
      const bar = document.querySelector(`#day-card-p${day}`);
      const txt = document.querySelector(`#day-card-t${day}`);
      const status = document.querySelector(`#day-lock-status-${day}`);
      const links = document.querySelectorAll(`[data-day-link="${day}"]`);
      if (bar) bar.style.width = (approved(day) ? 100 : p.pct) + '%';
      if (txt) txt.textContent = (approved(day) ? 100 : p.pct) + '%';
      if (card) card.classList.toggle('locked', !unlocked(day));
      if (status) {
        status.className = 'module-lock-status ' + (approved(day) ? 'ok' : unlocked(day) ? 'ok' : 'bad');
        status.textContent = approved(day) ? 'Aprovado' : unlocked(day) ? 'Liberado' : 'Bloqueado';
      }
      links.forEach(a => {
        if (!unlocked(day)) { a.classList.add('disabled'); a.setAttribute('aria-disabled','true'); }
        else { a.classList.remove('disabled'); a.removeAttribute('aria-disabled'); }
      });
    }
  }

  function updateCurrentDay() {
    const day = Number(document.body.dataset.day || 0);
    if (!day) return;
    const access = document.querySelector(`#access-status-${day}`);
    const status = document.querySelector(`#day-status-${day}`);
    if (!unlocked(day)) {
      if (access) { access.className='access-gate-status bad'; access.textContent='Este dia ainda está bloqueado. Conclua e seja aprovado no dia anterior.'; }
      document.querySelector('[data-day-content]')?.classList.add('locked-content');
    } else {
      if (access) { access.className='access-gate-status ok'; access.textContent = isAdmin ? 'Acesso administrativo liberado.' : 'Dia liberado para estudo.'; }
      document.querySelector('[data-day-content]')?.classList.remove('locked-content');
    }
    if (status) {
      status.className = 'module-status-box ' + (approved(day) ? 'ok' : allTasksDone(day) ? 'ok' : 'bad');
      status.textContent = approved(day) ? 'Avaliação aprovada. Próximo dia liberado.' : allTasksDone(day) ? 'Checklist completo. Faça a avaliação.' : 'Complete o checklist antes da aprovação.';
    }
  }

  function updateProgressPage() {
    const approvedCount = [...Array(TOTAL_DAYS)].map((_,i)=>i+1).filter(approved).length;
    const pct = Math.round((approvedCount / TOTAL_DAYS) * 100);
    const next = isAdmin ? 21 : Math.min(TOTAL_DAYS, approvedCount + 1);
    const set = (id, val) => { const el=document.querySelector(id); if(el) el.textContent=val; };
    set('#pg-pct', pct + '%'); set('#pg-approved', approvedCount); set('#pg-next', dayKey(next)); set('#pg-admin', isAdmin ? 'Sim' : 'Não');
    const hdr = document.querySelector('#hdr-prog'); if (hdr) hdr.textContent = pct + '% concluído';
  }

  function updateUI() { updateCards(); updateCurrentDay(); updateProgressPage(); }

  window.submitDayQuiz = function(day) {
    if (isAdmin) { ls.set(passedKey(day),'1'); ls.set(scoreKey(day),'admin'); ls.set(totalKey(day),'admin'); updateUI(); emitChange(); return; }
    if (!allTasksDone(day)) { const r=document.querySelector(`#quiz-result-${day}`); if(r){r.className='quiz-result bad';r.textContent='Complete o checklist antes de enviar a avaliação.'} return; }
    const questions = [...document.querySelectorAll(`[data-quiz-day="${day}"] .quiz-question`)];
    let score = 0;
    questions.forEach((q, idx) => { const checked = q.querySelector('input[type="radio"]:checked'); if (checked && checked.dataset.correct === '1') score++; if (checked) ls.set(`quiz_m${day}_q${idx+1}`, checked.value); });
    const total = questions.length;
    const pass = score > total / 2;
    ls.set(scoreKey(day), String(score)); ls.set(totalKey(day), String(total));
    pass ? ls.set(passedKey(day),'1') : ls.del(passedKey(day));
    const r=document.querySelector(`#quiz-result-${day}`); if(r){r.className='quiz-result ' + (pass?'ok':'bad'); r.textContent = pass ? `Aprovado: ${score} de ${total}. Próximo dia liberado.` : `Ainda não aprovado: ${score} de ${total}. Revise e tente novamente.`;}
    updateUI(); emitChange();
  };
  window.resetDayQuiz = function(day) { ls.del(passedKey(day)); ls.del(scoreKey(day)); ls.del(totalKey(day)); document.querySelectorAll(`[data-quiz-day="${day}"] input[type="radio"]`).forEach(i=>i.checked=false); updateUI(); emitChange(); };
  window.resetAllProgress = function() { if(!confirm('Zerar o progresso salvo neste navegador?')) return; Object.keys(localStorage).filter(k => k.startsWith('task_') || k.startsWith('exercise_') || k.startsWith('quiz_')).forEach(k => localStorage.removeItem(k)); location.reload(); };

  document.addEventListener('DOMContentLoaded', () => { saveFields(); updateUI(); });
  window.addEventListener('academy:authenticated', (ev) => {
    currentUserEmail = (ev.detail?.user?.email || '').toLowerCase();
    isAdmin = currentUserEmail === ADMIN_EMAIL;
    updateUI();
  });
  window.addEventListener('academy:cloud-progress-ready', updateUI);
})();