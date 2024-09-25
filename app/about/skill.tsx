"use server";

import { formatToLogoURL } from "@/src/utils/formatToLogoURL";
import Image from "next/image";

interface SkillProps {
  title: string;
}

const skillsToInvert = ["Express", "shadcn/ui", "Drizzle", "Git", "Next.js"];

export async function Skill({ title }: SkillProps) {
  return (
    <li className="inline-flex w-fit items-center rounded-xl border bg-white px-3 py-2 text-lg shadow-md dark:border-white/[0.2] dark:bg-zinc-950">
      <span className="text-color">{title}</span>
      <Image
        src={formatToLogoURL(title)}
        width={24}
        height={24}
        alt={title + " logo"}
        className={`ml-3 h-6 w-6 rounded-md ${skillsToInvert.includes(title) ? "dark:invert dark:filter" : ""}`}
      />
    </li>
  );
}
