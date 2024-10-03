"use client";

import { useTranslations } from "next-intl";

import { HoverEffect } from "../ui/card-hover-effect";

export function Process() {
  const t = useTranslations("process");
  const steps = [
    {
      title: t("step-1-title"),
      description: t("step-1-description"),
    },
    {
      title: t("step-2-title"),
      description: t("step-2-description"),
    },
    {
      title: t("step-3-title"),
      description: t("step-3-description"),
    },
    {
      title: t("step-4-title"),
      description: t("step-4-description"),
    },
    {
      title: t("step-5-title"),
      description: t("step-5-description"),
    },
    {
      title: t("step-6-title"),
      description: t("step-6-description"),
    },
  ];

  return (
    <>
      <h2 className="heading mb-12 text-center sm:mb-16">
        {t("title")}{" "}
        <span className="blue-gradient pr-1">{t("title-gradient")}</span>
      </h2>
      <HoverEffect items={steps} />
    </>
  );
}
