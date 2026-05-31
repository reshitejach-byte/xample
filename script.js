const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const themeKey = 'portfolio-theme';

const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem(themeKey, theme);
};

const preferredTheme = localStorage.getItem(themeKey);
if (preferredTheme) {
  setTheme(preferredTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});
