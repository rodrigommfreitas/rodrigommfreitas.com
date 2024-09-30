"use server";

import { getTranslations } from "next-intl/server";

import { LegalItemList } from "../legal-item-list";

export default async function PrivacyPolicy() {
  const t = await getTranslations("privacy-policy");

  const privacyPolicy = [
    {
      title: t("item-1-title"),
      content: t("item-1-content"),
    },
    {
      title: t("item-2-title"),
      content: t("item-2-content"),
    },
    {
      title: t("item-3-title"),
      content: t("item-3-content"),
    },
    {
      title: t("item-4-title"),
      content: t("item-4-content"),
    },
    {
      title: t("item-5-title"),
      content: t("item-5-content"),
    },
    {
      title: t("item-6-title"),
      content: t("item-6-content"),
    },
    {
      title: t("item-7-title"),
      content: t("item-7-content"),
    },
  ];

  return (
    <>
      <h1 className="heading mb-8 pt-32 text-center">{t("title")}</h1>
      <p className="text-color mb-16 text-center">{t("last-updated")}</p>
      <LegalItemList items={privacyPolicy} />
    </>
  );
}
