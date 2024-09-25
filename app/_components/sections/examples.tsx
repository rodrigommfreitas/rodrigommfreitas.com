"use server";

import {
  AppWindowMacIcon,
  CircleEllipsisIcon,
  GraduationCapIcon,
  HouseIcon,
  LayoutDashboardIcon,
  NotebookPenIcon,
} from "lucide-react";

import { ExampleCard } from "../example-card";

export type Example = {
  title: string;
  description: string;
  icon?: JSX.Element;
};

const examples = [
  {
    title: "Landing Pages & Portfolios",
    description:
      "Represent your brand and showcase your work. Attract new clients online and make a great first impression.",
    icon: (
      <HouseIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
    ),
  },
  {
    title: "Blogs",
    description:
      "Easily manage your blog with a Content Management System (CMS) so you can focus on writing and publishing without worries.",
    icon: (
      <NotebookPenIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
    ),
  },
  {
    title: "Dashboards & Management Systems",
    description:
      "Have a system that helps you manage your business, completely tailored to your needs.",
    icon: (
      <LayoutDashboardIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
    ),
  },
  {
    title: "Learning Platforms",
    description:
      "Create an online course platform where you can help others learn through your knowledge and experience.",
    icon: (
      <GraduationCapIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
    ),
  },
  {
    title: "Custom Applications",
    description:
      "I can build a custom application that solves your specific problem or helps you achieve a specific goal.",
    icon: (
      <AppWindowMacIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
    ),
  },
  {
    title: "And a lot more",
    description:
      "Have a more complex project in mind? Let's discuss it and see how I can help you.",
    icon: (
      <CircleEllipsisIcon className="h-10 w-10 text-blue-500 sm:h-16 sm:w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" />
    ),
  },
];

export async function Examples() {
  return (
    <>
      <h2 className="heading mb-12 text-center sm:mb-16">
        Examples of what <span className="blue-gradient"> I can build</span>
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
