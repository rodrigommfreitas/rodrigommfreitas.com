"use server";

import { Link as LocalizedLink } from "@/src/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Footer() {
  const locale = await getLocale();
  const navT = await getTranslations("nav");
  const footerT = await getTranslations("footer");

  const navItems = {
    "/": {
      name: navT("home"),
    },
    "/about": {
      name: navT("about"),
    },
    //"/portfolio": {
    // name: t("portfolio"),
    //},
    //"/blog": {
    // name: t("blog"),
    // },
  };

  return (
    <footer className="border-t bg-zinc-50 dark:border-white/[0.2] dark:bg-black">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-start">
          <div className="mx-auto flex w-full flex-col items-center">
            <p className="text-color font-medium">
              rodrigommfreitas@protonmail.com
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://x.com/rdrgwrld"
                  rel="noreferrer"
                  target="_blank"
                  className="text-color transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/rodrigommfreitas"
                  rel="noreferrer"
                  target="_blank"
                  className="text-color transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="text-lg font-medium">{footerT("pages")}</p>

              <ul className="mt-6 space-y-4">
                {Object.entries(navItems).map(([path, { name }]) => (
                  <li key={path}>
                    <LocalizedLink
                      href={path}
                      className="text-color transition hover:opacity-75"
                    >
                      {name}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-lg font-medium">{footerT("helpful-links")}</p>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    href={`/${locale}#contact`}
                    className="text-color transition hover:opacity-75"
                  >
                    {footerT("contact")}
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/${locale}#faq`}
                    className="text-color transition hover:opacity-75"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-medium">Legal</p>

              <ul className="mt-6 space-y-4">
                <li>
                  <LocalizedLink
                    href="/legal/privacy-policy"
                    className="text-color transition hover:opacity-75"
                  >
                    {footerT("privacy-policy")}
                  </LocalizedLink>
                </li>

                <li>
                  <LocalizedLink
                    href="/legal/terms-of-service"
                    className="text-color transition hover:opacity-75"
                  >
                    {footerT("terms-of-service")}
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink
                    href="/legal/cookie-policy"
                    className="text-color transition hover:opacity-75"
                  >
                    {footerT("cookie-policy")}
                  </LocalizedLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto h-[1px] w-1/2 bg-neutral-300 dark:bg-white/[0.2]" />
        <p className="text-color text-center">&copy; {footerT("end")}</p>
      </div>
    </footer>
  );
}
