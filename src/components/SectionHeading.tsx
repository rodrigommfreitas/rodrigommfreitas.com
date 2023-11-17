import type { FC } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="mb-4 text-center text-3xl font-medium capitalize text-white sm:text-4xl lg:mb-8">
      {children}
    </h2>
  );
};

export default SectionHeading;
