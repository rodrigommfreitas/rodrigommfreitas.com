"use server";

interface LegalItemProps {
  title: string;
  content: string;
}

export async function LegalItem({ title, content }: LegalItemProps) {
  return (
    <>
      <h2 className="mb-4 text-2xl font-medium">{title}</h2>
      <p className="text-color pl-4">{content}</p>
    </>
  );
}
