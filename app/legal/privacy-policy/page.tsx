"use server";

import { lastUpdated, privacyPolicy } from "@/src/data/legal/privacy-policy";

import { LegalItemList } from "../legal-item-list";

export default async function PrivacyPolicy() {
  return (
    <>
      <h1 className="heading mb-8 pt-32 text-center">Privacy Policy</h1>
      <p className="text-color mb-16 text-center">Last updated {lastUpdated}</p>
      <LegalItemList items={privacyPolicy} />
    </>
  );
}
