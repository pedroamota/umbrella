(() => {
  const root = document.documentElement;
  let theme = 'light';
  try {
    if (localStorage.getItem('umbrella-theme') === 'dark') theme = 'dark';
  } catch { /* Theme selection also works when storage is unavailable. */ }
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const control = document.getElementById('dark-theme');
    if (!control) return;
    control.checked = theme === 'dark';
    control.addEventListener('change', () => {
      theme = control.checked ? 'dark' : 'light';
      root.dataset.theme = theme;
      try { localStorage.setItem('umbrella-theme', theme); } catch { /* Optional persistence. */ }
    });
  }, { once: true });
})();
