import { motion } from "framer-motion";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import portrait from "../../public/portrait.jpg";
import { useSectionInView } from "~/hooks/useSectionInView";
import { useActiveSectionContext } from "~/context/ActiveSectionContext";

const Hero: FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div
      ref={ref}
      className="w-[calc(100vw-50px)] max-w-[50rem] text-center text-white sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portrait}
              alt="Rodrigo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
              draggable={false}
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 select-none text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] text-white/90 sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-white">Hello, I{"'"}m Rodrigo.</span> I
        {"'"}m a{" "}
        <span className="font-bold text-white">full-stack developer</span> with{" "}
        <span className="font-bold text-white">2 years</span> of experience. I
        build <span className="italic text-white">sites & apps</span>. My focus
        is <span className="text-white underline">React</span> and{" "}
        <span className="text-white underline">TypeScript</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium md:flex-row md:gap-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex w-[268px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-white/80 active:scale-95 md:w-fit"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <div className="flex gap-2">
          <a
            className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1A1A1A] bg-opacity-80 px-7 py-3 text-white/80 outline-none backdrop-blur-[0.5rem] transition hover:bg-opacity-100 hover:text-white active:scale-95"
            href="/CV.pdf"
            download
          >
            View CV{" "}
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </a>

          <a
            className="flex cursor-pointer items-center gap-2 rounded-full bg-[#1A1A1A] bg-opacity-80 p-4 text-white/60 backdrop-blur-[0.5rem] transition hover:bg-opacity-100 hover:text-white/80 active:scale-95"
            href="https://www.linkedin.com/in/rodrigommfreitas/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="flex cursor-pointer items-center gap-2 rounded-full bg-[#1A1A1A] bg-opacity-80 p-4 text-white/60 backdrop-blur-[0.5rem] transition hover:bg-opacity-100 hover:text-white/80 active:scale-95"
            href="https://github.com/rodrigommfreitas"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
