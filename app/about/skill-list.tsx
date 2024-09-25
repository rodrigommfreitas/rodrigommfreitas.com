"use server";

import { Skill } from "./skill";

interface SkillListProps {
  title: string;
  skills: string[];
}

export async function SkillList({ title, skills }: SkillListProps) {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-medium">{title}</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} title={skill} />
        ))}
      </ul>
    </div>
  );
}
