"use client";

import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useCallback, useState } from "react";

export function CopyEmailButton({ email = "rodrigommfreitas@protonmail.com" }) {
  const t = useTranslations("final-cta");

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    setCopied(true);
    navigator.clipboard.writeText(email);
    setTimeout(() => setCopied(false), 2000);
  }, [email]);

  const handleEmail = useCallback(() => {
    window.location.href = `mailto:${email}`;
  }, [email]);

  return (
    <>
      <p className="z-10 mb-6 mt-8 text-center text-lg font-medium sm:text-xl md:text-2xl">
        {email}
      </p>

      <div className="z-10 flex justify-center gap-8">
        {copied ? (
          <button className="cta items-center justify-center gap-2 !px-2 sm:!px-6">
            <CheckIcon className="h-4 w-4" />
            <span>{t("copied")}</span>
          </button>
        ) : (
          <button
            onClick={handleCopy}
            className="cta items-center justify-center gap-2 !px-2 sm:!px-6"
          >
            <CopyIcon className="h-4 w-4" />
            <span>{t("copy")}</span>
          </button>
        )}
        <button
          onClick={handleEmail}
          className="cta-contrast items-center justify-center gap-2 !px-2 sm:!px-6"
        >
          <MailIcon className="h-4 w-4" />
          <span>{t("email")}</span>
        </button>
      </div>
    </>
  );
}
