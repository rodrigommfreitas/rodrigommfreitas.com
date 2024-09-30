import { cn } from "@/app/_components/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";

import { FloatingNav } from "../_components/floating-navbar";
import { Footer } from "../_components/footer";
import "../globals.css";

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
