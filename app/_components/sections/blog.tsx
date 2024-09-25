"use server";

import {
  PostFrontmatterWithSlug,
  getLatestPostsFrontmatter,
} from "@/src/utils/mdx";
import Link from "next/link";

import { BlogPostCard } from "../ui/blog-post-card";

export async function Blog() {
  const posts: PostFrontmatterWithSlug[] = getLatestPostsFrontmatter(3);
  return (
    <>
      <h2 className="heading mb-12 sm:mb-16">
        Some <span className="blue-gradient">blog posts</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      <p className="text-color mb-8 mt-12 max-w-[700px] text-center text-lg sm:text-xl">
        I write about technology, entrepreneurship, and personal growth. I like
        to share my experiences and knowledge with others.
      </p>

      <Link href="/blog" className="cta-contrast">
        View All Posts
      </Link>
    </>
  );
}
