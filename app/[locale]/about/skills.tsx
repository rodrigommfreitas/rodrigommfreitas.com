"use server";

import { getTranslations } from "next-intl/server";

import { SkillList } from "./skill-list";

export async function Skills() {
  const t = await getTranslations("about-page");

  const skills = [
    {
      title: t("skill-title-1"),
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "PHP",
        "SQL",
      ],
    },
    {
      title: t("skill-title-2"),
      skills: ["React", "Next.js", "Node.js", "Express", "Spring Boot"],
    },
    {
      title: t("skill-title-3"),
      skills: ["Tailwind CSS", "shadcn/ui", "SASS", "Bootstrap"],
    },
    {
      title: t("skill-title-4"),
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      title: "Object-Relational/Document Mappers (ORM/ODM)",
      skills: ["Prisma", "Drizzle", "Mongoose", "Hibernate"],
    },
    {
      title: t("skill-title-5"),
      skills: ["Jest", "React Testing Library", "Vitest", "Playwright"],
    },
    {
      title: t("skill-title-6"),
      skills: ["Git", "Postman", "Docker", "Linux"],
    },
  ];

  return (
    <>
      <h2 className="heading mb-12 sm:mb-16">
        {t("tech-title")}{" "}
        <span className="blue-gradient pr-1">{t("tech-title-gradient")}</span>
      </h2>
      <div className="w-full space-y-8">
        {skills.map((skill, index) => (
          <SkillList key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </>
  );
}
