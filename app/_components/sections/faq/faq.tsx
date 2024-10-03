"use server";

import { getTranslations } from "next-intl/server";

import { FAQItem } from "./faq-item";

export async function FAQ() {
  const t = await getTranslations("faq");

  const faqs = [
    {
      question: t("faq-1-q"),
      answer: t("faq-1-a"),
    },
    {
      question: t("faq-2-q"),
      answer: t("faq-2-a"),
    },
    {
      question: t("faq-3-q"),
      answer: t("faq-3-a"),
    },
    {
      question: t("faq-4-q"),
      answer: t("faq-4-a"),
    },
    {
      question: t("faq-5-q"),
      answer: t("faq-5-a"),
    },
  ];

  return (
    <>
      <h2 className="heading mb-12 text-center sm:mb-16">
        {" "}
        {t("title")}{" "}
        <span className="blue-gradient pr-1">{t("title-gradient")}</span>
      </h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </li>
        ))}
      </ul>
    </>
  );
}
