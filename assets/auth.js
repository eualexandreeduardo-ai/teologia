(() => {
  function pageName() {
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const last = path.split('/').pop() || 'index';
    return last.replace(/\.html$/, '');
  }

  const currentPage = pageName;
  const isLoginPage = () => currentPage() === 'login';
  const isSignUpPage = () => currentPage() === 'cadastro';
  const isPublicAuthPage = () => isLoginPage() || isSignUpPage();
  const loginUrl = 'login.html';
  const homeUrl = 'index.html';

  const message = (text, type = 'error') => {
    const el = document.querySelector('#auth-message');
    if (!el) return;
    el.textContent = text;
    el.className = `auth-message ${type}`;
  };

  const configured = () => Boolean(window.supabaseClient);

  async function getCurrentUser() {
    if (!configured()) return null;
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    return session?.user || null;
  }

  function addUserHeader(user) {
    const header = document.querySelector('#main-header');
    if (!header || document.querySelector('#auth-area')) return;
    const area = document.createElement('div');
    area.className = 'auth-area';
    area.id = 'auth-area';
    area.innerHTML = `<span class="auth-user" title="${user.email}">${user.email}</span><button class="logout-btn" type="button">Sair</button>`;
    area.querySelector('.logout-btn').addEventListener('click', logout);
    header.appendChild(area);
  }

  function updateProfile(user, progress = {}) {
    const email = document.querySelector('#student-email');
    if (email) email.textContent = user.email;
    const lastModule = document.querySelector('#pg-last-module');
    if (lastModule) lastModule.textContent = `Módulo ${String(progress.last_module || 1).padStart(2, '0')}`;
  }

  function redirectToLogin(reason = '') {
    const target = reason ? `${loginUrl}?${reason}=1` : loginUrl;
    if (!isLoginPage()) window.location.replace(target);
  }

  async function requireAuth() {
    if (isPublicAuthPage()) return null;
    if (!configured()) {
      redirectToLogin('config');
      return null;
    }
    try {
      const user = await getCurrentUser();
      if (!user) {
        redirectToLogin();
        return null;
      }
      addUserHeader(user);
      const rawProgress = await window.AcademyProgressCloud?.loadProgress(user);
      updateProfile(user, window.AcademyProgressCloud?.calculateSummary(rawProgress || {}));
      document.body.classList.add('authenticated');
      window.dispatchEvent(new CustomEvent('academy:authenticated', { detail: { user } }));
      return user;
    } catch (error) {
      console.error('Falha ao verificar autenticação.', error);
      redirectToLogin();
      return null;
    }
  }

  async function login(email, password) {
    if (!configured()) return message('Configure SUPABASE_URL e SUPABASE_ANON_KEY em assets/supabase-config.js.');
    const { error } = await window.supabaseClient.auth.signInWithPassword({ email, password });
    if (error) return message(error.message);
    message('Login realizado. Redirecionando...', 'success');
    window.location.replace(homeUrl);
  }

  async function signUp({ email, password, firstName, lastName, phone, birthDate }) {
    if (!configured()) return message('Configure SUPABASE_URL e SUPABASE_ANON_KEY em assets/supabase-config.js.');
    const { data, error } = await window.supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone,
          birth_date: birthDate
        }
      }
    });
    if (error) return message(error.message);
    if (data.session) {
      message('Conta criada com sucesso. Redirecionando...', 'success');
      window.location.replace(homeUrl);
    } else {
      message('Conta criada. Confira seu e-mail para confirmar o cadastro antes de entrar.', 'success');
    }
  }

  async function logout() {
    if (configured()) await window.supabaseClient.auth.signOut();
    window.location.replace(loginUrl);
  }

  async function syncProgress() {
    const status = document.querySelector('#sync-status');
    if (status) status.textContent = 'Sincronizando...';
    const result = await window.AcademyProgressCloud?.saveProgress();
    if (!status) return result;
    if (result?.saved) status.textContent = 'Progresso sincronizado com sucesso.';
    else if (result?.reason === 'offline') status.textContent = 'Sem internet: sua cópia local continua salva.';
    else status.textContent = 'Não foi possível sincronizar agora. Tente novamente mais tarde.';
    return result;
  }

  window.AcademyAuth = { login, signUp, logout, syncProgress, getCurrentUser, requireAuth };
  window.syncProgress = syncProgress;

  document.addEventListener('DOMContentLoaded', async () => {
    if (isPublicAuthPage()) {
      if (new URLSearchParams(window.location.search).has('config')) {
        message('Antes de entrar, configure os dados públicos do Supabase.', 'error');
      }
      if (configured()) {
        const user = await getCurrentUser();
        if (user) {
          window.location.replace(homeUrl);
          return;
        }
      }

      const loginForm = document.querySelector('#login-form');
      if (isLoginPage()) {
        loginForm?.addEventListener('submit', event => {
          event.preventDefault();
          login(loginForm.email.value.trim(), loginForm.password.value);
        });
      }

      const signupForm = document.querySelector('#signup-form');
      if (isSignUpPage()) {
        signupForm?.addEventListener('submit', event => {
          event.preventDefault();
          signUp({
            email: signupForm.email.value.trim(),
            password: signupForm.password.value,
            firstName: signupForm.firstName.value.trim(),
            lastName: signupForm.lastName.value.trim(),
            phone: signupForm.phone.value.trim(),
            birthDate: signupForm.birthDate.value
          });
        });
      }
      return;
    }
    requireAuth();
  });
})();
