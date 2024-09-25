"use server";

import { skills } from "@/src/data/about/skills";

import { SkillList } from "./skill-list";

export async function Skills() {
  return (
    <>
      <h2 className="heading mb-12 sm:mb-16">
        Technologies <span className="blue-gradient">I know</span>
      </h2>
      <div className="w-full space-y-8">
        {skills.map((skill, index) => (
          <SkillList key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </>
  );
}
