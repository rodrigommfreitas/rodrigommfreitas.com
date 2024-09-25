"use server";

import { timeline } from "@/src/data/about/timeline";

export async function Timeline() {
  return (
    <>
      <h2 className="heading mb-[84px] text-center">
        Timeline of <span className="blue-gradient">my journey</span>
      </h2>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="relative ml-3 border-l dark:border-l-white/[0.2]">
          {timeline.map((item, index) => (
            <li key={index} className="mb-16">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-300 dark:ring-zinc-800">
                <div className="h-3 w-3 rounded-full bg-blue-600"></div>
              </span>

              <div className="ml-12 flex flex-col sm:flex-row">
                <time className="mb-4 ml-4 whitespace-nowrap text-2xl font-medium leading-none text-neutral-500 sm:mb-0 sm:ml-0 sm:mr-8 sm:min-w-48">
                  {item.date}
                </time>

                <div className="w-full rounded-lg border bg-white p-4 shadow-md dark:border-white/[0.2] dark:bg-zinc-950 sm:-translate-y-5">
                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-color text-lg">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
