export const metadata = {
  title: "Rodrigo Freitas",
  description: "Personal website of Rodrigo Freitas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
