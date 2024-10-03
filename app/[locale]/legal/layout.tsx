import { unstable_setRequestLocale } from "next-intl/server";

export default async function LegalLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <article className="mx-auto mb-32 max-w-3xl px-4 xl:px-0">
      {children}
    </article>
  );
}
