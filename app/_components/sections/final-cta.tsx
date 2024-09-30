"use server";

import { getTranslations } from "next-intl/server";

import { CopyEmailButton } from "../copy-email-button";

export async function FinalCta() {
  const t = await getTranslations("final-cta");

  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-zinc-50 px-4 py-32 bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.15] sm:py-40 xl:px-0">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-50 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black sm:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="heading max-w-[800px] text-center">
        {t("title")}{" "}
        <span className="blue-gradient">{t("title-gradient")}</span>{" "}
        {t("title-rest")}
      </h2>
      <p className="text-color mt-12 text-center text-xl sm:text-2xl md:text-3xl">
        {t("description")}
      </p>
      <CopyEmailButton />
    </div>
  );
}
