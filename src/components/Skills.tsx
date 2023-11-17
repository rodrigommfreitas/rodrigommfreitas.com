import React from "react";
import SectionHeading from "./SectionHeading";
import { mainSkills } from "~/data/skills";
import { motion } from "framer-motion";
import { useSectionInView } from "~/hooks/useSectionInView";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <div
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      ></link>

      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {mainSkills.map((skill, index) => (
          <motion.li
            className="borderBlack flex items-center gap-2 rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.imgName && <i className={skill.imgName}></i>}
            {skill.title}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
