"use client";

import { steps } from "@/src/data/steps";

import { HoverEffect } from "../ui/card-hover-effect";

export function Process() {
  return (
    <>
      <h2 className="heading mb-12 text-center sm:mb-16">
        My consistent <span className="blue-gradient">process</span>
      </h2>
      <HoverEffect items={steps} className="" />
    </>
  );
}
