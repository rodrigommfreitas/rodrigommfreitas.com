"use server";

import {
  getLocale,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

export const generateMetadata = async () => {
  const locale = getLocale();

  const t = await getTranslations("metadata-about");

  return {
    title: t("title"),
    description: t("description"),
    locale: locale,
  };
};

export default async function AboutLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <div className="mx-auto mb-32 min-h-screen max-w-5xl px-4 xl:px-0">
      {children}
    </div>
  );
}
