const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const storedTheme = localStorage.getItem('vistula-theme');
if (storedTheme) {
  root.setAttribute('data-theme', storedTheme);
  toggle.textContent = storedTheme === 'light' ? '🌞' : '🌙';
}

toggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', current);
  localStorage.setItem('vistula-theme', current);
  toggle.textContent = current === 'light' ? '🌞' : '🌙';
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', evt => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#') && targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        evt.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
