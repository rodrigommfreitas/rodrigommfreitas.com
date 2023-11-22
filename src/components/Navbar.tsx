import Link from "next/link";
import { type FC } from "react";
import { sections } from "../data/sections";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "~/context/ActiveSectionContext";

const Navbar: FC = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav className="fixed top-0 z-[999] hidden w-screen justify-center px-64 py-4 text-white sm:flex">
      <motion.ul
        className="fixed flex select-none gap-2 rounded-full bg-[#1A1A1A] bg-opacity-80 p-2 text-center font-medium backdrop-blur-[0.5rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
          delay: 0.25,
        }}
      >
        {sections.map((section) => (
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            key={section.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center px-3 py-1 transition hover:text-white ",
                {
                  "z-10 text-black hover:text-black":
                    activeSection === section.name,
                },
              )}
              href={section.hash}
              onClick={() => {
                setActiveSection(section.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {section.name}

              {section.name === activeSection && (
                <motion.span
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
        {/*sections.map((section) => (
          <motion.li
            key={section.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
              delay: 0.5,
            }}
          >
            <Link
              className={clsx(
                "rounded-full px-2 py-1 transition hover:text-gray-500",
                {
                  "bg-white text-black hover:text-black":
                    activeSection === section.name,
                },
              )}
              href={section.hash}
              onClick={() => {
                setActiveSection(section.name);
                setTimeOfLastClick(Date.now());
              }}
              draggable={false}
            >
              {section.name}
            </Link>
          </motion.li>
            ))*/}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
