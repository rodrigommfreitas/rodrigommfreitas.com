import Link from "next/link";
import { useState, type FC } from "react";
import { sections } from "../data/sections";
import { motion } from "framer-motion";
import clsx from "clsx";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useActiveSectionContext } from "~/context/ActiveSectionContext";

const Navbar: FC = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-[999] flex w-screen px-4 py-4 text-white sm:justify-center sm:px-64">
      <div className="block sm:hidden">
        <button
          type="button"
          className="text-white-900 inline-flex items-center gap-x-1 text-sm font-semibold leading-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
        {isMenuOpen && (
          <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {sections.map((section) => (
                  <Link
                    key={section.hash}
                    className="group relative flex gap-x-6 rounded-lg p-4  hover:bg-gray-50"
                    href={section.hash}
                    onClick={() => {
                      setActiveSection(section.name);
                      setTimeOfLastClick(Date.now());
                      setIsMenuOpen(false);
                    }}
                  >
                    <div className="w-full text-center text-lg  font-semibold text-gray-900">
                      {section.name}
                      <span className="absolute inset-0"></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <motion.ul
        className="fixed hidden select-none gap-2 rounded-full bg-[#1A1A1A] bg-opacity-80 p-2 text-center font-medium backdrop-blur-[0.5rem] sm:flex"
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
                "flex w-full items-center justify-center px-3 py-1 transition ",
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
      </motion.ul>
    </nav>
  );
};

export default Navbar;
