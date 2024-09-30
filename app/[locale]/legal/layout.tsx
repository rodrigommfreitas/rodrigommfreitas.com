export default async function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="mx-auto mb-32 max-w-3xl px-4 xl:px-0">
      {children}
    </article>
  );
}
