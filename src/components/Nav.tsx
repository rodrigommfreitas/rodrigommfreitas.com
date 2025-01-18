import React, { useEffect, useState } from "react";

//import { LanguageToggle } from "./language-toggle";
//import ThemeToggle from "./theme-toggle";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTranslations, type Lang } from "../i18n/utils";
import LanguageToggle from "./LanguageToggle";

const Nav = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations(lang);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const home = t({
    pt: "Início",
    en: "Home",
  });
  const portfolio = t({
    pt: "Portfólio",
    en: "Portfolio",
  });
  const testimonials = t({
    pt: "Testimonios",
    en: "Testimonials",
  });

  const contact = t({
    pt: "Contactar",
    en: "Contact",
  });

  const navItems = {
    "#home": {
      name: home,
    },
    "#portfolio": {
      name: portfolio,
    },
    "#testimonials": {
      name: testimonials,
    },
  };

  return (
    <nav>
      <div className="fixed inset-x-0 top-4 z-[5000] mx-auto hidden max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white/50 backdrop-blur-md py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black/50 lg:flex">
        {Object.entries(navItems).map(([path, { name }]) => (
          <a
            key={path}
            href={`/${lang}/${path}`}
            className="relative flex items-center space-x-1 text-color hover:opacity-75 transition"
          >
            <span className="text-sm">{name}</span>
          </a>
        ))}

        <a
          href="mailto:rodrigommfreitas@protonmail.com"
          className="relative rounded-full border border-neutral-300/40 px-4 py-2 text-sm font-medium text-color dark:border-white/[0.2]"
        >
          <span className="font-semibold">{contact}</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
        </a>

        <div className="h-[24px] w-[2px] bg-neutral-200/40 dark:bg-neutral-800/75" />

        <LanguageToggle />

        <ThemeToggle />
      </div>

      <div className="text-color fixed left-4 top-4 z-[5000] space-x-2 rounded-lg border border-transparent bg-white p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black lg:hidden">
        <ThemeToggle />
      </div>
      <div className="text-color fixed left-16 top-4 z-[5000] space-x-2 rounded-lg border border-transparent bg-white p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black lg:hidden">
        <LanguageToggle />
      </div>

      <div className="fixed right-4 top-4 z-[5000] lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-color rounded-lg border border-transparent bg-white p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black"
        >
          <span className="sr-only">Open navigation menu</span>
          {isOpen ? (
            <X className="h-8 w-8" aria-hidden={true} />
          ) : (
            <Menu className="h-8 w-8" aria-hidden={true} />
          )}
        </button>
      </div>

      <div
        className={`fixed left-4 right-2 top-[68px] z-[4000] w-[calc(100%-32px)] overflow-hidden rounded-lg border-transparent text-center transition-all duration-300 ease-in-out md:hidden ${mounted ? (isOpen ? "max-h-96 border bg-white pb-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black" : "max-h-0") : "invisible max-h-0"}`}
      >
        {Object.entries(navItems).map(([path, { name }]) => (
          <a
            key={path}
            href={`/${path}`}
            className="flex justify-center py-4 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
          >
            <span className="text-lg font-medium">{name}</span>
          </a>
        ))}
        <div className="mb-2 mt-6">
          <a
            href="mailto:rodrigommfreitas@protonmail.com"
            className="relative rounded-full border border-neutral-200 px-8 py-4 font-medium text-black dark:border-white/[0.2] dark:text-white"
          >
            <span className="text-lg font-medium">{contact}</span>
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
