import type { Metadata } from "next";
import { SecurityWorkRows } from "@/components/break/SecurityWork";
import { getAllWriteups } from "@/data/writeups";
import styles from "@/components/portfolio/Portfolio.module.css";

export const metadata: Metadata = { title: "Writeups - BREAK", description: "Scoped security labs and learning outlines." };
export default function WriteupsPage() {
  return <div className={`${styles.page} ${styles.break}`}><header className={styles.hero}><div className={styles.container}><p className={styles.eyebrow}>BREAK / WRITEUPS</p><h1 className={styles.heading}>Security learning notes.</h1><p className={styles.description}>Lab outlines; no completed findings or professional engagements are claimed.</p></div></header><section className={styles.section}><div className={styles.container}><SecurityWorkRows entries={getAllWriteups()} /></div></section></div>;
}
