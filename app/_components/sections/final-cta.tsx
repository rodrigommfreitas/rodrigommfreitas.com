"use server";

import { CopyEmailButton } from "../copy-email-button";

export async function FinalCta() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-zinc-50 px-4 py-32 bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.15] sm:py-40 xl:px-0">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-50 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black sm:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="heading max-w-[800px] text-center">
        Ready to take <span className="blue-gradient">your</span> digital
        presence to the next level?
      </h2>
      <p className="text-color mt-12 text-center text-xl sm:text-2xl md:text-3xl">
        Send me an email today and let&apos;s discuss how I can help you achieve
        your goals!
      </p>
      <CopyEmailButton />
    </div>
  );
}
