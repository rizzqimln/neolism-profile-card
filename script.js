function toggleDark() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark"); // remembers choice
}

// On page load, restore saved preference
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);