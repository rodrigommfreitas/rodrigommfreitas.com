import React from "react";
import { IconBaseProps } from "react-icons";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export type Experience = {
  title: string;
  description: string;
  icon: React.FunctionComponentElement<IconBaseProps>;
  date: string;
};

export const experiences = [
  {
    title: "Enrolled in Bachelor's Degree in Computer Science",
    location: "Madeira, Portugal",
    description:
      "I enrolled in the Bachelor's Degree in Computer Science at the University of Madeira.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Completed The Odin Project's Full Stack Curriculum",
    location: "Remote",
    description:
      "I completed The Odin Project's Full Stack Curriculum where I acquired a robust understanding of front-end and back-end technologies. The curriculum's hands-on projects allowed me to apply theoretical knowledge in real-world scenarios, fostering a solid skill set in many different languages and frameworks.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full Stack Web Developer Internship at FreeBalance",
    location: "Lisbon, Portugal",
    description:
      "This immersive and paid internship was an opportunity where I gained valuable professional experience for 2 months. I developed three distinct full stack applications, leveraging a robust tech stack comprising React, TypeScript, Bootstrap, Java, Spring Boot, and Hibernate. These applications were not only an expression of my technical prowess but also exemplified my ability to quickly adapt to complex frameworks and technologies while delivering high-quality solutions. I also implemented new features for the company's main product, the Government Resource Planning (GRP) software. This was a period of accelerated growth, where I showcased my proficiency in developing robust applications, addressing complex challenges, and contributing meaningfully to a renowned company's technology ecosystem. This experience solidified my commitment to becoming a versatile and impactful developer within the tech industry.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - August 2023",
  },
] as const;
