"use server";

import { HeroButtons } from "./hero-buttons";

export async function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center space-y-2 bg-zinc-50 py-32 bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.15] sm:space-y-6 sm:py-64"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-50 [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black)] dark:bg-black sm:[mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <h1 className="text-[42px] font-bold text-black dark:text-white sm:text-7xl md:text-8xl">
        Rodrigo Freitas
      </h1>
      <p className="text-color !mb-4 text-center text-xl md:text-3xl">
        Full Stack Web Developer & Freelancer
      </p>
      <div className="z-10 mt-4 flex gap-6 font-medium">
        <HeroButtons />
      </div>
    </section>
  );
}
