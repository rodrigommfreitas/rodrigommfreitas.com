import { type sections } from "../data/sections";

export type SectionName = (typeof sections)[number]["name"];
export type SectionHash = (typeof sections)[number]["hash"];
