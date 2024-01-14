import type { FC } from "react";
import { type SectionName } from "../data/sections";
import clsx from "clsx";

type SectionsProps = {
  sectionId: SectionName;
  children: React.ReactNode;
  isScrollable?: boolean;
};

const Section: FC<SectionsProps> = ({ sectionId, children, isScrollable }) => {
  return (
    <div
      id={sectionId.toLocaleLowerCase()}
      className={clsx(
        "flex min-h-screen w-screen snap-start items-center justify-center",
        {
          "snap-always overflow-y-scroll": isScrollable,
        },
      )}
    >
      {children}
    </div>
  );
};

export default Section;
