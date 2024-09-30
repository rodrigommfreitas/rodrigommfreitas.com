import { cn } from "@/app/_components/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { ThemeProvider } from "next-themes";

import { FloatingNav } from "../_components/floating-navbar";
import { Footer } from "../_components/footer";
import "../globals.css";

export const generateMetadata = async () => {
  const locale = getLocale();
  const t = await getTranslations("metadata");

  return {
    metadataBase: new URL("https://rodrigommfreitas.com"),
    title: {
      default: "Rodrigo Freitas",
      template: "%s | Rodrigo Freitas",
    },
    description: t("description"),
    openGraph: {
      title: "Rodrigo Freitas",
      description: t("description"),
      url: "https://rodrigommfreitas.com",
      siteName: "Rodrigo Freitas",
      locale: locale,
      type: "website",
    },
    keywords: [
      "Rodrigo Freitas",
      "Software",
      "Engineer",
      "Desenvolvedor",
      "Developer",
      "Full Stack",
      "Freelancer",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Portfolio",
      "Landing Page",
      "Blog",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={cn("antialiased", GeistSans.className, GeistMono.className)}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <NextIntlClientProvider messages={messages}>
            <div className="min-w-screen min-h-screen bg-zinc-50 text-black dark:bg-black dark:text-white">
              <main className="mx-auto antialiased md:flex-row md:px-0">
                <FloatingNav />
                {children}
                <Footer />
              </main>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
