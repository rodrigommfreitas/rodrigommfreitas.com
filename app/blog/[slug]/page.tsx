"use server";

import { getPostBySlug } from "@/src/utils/mdx";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { frontmatter } = getPostBySlug(params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { frontmatter, content } = getPostBySlug(params.slug);

  return (
    <article className="post pt-32">
      <div className="mb-12">
        <h1 className="blue-gradient !mb-1 w-fit !text-5xl !font-black">
          {frontmatter.title}
        </h1>
        <time className="text-color text-sm">{frontmatter.date}</time>
      </div>

      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "github-dark",
                },
              ],
            ],
          },
        }}
      />
    </article>
  );
}
