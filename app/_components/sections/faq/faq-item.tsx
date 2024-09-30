"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b dark:border-white/[0.2]">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl !font-medium">{question}</h3>
        <ChevronDown
          className={`text-color h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180 transform" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`}
        aria-hidden={!isOpen}
      >
        <p className="text-color pb-5 text-lg">{answer}</p>
      </div>
    </div>
  );
}
