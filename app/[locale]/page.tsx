import { unstable_setRequestLocale } from "next-intl/server";

import About from "../_components/sections/about";
import { Blog } from "../_components/sections/blog";
import { Examples } from "../_components/sections/examples";
import { FAQ } from "../_components/sections/faq/faq";
import { FinalCta } from "../_components/sections/final-cta";
import { Hero } from "../_components/sections/hero/hero";
import { Portfolio } from "../_components/sections/portfolio";
import { Process } from "../_components/sections/process";
import { Services } from "../_components/sections/services";

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />

      <section
        id="about"
        className="mx-auto flex max-w-7xl justify-center px-4 md:mt-20 xl:px-0"
      >
        <About />
      </section>
      {/*
      <section
        id="portfolio"
        className="mx-auto mt-24 max-w-7xl px-4 md:mt-40 xl:px-0"
      >
        <Portfolio />
      </section>
  */}

      {/* Testimonials (when I have some)*/}

      <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-4 md:mt-40 xl:px-0">
        <Services />
      </section>

      <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-2 md:mt-40 xl:px-0">
        <Process />
      </section>

      <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-4 md:mt-40 xl:px-0">
        <Examples />
      </section>
      {/*
      <section
        id="blog"
        className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-4 md:mt-40 xl:px-0"
      >
        <Blog />
      </section>
*/}

      <section
        id="faq"
        className="mx-auto mt-24 max-w-5xl px-4 md:mt-40 xl:px-0"
      >
        <FAQ />
      </section>

      <section id="contact">
        <FinalCta />
      </section>
    </>
  );
}
