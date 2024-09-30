"use server";

import About from "../_components/sections/about";
import { Blog } from "../_components/sections/blog";
import { Examples } from "../_components/sections/examples";
import { FAQ } from "../_components/sections/faq/faq";
import { FinalCta } from "../_components/sections/final-cta";
import { Hero } from "../_components/sections/hero/hero";
import { Portfolio } from "../_components/sections/portfolio";
import { Process } from "../_components/sections/process";
import { Services } from "../_components/sections/services";

export default async function Home() {
  return (
    <>
      <Hero />

      <section
        id="about"
        className="mx-auto flex max-w-7xl justify-center px-4 md:mt-20 xl:px-0"
      >
        <About />
      </section>
      {/*
      <section
        id="portfolio"
        className="mx-auto mt-24 max-w-7xl px-4 md:mt-40 xl:px-0"
      >
        <Portfolio />
      </section>
  */}

      {/* Testimonials (when I have some)*/}

      <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-4 md:mt-40 xl:px-0">
        <Services />
      </section>

      <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-2 md:mt-40 xl:px-0">
        <Process />
      </section>

      <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-4 md:mt-40 xl:px-0">
        <Examples />
      </section>
      {/*
      <section
        id="blog"
        className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-4 md:mt-40 xl:px-0"
      >
        <Blog />
      </section>
*/}

      <section
        id="faq"
        className="mx-auto mt-24 max-w-5xl px-4 md:mt-40 xl:px-0"
      >
        <FAQ />
      </section>

      <section id="contact">
        <FinalCta />
      </section>

      {/*
      <div className="mx-auto max-w-7xl">
        <p className="prose prose-neutral dark:prose-invert">
          I'm a <span className="font-semibold">full stack developer</span>,
          optimist, and lifelong learner. I currently study Computer Science at
          the University of Madeira, Portugal. I specialize in building web
          applications with .
        </p>

        <p className="prose prose-neutral dark:prose-invert">
          Despite spending countless hours in front of screens, my passion for
          nature and travel remains a vital part of who I am. Whether I'm at the
          beach or in the mountains, these moments remind me of the importance
          of balance in life.
        </p>
        <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Over the past decade, I've written content on my blog and
            newsletter. I try to keep things simple. You'll find writing about
            technologies I'm interested in at the time, or how I'm learning and
            growing in my career, sharing knowledge along the way.
          </p>
        </div>
        <div className="my-8 flex w-full flex-col space-y-4">
          <BlogLink
            name="What Makes A Great Developer Experience?"
            slug="developer-experience"
          />
          <BlogLink name="What is Developer Relations?" slug="devrel" />
          <BlogLink name="The Story of Heroku" slug="heroku" />
        </div>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I invest small angel checks into early stage startups building tools
            for developers.
          </p>
        </div>
        <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
          <a
            href="https://linear.app"
            className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          ></a>
          <a
            href="https://supabase.com"
            className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          ></a>
          <a
            href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce"
            className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          ></a>
          <a
            href="https://resend.com"
            className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          ></a>
          <a
            href="https://bun.sh"
            className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          ></a>
        </div>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I've worked with and advised companies on{" "}
            <Link href="/blog/developer-marketing">developer marketing</Link>,{" "}
            <Link href="/blog/devrel">developer relations</Link>, building
            open-source communities, product-led growth, and more.
          </p>
        </div>
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:space-x-4 md:space-y-0">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/leeerob"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">follow me</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://leerob.substack.com"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">get email updates</p>
            </a>
          </li>
        </ul>
      </div>
  */}
    </>
  );
}
