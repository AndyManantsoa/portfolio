import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Wrench, FlaskConical, FileText, ArrowUpRight } from "lucide-react";
import styles from "@/components/portfolio/Portfolio.module.css";
import { BreakHero } from "@/components/break/BreakHero";
import { SkillsShowcase } from "@/components/break/SkillsShowcase";

export const metadata: Metadata = {
  title: "BREAK - Cybersecurity",
  description:
    "My cybersecurity knowledge, research, and practical security learning.",
};

const areas = [
  { href: "/break/security", title: "Security knowledge", description: "Core security concepts, techniques, and areas of study.", icon: ShieldCheck },
  { href: "/break/tools", title: "Tools", description: "Security tools I have learned and used in labs.", icon: Wrench },
  { href: "/break/labs", title: "Labs", description: "Practical security labs and hands-on learning.", icon: FlaskConical },
  { href: "/break/writeups", title: "Writeups", description: "Detailed notes on challenges, findings, and exploits.", icon: FileText },
];

export default function BreakPage() {
  return (
    <div className={`${styles.page} ${styles.break}`}>
      <BreakHero />
      <SkillsShowcase />
      <section className={styles.section} id="security">
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>BREAK / EXPLORE</p>
            <h2 className={styles.heading}>From theory to practice.</h2>
            <p className={styles.description}>Explore my security learning, practical work, and research notes.</p>
          </header>
          <div className={styles.explore}>
            {areas.map(({ href, title, description, icon: Icon }) => (
              <Link key={href} href={href} className={styles.exploreLink}>
                <Icon aria-hidden="true" />
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
