import { getTranslations } from "next-intl/server";

export async function getHeroData() {
  const t = await getTranslations("hero");

  return {
    title: "Rodrigo Freitas",
    description: t("description"),
  };
}

export async function getHeroButtonsData() {
  const t = await getTranslations("hero-buttons");

  return {
    buttons: [
      {
        label: t("view-my-work"),
        href: "#about",
      },
      {
        label: t("contact-me"),
        href: "#contact",
      },
    ],
  };
}
