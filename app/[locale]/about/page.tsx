"use server";

import { unstable_setRequestLocale } from "next-intl/server";

import { Introduction } from "./introduction";
import { Skills } from "./skills";
import { Timeline } from "./timeline";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function About({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
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
