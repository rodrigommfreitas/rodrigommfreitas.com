export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto mb-32 min-h-screen max-w-2xl px-4 xl:px-0">
      {children}
    </div>
  );
}
