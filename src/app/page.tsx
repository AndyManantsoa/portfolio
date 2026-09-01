import type { Metadata } from "next";
import {
  LandingHero,
  LandingAbout,
  BuildBreakSelector,
} from "@/components/landing/Hero";

export const metadata: Metadata = {
  title: "Andy - Developer × Security Researcher",
  description:
    "Software Developer and Cybersecurity Enthusiast. Explore my projects and security research.",
};

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingAbout />
      <BuildBreakSelector />
    </>
  );
}
