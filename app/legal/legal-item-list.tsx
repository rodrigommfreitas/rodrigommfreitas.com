"use server";

import { LegalItem } from "./legal-item";

interface LegalItem {
  title: string;
  content: string;
}

interface LegalItemListProps {
  items: LegalItem[];
}

export async function LegalItemList({ items }: LegalItemListProps) {
  return (
    <ol className="flex list-none flex-col gap-8">
      {items.map((item, index) => (
        <li key={index}>
          <LegalItem title={item.title} content={item.content} />
        </li>
      ))}
    </ol>
  );
}
