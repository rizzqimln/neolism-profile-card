function toggleDark() {
  const isNowDark = document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('btn-theme', isNowDark ? 'dark' : 'light');
}

const saved = localStorage.getItem('btn-theme')
if (saved == 'dark') document.documentElement.classList.add('dark-mode')