(() => {
  const root = document.documentElement;
  let theme = 'light';
  try {
    if (localStorage.getItem('umbrella-theme') === 'dark') theme = 'dark';
  } catch { /* Theme selection also works when storage is unavailable. */ }
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const control = document.getElementById('theme-toggle');
    if (!control) return;
    const syncControl = () => {
      control.setAttribute('aria-pressed', String(theme === 'dark'));
      control.title = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro';
    };
    syncControl();
    control.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = theme;
      syncControl();
      try { localStorage.setItem('umbrella-theme', theme); } catch { /* Optional persistence. */ }
    });
  }, { once: true });
})();
