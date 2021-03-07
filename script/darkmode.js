/*-reserved------
function darkmode() {
  var element = document.querySelector('.content');
  element.classList.toggle("dark-mode");
  var element = document.querySelector('.logo');
  element.classList.toggle("dark-mode-logo");
}*/

const btn = document.querySelector(".darkmode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.querySelector('.content').classList.toggle("dark-mode");
  document.querySelector('.logo').classList.toggle("dark-mode-logo");
  document.querySelector('.darkmode').classList.toggle("dark-mode-darkmode");
} else if (currentTheme == "light") {
  document.querySelector('.content').classList.toggle("light-mode");
  document.querySelector('.logo').classList.toggle("light-mode-logo");
  document.querySelector('.darkmode').classList.toggle("light-mode-darkmode");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.querySelector('.content').classList.toggle("light-mode");
    document.querySelector('.logo').classList.toggle("light-mode-logo");
    document.querySelector('.darkmode').classList.toggle("light-mode-darkmode");
    var theme = document.querySelector('.content').classList.contains("light-mode")
    var theme = document.querySelector('.logo').classList.contains("light-mode-logo")
    var theme = document.querySelector('.darkmode').classList.contains("light-mode-darkmode")
      ? "light"
      : "dark";
  } else {
    document.querySelector('.content').classList.toggle("dark-mode");
    document.querySelector('.logo').classList.toggle("dark-mode-logo");
    document.querySelector('.darkmode').classList.toggle("dark-mode-darkmode");
    var theme = document.querySelector('.content').classList.contains("dark-mode")
    var theme = document.querySelector('.logo').classList.contains("dark-mode-logo")
    var theme = document.querySelector('.darkmode').classList.contains("dark-mode-darkmode")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
