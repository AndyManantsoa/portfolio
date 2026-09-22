import Link from "next/link";
import { ScanSearch, ArrowDown, ArrowUpRight } from "lucide-react";
import { MICROCOPY } from "@/lib/constants";
import styles from "@/components/portfolio/Portfolio.module.css";

export function BreakHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.eyebrow}><ScanSearch aria-hidden="true" /> Web Pentesting</p>
        <h1 className={styles.title}>BREAK</h1>
        <p className={styles.tagline}>{MICROCOPY.break.tagline}</p>
        <div className={styles.heroLinks}>
          <a href="#security" className={styles.link}>Explore security <ArrowDown aria-hidden="true" /></a>
          <Link href="/build" className={styles.link}>Explore BUILD <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
    </header>
  );
}
