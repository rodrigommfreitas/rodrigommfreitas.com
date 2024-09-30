import { getTranslations } from "next-intl/server";

export async function getAboutSectionData() {
  const t = await getTranslations("about-section");

  return {
    title: t("title"),
    description: t("description"),
    learnMore: t("learn-more"),
  };
}
