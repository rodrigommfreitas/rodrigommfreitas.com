"use client";

import { cn } from "@/app/_components/utils";
import { navItems } from "@/src/data/nav-items";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import ThemeToggle from "./theme-toggle";

export const FloatingNav = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const landingNavItems = {
    "#home": {
      name: "Home",
    },
    "#about": {
      name: "About",
    },
    //"#portfolio": {
    // name: "Portfolio",
    // },
    // "#blog": {
    //  name: "Blog",
    // },
  };

  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  function getNavItems() {
    if (isLandingPage) return landingNavItems;

    return navItems;
  }

  const currentNavItems = getNavItems();

  return (
    <nav>
      <div
        className={cn(
          "fixed inset-x-0 top-4 z-[5000] mx-auto hidden max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black sm:flex",
          className,
        )}
      >
        {Object.entries(currentNavItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={isLandingPage ? `/${path}` : path}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
            )}
          >
            <span className="text-sm">{name}</span>
          </Link>
        ))}
        <Link
          href="/#contact"
          className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
        >
          <span>Contact Me</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </Link>

        <div className="h-[24px] w-[1px] bg-neutral-200 dark:bg-neutral-800" />

        <ThemeToggle />
      </div>

      <div className="text-color fixed left-2 top-2 z-[5000] rounded-lg border border-transparent bg-white p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black sm:hidden">
        <ThemeToggle />
      </div>

      <div className="fixed right-2 top-2 z-[5000] sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-color rounded-lg border border-transparent bg-white p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black"
        >
          <span className="sr-only">Open navigation menu</span>
          {isOpen ? (
            <XIcon className="h-8 w-8" aria-hidden={true} />
          ) : (
            <MenuIcon className="h-8 w-8" aria-hidden={true} />
          )}
        </button>
      </div>

      <div
        className={`fixed left-2 right-2 top-[60px] z-[4000] w-[calc(100%-16px)] overflow-hidden rounded-lg border-transparent text-center transition-all duration-300 ease-in-out md:hidden ${mounted ? (isOpen ? "max-h-96 border bg-white pb-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black" : "max-h-0") : "invisible max-h-0"}`}
      >
        {Object.entries(currentNavItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={isLandingPage ? `/${path}` : path}
            className={cn(
              "flex justify-center py-4 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
            )}
          >
            <span className="text-lg font-medium">{name}</span>
          </Link>
        ))}
        <div className="mb-2 mt-6">
          <Link
            href="/#contact"
            className="relative rounded-full border border-neutral-200 px-8 py-4 font-medium text-black dark:border-white/[0.2] dark:text-white"
          >
            <span className="text-lg font-medium">Contact Me</span>
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </Link>
        </div>
      </div>
    </nav>
  );
};