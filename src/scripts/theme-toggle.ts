document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#theme-toggle");
  const sunIcon = document.querySelector("#sun-icon");
  const moonIcon = document.querySelector("#moon-icon");
  const htmlElement = document.documentElement;

  const updateIcons = (theme: string) => {
    if (theme === "dark") {
      sunIcon?.classList.remove("hidden");
      moonIcon?.classList.add("hidden");
      themeToggle?.setAttribute("aria-label", "Switch to light mode");
    } else {
      sunIcon?.classList.add("hidden");
      moonIcon?.classList.remove("hidden");
      themeToggle?.setAttribute("aria-label", "Switch to dark mode");
    }
  };

  const currentTheme = localStorage.getItem("theme") || "light";
  htmlElement.classList.add(currentTheme);
  updateIcons(currentTheme);

  themeToggle?.addEventListener("click", () => {
    const isDarkMode = htmlElement.classList.contains("dark");
    const newTheme = isDarkMode ? "light" : "dark";
    htmlElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    updateIcons(newTheme);
  });
});
