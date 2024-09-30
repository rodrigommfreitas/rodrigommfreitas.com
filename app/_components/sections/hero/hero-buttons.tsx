"use server";

import { getHeroButtonsData } from "@/src/data/home/hero";
import Link from "next/link";

export async function HeroButtons() {
  const data = await getHeroButtonsData();

  return (
    <>
      <Link
        href={data.buttons[0].href}
        className="cta !px-2 !text-base sm:!px-6"
      >
        {data.buttons[0].label}
      </Link>
      <Link href={data.buttons[1].href} className="cta-contrast !px-2 sm:!px-6">
        {data.buttons[1].label}
      </Link>
    </>
  );
}
