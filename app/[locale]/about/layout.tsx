export const metadata = {
  title: "About",
  description: "Personal information about me.",
};

export default async function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto mb-32 min-h-screen max-w-5xl px-4 xl:px-0">
      {children}
    </div>
  );
}
