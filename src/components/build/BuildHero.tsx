import { Reveal } from "@/components/portfolio/Reveal";
import Link from "next/link";
import { Code2, ArrowDown, ArrowUpRight } from "lucide-react";
import { MICROCOPY } from "@/lib/constants";
import styles from "@/components/portfolio/Portfolio.module.css";

export function BuildHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <Reveal delay={0}><p className={styles.eyebrow}><Code2 aria-hidden="true" /> Software Development</p></Reveal>
        <Reveal delay={0.1}><h1 className={styles.title}>BUILD</h1></Reveal>
        <Reveal delay={0.2}><p className={styles.tagline}>{MICROCOPY.build.tagline}</p></Reveal>
        <Reveal delay={0.3}><div className={styles.heroLinks}>
          <a href="#projects" className={styles.link}>Explore projects <ArrowDown aria-hidden="true" /></a>
          <Link href="/break" className={styles.link}>Explore BREAK <ArrowUpRight aria-hidden="true" /></Link>
        </div></Reveal>
      </div>
    </header>
  );
}
