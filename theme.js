const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".material-symbols-outlined");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

function updateThemeUI(theme) {
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

updateThemeUI(html.getAttribute("data-theme") || "dark");

themeToggle.addEventListener("click", () => {
  const nextTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateThemeUI(nextTheme);
});
