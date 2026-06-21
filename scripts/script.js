function toggleDark() {
  const isNowDark = document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
}

const saved = localStorage.getItem('theme')
if (saved == 'dark') document.documentElement.classList.add('dark-mode')