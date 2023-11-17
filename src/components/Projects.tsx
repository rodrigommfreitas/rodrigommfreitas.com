import React, { type FC } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "~/data/projects";
import { Project } from "./Project";
import { useSectionInView } from "~/hooks/useSectionInView";

export const Projects: FC = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <div
      ref={ref}
      className="w-[calc(100vw-50px)] max-w-[32rem] text-center text-white xl:max-w-[80rem]"
    >
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 grid-rows-3 gap-4 xl:grid-cols-3 xl:grid-rows-1 xl:gap-8">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
