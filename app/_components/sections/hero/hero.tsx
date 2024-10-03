"use server";

import { getHeroData } from "@/src/data/home/hero";

import { HeroButtons } from "./hero-buttons";

export async function Hero() {
  const data = await getHeroData();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center space-y-2 bg-zinc-50 py-32 bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.15] sm:space-y-6 sm:py-64"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-50 [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] dark:bg-black"></div>
      <h1 className="black-gradient z-10 pb-1 text-center text-5xl font-bold sm:text-7xl md:text-9xl">
        {data.title}
      </h1>
      <p className="text-color z-10 !mb-4 text-center text-xl sm:text-2xl md:text-3xl">
        {data.description}
      </p>
      <div className="z-10 mt-4 flex gap-6 font-medium">
        <HeroButtons />
      </div>
    </section>
  );
}
