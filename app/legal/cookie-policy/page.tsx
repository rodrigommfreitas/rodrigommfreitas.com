"use server";

import { cookiePolicy, lastUpdated } from "@/src/data/legal/cookie-policy";

import { LegalItemList } from "../legal-item-list";

export default async function CookiePolicy() {
  return (
    <>
      <h1 className="heading mb-8 pt-32 text-center">Cookie Policy</h1>
      <p className="text-color mb-16 text-center">Last updated {lastUpdated}</p>
      <LegalItemList items={cookiePolicy} />
    </>
  );
}
