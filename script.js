document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const yearElement = document.getElementById("year");

  yearElement.textContent = new Date().getFullYear();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
