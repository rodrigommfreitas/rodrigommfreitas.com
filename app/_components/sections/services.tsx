"use client";

import { Link } from "@/src/i18n/routing";
import { motion } from "framer-motion";
import { DatabaseBackupIcon, ServerIcon, TagIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { cn } from "../utils";

export function Services() {
  const titleT = useTranslations("services");
  const itemsT = useTranslations("services-items");
  const skeletonsT = useTranslations("services-skeleton-items");

  const SkeletonOne = () => {
    return (
      <motion.img
        src="/landing/custom-web-development.jpg"
        className="h-[180px] w-full rounded-xl"
        alt="Custom Web Development"
      />
    );
  };

  const SkeletonTwo = () => {
    const variants = {
      initial: {
        width: 0,
      },
      animate: {
        width: "100%",
        transition: {
          duration: 0.2,
        },
      },
      hover: {
        width: ["0%", "100%"],
        transition: {
          duration: 2,
        },
      },
    };
    const arr = new Array(6).fill(0);

    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      >
        {arr.map((_, i) => (
          <motion.div
            key={"skelenton-two" + i}
            variants={variants}
            style={{
              maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }}
            className="flex h-4 w-full flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-neutral-100 p-2 dark:border-white/[0.2] dark:bg-black"
          ></motion.div>
        ))}
      </motion.div>
    );
  };

  const SkeletonThree = () => {
    return (
      <motion.img
        src="/landing/ux-ui.jpg"
        className="h-[180px] w-full rounded-xl"
        alt="UX/UI Design"
      />
    );
  };

  const SkeletonFour = () => {
    const first = {
      initial: {
        x: 20,
        rotate: -5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    const second = {
      initial: {
        x: -20,
        rotate: 5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      >
        <motion.div
          variants={first}
          className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
        >
          <ServerIcon />
          <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
            {skeletonsT("skeleton-4-description-1")}
          </p>
          <p className="mt-4 rounded-full border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-900/20">
            {skeletonsT("skeleton-4-title-1")}
          </p>
        </motion.div>
        <motion.div className="relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black">
          <TagIcon />
          <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
            {skeletonsT("skeleton-4-description-2")}
          </p>
          <p className="mt-4 rounded-full border border-green-500 bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/20">
            {skeletonsT("skeleton-4-title-2")}
          </p>
        </motion.div>
        <motion.div
          variants={second}
          className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
        >
          <DatabaseBackupIcon />
          <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
            {skeletonsT("skeleton-4-description-3")}
          </p>
          <p className="mt-4 rounded-full border border-orange-500 bg-orange-100 px-2 py-0.5 text-xs text-orange-600 dark:bg-orange-900/20">
            {skeletonsT("skeleton-4-title-3")}
          </p>
        </motion.div>
      </motion.div>
    );
  };

  const SkeletonFive = () => {
    const variants = {
      initial: {
        x: 0,
      },
      animate: {
        x: 10,
        rotate: 5,
        transition: {
          duration: 0.2,
        },
      },
    };
    const variantsSecond = {
      initial: {
        x: 0,
      },
      animate: {
        x: -10,
        rotate: -5,
        transition: {
          duration: 0.2,
        },
      },
    };

    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      >
        <motion.div
          variants={variants}
          className="flex w-fit items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 pr-4 dark:border-white/[0.2] dark:bg-black"
        >
          <Image
            src="/landing/client-portrait.jpg"
            alt="Client's Portrait"
            height="100"
            width="100"
            className="h-6 w-6 flex-shrink-0 rounded-full object-cover object-top"
          />
          <p className="text-xs text-neutral-500">
            {skeletonsT("skeleton-5-text-1")}
          </p>
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="ml-auto flex w-fit items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2 pl-4 dark:border-white/[0.2] dark:bg-black"
        >
          <p className="text-xs text-neutral-500">
            {skeletonsT("skeleton-5-text-2")}
          </p>
          <Image
            src="/landing/portrait.jpg"
            alt="Rodrigo's Portrait"
            height="100"
            width="100"
            className="h-6 w-6 flex-shrink-0 rounded-full"
          />
        </motion.div>
      </motion.div>
    );
  };

  const SkeletonSix = () => {
    return (
      <motion.img
        src="/landing/consultation.jpg"
        className="h-[180px] w-full rounded-xl"
        alt="Consultation"
      />
    );
  };

  const SkeletonSeven = () => {
    return (
      <motion.img
        src="/landing/handshake.jpg"
        className="h-[180px] w-full rounded-xl"
        alt="Handshake"
      />
    );
  };

  const SkeletonEight = () => {
    return (
      <motion.div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl pt-6 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
        <p className="flex text-center text-xl font-bold text-neutral-600 dark:text-neutral-200">
          {skeletonsT("skeleton-8-title")}
        </p>
        <p className="text-center font-normal text-neutral-600 dark:text-neutral-300">
          {skeletonsT("skeleton-8-description")}
        </p>
        <Link href={"#contact"} className="cta">
          {skeletonsT("skeleton-8-cta")}
        </Link>
      </motion.div>
    );
  };

  const items = [
    {
      title: itemsT("item-1-title"),
      description: itemsT("item-1-description"),
      header: <SkeletonOne />,
      className: "md:col-span-1",
    },
    {
      title: itemsT("item-2-title"),
      description: <span>{itemsT("item-2-description")}</span>,
      header: <SkeletonThree />,
      className: "md:col-span-1",
    },
    {
      title: itemsT("item-3-title"),
      description: <span>{itemsT("item-3-description")}</span>,
      header: <SkeletonFour />,
      className: "md:col-span-1",
    },
    {
      title: itemsT("item-4-title"),
      description: <span>{itemsT("item-4-description")}</span>,
      header: <SkeletonTwo />,
      className: "md:col-span-2",
    },
    {
      title: itemsT("item-5-title"),
      description: <span>{itemsT("item-5-description")}</span>,
      header: <SkeletonFive />,
      className: "md:col-span-1",
    },
    {
      title: itemsT("item-6-title"),
      description: <span>{itemsT("item-6-description")}</span>,
      header: <SkeletonSix />,
    },
    {
      title: itemsT("item-7-title"),
      description: <span>{itemsT("item-7-description")}</span>,
      header: <SkeletonSeven />,
      className: "md:col-span-1",
    },
    {
      header: <SkeletonEight />,
      className: "md:col-span-1 border-2 border-blue-600 dark:border-blue-500",
    },
  ];

  return (
    <>
      <h2 className="heading mb-12 sm:mb-16">
        {titleT("title")}{" "}
        <span className="blue-gradient">{titleT("title-gradient")}</span>
      </h2>
      <BentoGrid className="mx-auto max-w-7xl md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
          />
        ))}
      </BentoGrid>
    </>
  );
}
