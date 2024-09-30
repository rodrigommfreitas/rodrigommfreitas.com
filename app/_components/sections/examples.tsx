"use server";

import {
  AppWindowMacIcon,
  CircleEllipsisIcon,
  GraduationCapIcon,
  HouseIcon,
  LayoutDashboardIcon,
  NotebookPenIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ExampleCard } from "../example-card";

export type Example = {
  title: string;
  description: string;
  icon?: JSX.Element;
};

export async function Examples() {
  const t = await getTranslations("examples");

  const examples = [
    {
      title: t("example-1-title"),
      description: t("example-1-description"),
      icon: (
        <HouseIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
      ),
    },
    {
      title: t("example-2-title"),
      description: t("example-2-description"),
      icon: (
        <NotebookPenIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
      ),
    },
    {
      title: t("example-3-title"),
      description: t("example-3-description"),
      icon: (
        <LayoutDashboardIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
      ),
    },
    {
      title: t("example-4-title"),
      description: t("example-4-description"),
      icon: (
        <GraduationCapIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
      ),
    },
    {
      title: t("example-5-title"),
      description: t("example-5-description"),
      icon: (
        <AppWindowMacIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
      ),
    },
    {
      title: t("example-6-title"),
      description: t("example-6-description"),
      icon: (
        <CircleEllipsisIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
      ),
    },
  ];

  return (
    <>
      <h2 className="heading mb-12 text-center sm:mb-16">
        {t("title")}{" "}
        <span className="blue-gradient"> {t("title-gradient")}</span>
      </h2>
      <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {examples.map((example, i) => (
          <li key={i} className="flex">
            <ExampleCard example={example} />
          </li>
        ))}
      </ul>
    </>
  );
}
