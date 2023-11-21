import type { FC } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="mb-4 text-center text-3xl font-medium  text-white sm:mb-8 sm:text-4xl">
      {children}
    </h2>
  );
};

export default SectionHeading;
