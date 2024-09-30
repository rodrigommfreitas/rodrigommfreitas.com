"use server";

import { getAboutSectionData } from "@/src/data/home/about";
import { Link as LocalizedLink } from "@/src/i18n/routing";
import Image from "next/image";

export default async function About() {
  const data = await getAboutSectionData();

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
      <Image
        src="/landing/me.jpg"
        alt="Rodrigo Freitas' Photo"
        width={240}
        height={240}
        className="mb-2 max-h-[200px] max-w-[200px] rounded-full shadow-lg shadow-black/30 md:mb-0 md:max-h-[240px] md:max-w-[240px] md:object-none"
      />

      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="heading">{data.title}</h2>
        <div className="mx-auto mb-4 mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-blue-300 dark:to-black md:mx-0"></div>

        <p className="text-color mb-4 max-w-[600px] text-lg sm:text-xl">
          {data.description}
        </p>

        <LocalizedLink href="/about" className="cta-contrast">
          {data.learnMore}
        </LocalizedLink>
      </div>
    </div>
  );
}
