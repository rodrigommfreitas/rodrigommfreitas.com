"use server";

import { AuroraBackground } from "../../ui/aurora-background";
import { HeroButtons } from "./hero-buttons";

export async function Hero() {
  return (
    <AuroraBackground>
      <section
        id="home"
        className="flex flex-col items-center justify-center space-y-2 py-32 sm:space-y-6 sm:py-64"
      >
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
    </AuroraBackground>
  );
}
