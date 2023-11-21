import React, { type FC } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "~/data/projects";
import { Project } from "./Project";
import { useSectionInView } from "~/hooks/useSectionInView";
import Link from "next/link";

export const Projects: FC = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <div
      ref={ref}
      className="w-[calc(100vw-50px)] max-w-[32rem] text-center text-white xl:max-w-[80rem]"
    >
      <div className="block sm:hidden">
        <SectionHeading>Some projects</SectionHeading>
      </div>
      <div className="hidden sm:block">
        <SectionHeading>Some projects I{"'"}ve developed</SectionHeading>
      </div>
      <div className="mb-2 grid grid-cols-1 grid-rows-3 gap-4 sm:mb-8 xl:grid-cols-3 xl:grid-rows-1 xl:gap-8">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <span className="text-2xl text-white/80">
        Visit{" "}
        <Link
          className=" text-white"
          target="_blank"
          href="https://www.github.com/rodrigommfreitas"
        >
          my github
        </Link>{" "}
        for more
      </span>
    </div>
  );
};
