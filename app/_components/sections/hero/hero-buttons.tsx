import Link from "next/link";

export function HeroButtons() {
  return (
    <>
      <Link href="#portfolio" className="cta">
        View My Work
      </Link>
      <Link href="#contact" className="cta-contrast">
        Contact Me
      </Link>
    </>
  );
}
