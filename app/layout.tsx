import { cn } from "@/app/_components/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { FloatingNav } from "./_components/floating-navbar";
import { Footer } from "./_components/footer";
import { Toast, ToastProvider } from "./_components/ui/toast";
import { Toaster } from "./_components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rodrigommfreitas.com"),
  title: {
    default: "Rodrigo Freitas",
    template: "%s | Rodrigo Freitas",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Rodrigo Freitas",
    description: "Developer, writer, and creator.",
    url: "https://rodrigommfreitas.com",
    siteName: "Rodrigo Freitas",
    locale: "pt_PT",
    type: "website",
  },
  keywords: [
    "Rodrigo Freitas",
    "Software Engineer",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn("antialiased", GeistSans.className, GeistMono.className)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="min-w-screen min-h-screen bg-zinc-50 text-black dark:bg-black dark:text-white">
            <main className="mx-auto antialiased md:flex-row md:px-0">
              <FloatingNav />
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
