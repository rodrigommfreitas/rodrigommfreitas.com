"use server";

import { getTranslations } from "next-intl/server";

export async function Introduction() {
  const t = await getTranslations("about-page");
  return (
    <>
      <h1 className="heading pt-32">{t("title")}</h1>
      <div className="mb-4 mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-blue-300 dark:to-black"></div>
      <div className="text-color flex flex-col gap-4 text-lg md:text-xl">
        <p>{t("text-1")}</p>

        <p>{t("text-2")}</p>
      </div>
    </>
  );
}
