import Link from "next/link";
import { useState, type FC } from "react";
import { sections } from "../data/sections";
import { motion } from "framer-motion";
import clsx from "clsx";
import { type SectionName } from "../types/Section";

const Navbar: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionName>(
    sections[0].name,
  );

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
                "rounded-full px-2 transition hover:text-gray-500",
                {
                  "bg-white text-black hover:text-black":
                    activeSection === section.name,
                },
              )}
              href={section.hash}
              onClick={() => {
                setActiveSection(section.name);
              }}
              draggable={false}
            >
              {section.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;

/*
        <Link
          href={sections[0].hash}
          className="rounded-full bg-white px-2 text-black"
          draggable={false}
        >
          {sections[0].name}
        </Link>
        <Link
          href={sections[1].hash}
          className="px-2 text-white"
          draggable={false}
        >
          {sections[1].name}
        </Link>
        <Link
          href={sections[2].hash}
          className="px-2 text-white"
          draggable={false}
        >
          {sections[2].name}
        </Link>
        <Link
          href={sections[3].hash}
          className="px-2 text-white"
          draggable={false}
        >
          {sections[3].name}
        </Link>
        <Link
          href={sections[4].hash}
          className="px-2 text-white"
          draggable={false}
        >
          {sections[4].name}
        </Link>
        <Link
          href={sections[5].hash}
          className="px-2 text-white"
          draggable={false}
        >
          {sections[5].name}
        </Link>
*/
