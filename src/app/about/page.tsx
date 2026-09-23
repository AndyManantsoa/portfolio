import type { Metadata } from "next";
import { LandingHero } from "@/components/landing/Hero";
import { AboutSections } from "@/components/about/AboutSections";

export const metadata: Metadata = { title: "About - Andy Manantsoa" };
export default function AboutPage() {
  return <><LandingHero /><AboutSections /></>;
}
