"use server";

import { BlogPostList } from "./blog-post-list";

export default async function Blog() {
  return (
    <>
      <h1 className="heading mb-12 pt-32 text-center sm:mb-16">
        Welcome to my <span className="blue-gradient">blog</span>{" "}
      </h1>
      <BlogPostList />
    </>
  );
}
