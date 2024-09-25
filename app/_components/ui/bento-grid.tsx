import { cn } from "@/app/_components/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  slug,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  slug?: string;
}) => {
  return (
    <article
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-zinc-950 dark:shadow-none",
        className,
      )}
    >
      {header}
      {(title || description) && (
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}

          <div className="mb-2 mt-2 font-sans text-xl font-semibold">
            {title}
          </div>

          <div className="text-color">{description}</div>
        </div>
      )}
    </article>
  );
};
