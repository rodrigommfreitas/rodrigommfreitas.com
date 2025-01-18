import { useEffect, useState } from "react";
import { LOCALES } from "../i18n/utils";

type Locale = "en" | "pt";

const LanguageToggle = () => {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  const otherLocale: Locale = currentLocale === "en" ? "pt" : "en";

  const handleLanguageChange = () => {
    const newURL = window.location.href.replace(currentLocale, otherLocale);

    //setCurrentLocale(otherLocale);
    window.location.href = newURL;
    const scrollPosition = window.scrollY; // Save current scroll position
    localStorage.setItem("scrollPosition", scrollPosition.toString());
  };

  useEffect(() => {
    function getLocale() {
      if (window.location.pathname.includes("en")) return "en";
      else return "pt";
    }
    setCurrentLocale(getLocale());

    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, parseInt(savedPosition));
      localStorage.removeItem("scrollPosition"); // Clean up after restoring
    }

    // Restore smooth scroll behavior
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 0);
  }, [currentLocale]);

  return (
    <button
      onClick={handleLanguageChange}
      className="flex h-8 w-8 items-center justify-center text-color font-medium sm:!ml-2"
      aria-label={`Switch to ${LOCALES[otherLocale].label}`}
    >
      <span className="ml-0 lg:ml-2 text-sm font-semibold">
        {currentLocale === "en" ? "PT" : "EN"}
      </span>
    </button>
  );
};

export default LanguageToggle;
