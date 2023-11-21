"use client";

import { type FC } from "react";
import { type Project as ProjectProps } from "~/data/projects";
import { FaEye, FaGithubSquare } from "react-icons/fa";

export const Project: FC<ProjectProps> = ({
  title,
  description,
  tags,
  repoUrl,
  liveUrl,
}) => {
  return (
    <div className="flex h-full max-h-52 flex-col justify-between overflow-hidden rounded-xl border border-black/5 bg-white/10 p-2 text-white transition hover:bg-white/20 lg:p-4 xl:h-[24rem] xl:max-h-[24rem]">
      <div>
        <span className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
          <div className="flex gap-4">
            {liveUrl !== "" && (
              <a
                className="cursor-pointer bg-opacity-80 text-2xl text-white/60 transition hover:text-white/80 active:scale-95"
                href={liveUrl}
                target="_blank"
              >
                <FaEye />
              </a>
            )}
            <a
              className="cursor-pointer bg-opacity-80 text-2xl text-white/60 transition hover:text-white/80 active:scale-95"
              href={repoUrl}
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </span>
        <p className="mt-2 text-left text-sm leading-relaxed text-white/80 lg:mt-4 lg:text-base">
          {description}
        </p>
      </div>
      <div>
        <div className="my-2 h-[1px] w-full bg-white/20 lg:mb-4"></div>
        <ul className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-white/80 px-2 py-1 text-[0.7rem] font-bold uppercase  tracking-wider text-black lg:px-3"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
