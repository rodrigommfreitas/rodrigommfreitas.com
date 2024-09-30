"use server";

import { getLocale, getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const locale = getLocale();

  const t = await getTranslations("metadata-blog");

  return {
    title: t("title"),
    description: t("description"),
    locale: locale,
  };
};

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto mb-32 min-h-screen max-w-2xl px-4 xl:px-0">
      {children}
    </div>
  );
}
