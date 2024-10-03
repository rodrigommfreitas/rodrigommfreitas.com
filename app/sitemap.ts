import { getAllPostsSlugs } from "@/src/utils/mdx";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = getAllPostsSlugs();

  const home = {
    url: "https://www.rodrigommfreitas.com/",
    lastModified: new Date().toString(),
  };

  if (!blogPosts) return [home];

  const posts = blogPosts.map((post) => ({
    url: `https://www.rodrigommfreitas.com/en/blog/${post}`,
  }));

  return [home, ...posts];
}
