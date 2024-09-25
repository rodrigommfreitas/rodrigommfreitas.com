"use server";

import { Introduction } from "./introduction";
import { Skills } from "./skills";
import { Timeline } from "./timeline";

export default async function About() {
  return (
    <>
      <section>
        <Introduction />
      </section>
      <section className="mt-24 flex flex-col items-center md:mt-40">
        <Timeline />
      </section>
      <section className="mt-24 flex flex-col items-center md:mt-40">
        <Skills />
      </section>
    </>
  );
}
