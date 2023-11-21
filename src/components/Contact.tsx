"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "~/hooks/useSectionInView";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[calc(100vw-50px)] max-w-[50rem] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-xl text-white/80">
        You can contact me directly at{" "}
        <a
          className="text-white/90 underline"
          href="mailto:rodrigommfreitas@protonmail.com"
        >
          rodrigommfreitas@protonmail.com
        </a>{" "}
      </p>

      <div className="mt-4 flex justify-center text-xl sm:mt-8">
        <a
          className="mr-4 flex w-fit items-center gap-2 rounded-full bg-[#1A1A1A] bg-opacity-80 px-4 py-3 text-white/60 backdrop-blur-[0.5rem] transition hover:bg-opacity-100 hover:text-white/80 active:scale-95"
          href="
          https://www.linkedin.com/in/rodrigommfreitas/"
        >
          LinkedIn <BsLinkedin className="inline-block" />
        </a>
        <a
          className="flex w-fit items-center gap-2 rounded-full bg-[#1A1A1A] bg-opacity-80 px-4 py-3 text-white/60 backdrop-blur-[0.5rem] transition hover:bg-opacity-100 hover:text-white/80 active:scale-95"
          href="https://github.com/rodrigommfreitas"
        >
          GitHub <FaGithubSquare className="inline-block" />
        </a>
      </div>
    </motion.section>
  );
}
