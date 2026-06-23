/*
 * Cole aqui os dados públicos do seu projeto Supabase.
 * Encontre-os em: Project Settings > API.
 * A chave anon pode ficar no frontend; nunca use a service_role neste arquivo.
 */
window.SUPABASE_URL = 'https://ysycevgnwbbyigmhaqey.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzeWNldmdud2JieWlnbWhhcWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNTg0MDEsImV4cCI6MjA5NzczNDQwMX0.SeJJYXFl8ajb6nwPf7WMbEZJ-ZmyRwo50-AG_EwJit8';

window.supabaseClient = null;

if (
  window.supabase &&
  window.SUPABASE_URL.startsWith('https://') &&
  !window.SUPABASE_URL.includes('COLE_AQUI') &&
  window.SUPABASE_ANON_KEY &&
  !window.SUPABASE_ANON_KEY.includes('COLE_AQUI')
) {
  window.supabaseClient = window.supabase.createClient(
    window.SUPABASE_URL,
    window.SUPABASE_ANON_KEY,
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
  );
}

window.dispatchEvent(new CustomEvent('academy:supabase-ready', {
  detail: { configured: Boolean(window.supabaseClient) }
}));
