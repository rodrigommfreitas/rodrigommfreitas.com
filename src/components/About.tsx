import type { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About: FC = () => {
  return (
    <motion.section
      className="w-[calc(100vw-50px)] max-w-[50rem] text-center text-lg leading-8 text-white/90 sm:text-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        {" "}
        I{"'"}m currently studying{" "}
        <span className="font-medium text-white">Computer Science</span> at
        University of Madeira, Portugal. I couldn{"'"}t be fully satisfied with
        what I was learning in university so I started learning{" "}
        <span className="font-medium text-white">web development</span> on my
        own and I absolutely{" "}
        <span className="italic text-white">fell in love</span> with it. I have
        the ability to{" "}
        <span className="text-white underline">quickly adapt</span> to new
        requirements and learn new technologies.{" "}
        <span className="italic text-white">
          I{"'"}m always looking to improve my skills.
        </span>
      </p>

      <p className="mb-6">
        <span className="italic text-white">When I{"'"}m not coding</span>, I
        enjoy doing some kind of physical activity such as weight lifting,
        watching movies, and playing with my dogs.
      </p>

      <p className="rounded-2xl bg-[#1A1A1A] bg-opacity-80 py-4">
        {" "}
        I{"'"}m currently looking for a{" "}
        <span className="font-medium text-white">full-time position</span> as a
        software developer.
      </p>
    </motion.section>
  );
};

export default About;
