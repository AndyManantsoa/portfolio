import type { Metadata } from "next";
import styles from "@/components/portfolio/Portfolio.module.css";
import { BuildHero } from "@/components/build/BuildHero";
import ProjectShowcase from "@/components/build/ProjectShowcase";
import { SkillsShowcase } from "@/components/build/SkillsShowcase";

export const metadata: Metadata = {
  title: "BUILD - Projects & Experience",
  description:
    "Explore my web development projects, technologies, and professional experience.",
};

export default function BuildPage() {
  return (
    <div className={styles.page}>
      <BuildHero />
      {/* Featured Projects */}
      <ProjectShowcase />
      {/* Skills Showcase */}
      <SkillsShowcase />
    </div>
  );
}
