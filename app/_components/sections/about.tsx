"use server";

import Image from "next/image";
import Link from "next/link";

export default async function About() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
      <Image
        src="/landing/me.jpg"
        alt="Rodrigo Freitas"
        width={240}
        height={240}
        className="mb-2 max-h-[200px] max-w-[200px] rounded-full shadow-lg shadow-black/30 md:mb-0 md:max-h-[240px] md:max-w-[240px] md:object-none"
      />

      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="heading">About Me</h2>
        <div className="mx-auto mb-4 mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-blue-300 dark:to-black md:mx-0"></div>

        <p className="text-color mb-4 max-w-[600px] text-lg sm:text-xl">
          I&apos;m a developer, freelancer and lifelong learner based in
          Portugal. I specialize in building custom solutions that are fast,
          responsive, and user-friendly. Whether it&apos;s a landing page or a
          complex application, I help businesses turn ideas into reality.
        </p>
        <Link href="/about" className="cta-contrast">
          Learn More About Me
        </Link>
      </div>
    </div>
  );
}
