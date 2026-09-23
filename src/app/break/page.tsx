import type { Metadata } from "next";
import { CertificationShowcase } from "@/components/certifications/CertificationShowcase";
import styles from "@/components/portfolio/Portfolio.module.css";
import { BreakHero } from "@/components/break/BreakHero";
import { SkillsShowcase } from "@/components/break/SkillsShowcase";

import { SecurityWork } from "@/components/break/SecurityWork";

export const metadata: Metadata = {
  title: "BREAK - Cybersecurity",
  description:
    "My cybersecurity knowledge, research, and practical security learning.",
};

export default function BreakPage() {
  return (
    <div className={`${styles.page} ${styles.break}`}>
      <BreakHero />
      <SkillsShowcase />
      <CertificationShowcase />
      <SecurityWork />
    </div>
  );
}
