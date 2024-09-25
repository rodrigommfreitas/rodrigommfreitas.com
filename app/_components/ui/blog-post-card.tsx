"use client";

import { PostFrontmatterWithSlug } from "@/src/utils/mdx";
import Link from "next/link";

export function BlogPostCard({ post }: { post: PostFrontmatterWithSlug }) {
  return (
    <article className="group/card rounded-2xl border bg-white transition-all hover:shadow-xl dark:border-white/[0.2] dark:bg-zinc-950">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block overflow-hidden rounded-2xl sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 via-blue-300 dark:to-blue-200"></span>

        <h3 className="text-xl !font-bold text-neutral-600 dark:text-neutral-200 sm:text-xl">
          {post.frontmatter.title}
        </h3>

        <p className="text-color mt-4 text-pretty text-sm font-medium">
          {post.frontmatter.description}
        </p>

        <dd className="text-color mt-6 text-sm font-medium">
          {post.frontmatter.date}
        </dd>
      </Link>
    </article>
  );
}
