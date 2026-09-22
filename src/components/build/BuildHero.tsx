import Link from "next/link";
import { Code2, ArrowDown, ArrowUpRight } from "lucide-react";
import { MICROCOPY } from "@/lib/constants";
import styles from "@/components/portfolio/Portfolio.module.css";

export function BuildHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.eyebrow}><Code2 aria-hidden="true" /> Software Development</p>
        <h1 className={styles.title}>BUILD</h1>
        <p className={styles.tagline}>{MICROCOPY.build.tagline}</p>
        <div className={styles.heroLinks}>
          <a href="#projects" className={styles.link}>Explore projects <ArrowDown aria-hidden="true" /></a>
          <Link href="/break" className={styles.link}>Explore BREAK <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
    </header>
  );
}
