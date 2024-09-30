"use server";

import { getHeroButtonsData } from "@/src/data/home/hero";
import Link from "next/link";

export async function HeroButtons() {
  const data = await getHeroButtonsData();

  return (
    <>
      <Link href={data.buttons[0].href} className="cta">
        {data.buttons[0].label}
      </Link>
      <Link href={data.buttons[1].href} className="cta-contrast">
        {data.buttons[1].label}
      </Link>
    </>
  );
}
