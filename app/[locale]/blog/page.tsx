"use server";

import { getTranslations } from "next-intl/server";

import { BlogPostList } from "./blog-post-list";

export default async function Blog() {
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
