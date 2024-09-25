"use client";

import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import React, { useCallback, useState } from "react";

export function CopyEmailButton({ email = "rodrigommfreitas@protonmail.com" }) {
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
    <div className="mt-8">
      <p className="mb-6 text-center text-lg font-medium sm:text-xl md:text-2xl">
        {email}
      </p>
      <div className="flex justify-center gap-8">
        {copied ? (
          <button className="cta flex !w-full items-center justify-center gap-2">
            <CheckIcon className="h-4 w-4" />
            <span>Copied!</span>
          </button>
        ) : (
          <button
            onClick={handleCopy}
            className="cta flex !w-full items-center justify-center gap-2"
          >
            <CopyIcon className="h-4 w-4" />
            <span>Copy</span>
          </button>
        )}
        <button
          onClick={handleEmail}
          className="cta-contrast flex !w-full items-center justify-center gap-2"
        >
          <MailIcon className="h-4 w-4" />
          <span>Mail</span>
        </button>
      </div>
    </div>
  );
}
