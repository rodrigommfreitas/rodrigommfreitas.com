import { projects } from "@/src/data/projects";
import Link from "next/link";

export function Portfolio() {
  return (
    <>
      <h2 className="heading mb-16 text-center">
        Recent <span className="blue-gradient">projects</span>
      </h2>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((item) => (
          <li
            className="rounded-2xl border bg-white p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all hover:bg-white/5 dark:border-white/[0.1] dark:bg-zinc-950 dark:hover:bg-zinc-900/75"
            key={item.id}
          >
            <article className="">
              <div className="mb-10 flex h-[33vh] items-center justify-center overflow-hidden rounded-2xl bg-blue-500"></div>

              <h3 className="text-2xl !font-semibold">{item.title}</h3>

              <p className="text-color mt-4 text-sm font-light lg:text-lg lg:font-normal">
                {item.des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {/*item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                    ))*/}
                </div>

                <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                  Check Live Site
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col items-center">
        <p className="text-color mb-6 text-center text-lg sm:text-xl">
          These are just a few of the recent projects I&apos;ve developed.
        </p>

        <Link href="/portfolio" className="cta-contrast">
          View Full Portfolio
        </Link>
      </div>
    </>
  );
}
