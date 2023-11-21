import type { FC } from "react";
import { type SectionName } from "../data/sections";

type SectionsProps = {
  sectionId: SectionName;
  children: React.ReactNode;
};

const Section: FC<SectionsProps> = ({ sectionId, children }) => {
  return (
    <div
      id={sectionId.toLocaleLowerCase()}
      className="flex h-screen w-screen snap-center items-center justify-center"
    >
      {children}
    </div>
  );
};

export default Section;
