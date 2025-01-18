import { z } from "astro/zod";

// Schema for head tags
const HeadConfigSchema = z
  .array(
    z.object({
      tag: z.enum(["title", "meta", "link", "script"]),
      attrs: z.record(z.string(), z.string().or(z.boolean())).default({}),
      content: z.string().optional(),
    }),
  )
  .default([]);

export type HeadConfig = z.infer<typeof HeadConfigSchema>;

/** Merge two head configurations, avoiding duplicates based on attributes. */
export function mergeHead(defaults: HeadConfig, ...heads: HeadConfig[]) {
  let combined = [...defaults];
  for (const head of heads) {
    combined = [
      ...combined.filter((tag) => !hasDuplicate(combined, tag)),
      ...head,
    ];
  }
  return sortHead(combined);
}

/** Check for duplicate tags based on attributes. */
function hasDuplicate(head: HeadConfig, tag: HeadConfig[number]): boolean {
  return head.some(
    (existingTag) =>
      existingTag.tag === tag.tag &&
      JSON.stringify(existingTag.attrs) === JSON.stringify(tag.attrs),
  );
}

/** Sort head tags to prioritize critical ones like charset, title, and viewport. */
function sortHead(head: HeadConfig): HeadConfig {
  const importance = (tag: HeadConfig[number]) => {
    if (tag.tag === "meta" && tag.attrs.charset) return 100;
    if (tag.tag === "title") return 90;
    if (tag.attrs.name === "viewport") return 80;
    return 0;
  };
  return [...head].sort((a, b) => importance(b) - importance(a));
}
