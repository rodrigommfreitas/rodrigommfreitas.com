import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  return (
    <button
      onClick={() => {
        if (localStorage.theme === "dark") {
          localStorage.theme = "light";
          document.documentElement.classList.remove("dark");
        } else {
          localStorage.theme = "dark";
          document.documentElement.classList.add("dark");
        }
      }}
      id="theme-toggle"
      aria-label="Toggle Light/Dark Mode"
      className="flex h-8 w-8 items-center justify-center sm:!ml-2"
    >
      <Moon className="h-5 w-5 block dark:hidden text-color" />
      <Sun className="h-5 w-5 hidden dark:block text-color" />
    </button>
  );
}

export default ThemeToggle;
