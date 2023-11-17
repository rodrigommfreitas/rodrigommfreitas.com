import Head from "next/head";
import ActiveSectionContextProvider from "~/context/ActiveSectionContext";
import "~/styles/globals.css";

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <ActiveSectionContextProvider>
        <body className="min-h-screen w-screen">{children}</body>
      </ActiveSectionContextProvider>
    </html>
  );
}
