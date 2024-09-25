"use server";

import { lastUpdated, termsOfService } from "@/src/data/legal/terms-of-service";

import { LegalItemList } from "../legal-item-list";

export default async function TermsOfService() {
  return (
    <>
      <h1 className="heading mb-8 pt-32 text-center">Terms of Service</h1>
      <p className="text-color mb-16 text-center">Last updated {lastUpdated}</p>
      <LegalItemList items={termsOfService} />
    </>
  );
}
