"use client";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ParticlesBackground from "../components/ParticlesBackground";
import { sections } from "../data/sections";
import Hero from "../components/Hero";
import About from "../components/About";
import { Projects } from "~/components/Projects";
import Skills from "~/components/Skills";

export default function Home() {
  return (
    <main>
      <ParticlesBackground />
      <Navbar />
      <div className="h-screen snap-y snap-mandatory scroll-m-96 overflow-scroll">
        <Section sectionId={sections[0].name}>
          <Hero />
        </Section>
        <Section sectionId={sections[1].name}>
          <About />
        </Section>
        <Section sectionId={sections[2].name}>
          <Projects />
        </Section>
        <Section sectionId={sections[3].name}>
          <Skills />
        </Section>
        <Section sectionId={sections[4].name}>a</Section>
        <Section sectionId={sections[5].name}>a</Section>
      </div>
    </main>
  );
}
