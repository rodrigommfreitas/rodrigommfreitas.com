import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { BlogPostList } from "./blog-post-list";

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function Blog({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("blog");

  return (
    <>
      <h1 className="heading pt-32 text-center">
        {t("title")}{" "}
        <span className="blue-gradient">{t("title-gradient")}</span>
      </h1>
      <p className="text-color mb-12 mt-6 text-center sm:mb-16 sm:text-lg">
        {t("description")}
      </p>
      <BlogPostList />
    </>
  );
}
