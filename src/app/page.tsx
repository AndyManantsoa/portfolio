import type { Metadata } from "next";
import { LandingHero, BuildBreakSelector } from "@/components/landing/Hero";

import { AboutSections } from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "Andy - Developer × Security Researcher",
  description:
    "Software Developer and Cybersecurity Enthusiast. Explore my projects and security research.",
};

export default function Home() {
  return (
    <>
      <LandingHero />
      <BuildBreakSelector />
      <AboutSections />
    </>
  );
}
