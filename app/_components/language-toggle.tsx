import { usePathname } from "@/src/i18n/routing";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export function LanguageToggle() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  // Language toggle function
  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "pt" : "en";

    router.replace(`/${nextLocale}${pathname}`, { scroll: false });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-8 w-8 items-center justify-center text-sm font-semibold sm:!ml-2"
    >
      {locale === "en" ? "PT" : "EN"}
    </button>
  );
}
