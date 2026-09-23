import { Reveal } from "@/components/portfolio/Reveal";
import Link from "next/link";
import { ScanSearch, ArrowDown, ArrowUpRight } from "lucide-react";
import { MICROCOPY } from "@/lib/constants";
import styles from "@/components/portfolio/Portfolio.module.css";

export function BreakHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <Reveal delay={0}><p className={styles.eyebrow}><ScanSearch aria-hidden="true" /> Web Pentesting</p></Reveal>
        <Reveal delay={0.1}><h1 className={styles.title}>BREAK</h1></Reveal>
        <Reveal delay={0.2}><p className={styles.tagline}>{MICROCOPY.break.tagline}</p></Reveal>
        <Reveal delay={0.3}><div className={styles.heroLinks}>
          <a href="#work" className={styles.link}>Explore security <ArrowDown aria-hidden="true" /></a>
          <Link href="/build" className={styles.link}>Explore BUILD <ArrowUpRight aria-hidden="true" /></Link>
        </div></Reveal>
      </div>
    </header>
  );
}
