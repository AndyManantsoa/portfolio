import Link from "next/link";
import { writeups, type Writeup } from "@/data/writeups";
import styles from "@/components/portfolio/Portfolio.module.css";

export function SecurityWorkRows({ entries = writeups }: { entries?: Writeup[] }) {
  return <div>{entries.map((entry, index) => <article className={styles.workRow} key={entry.slug}>
    <span className={styles.eyebrow}>{String(index + 1).padStart(2, "0")}</span>
    <div>
      <p className={styles.eyebrow}>{entry.category} · {entry.status}</p>
      <h3><Link href={`/break/writeups/${entry.slug}`}>{entry.title}</Link></h3>
      <p className={styles.description}>{entry.description}</p>
      <ul className={styles.workTopics}>{entry.tags.map(topic => <li key={topic}>{topic}</li>)}</ul>
    </div>
    <div><p className={styles.workTools}>{entry.tools.join(" / ")}</p><Link className={styles.link} href={`/break/writeups/${entry.slug}`}>{entry.status === "Lab outline" ? "View lab outline" : "View writeup"} →</Link></div>
  </article>)}</div>;
}

export function SecurityWork() {
  return <section className={styles.section} id="work"><div className={styles.container}>
    <header className={styles.header}><p className={styles.eyebrow}>BREAK / WORK</p><h2 className={styles.heading}>Selected security work.</h2><p className={styles.description}>Lab outlines for scoped learning. Completed testing and findings are not claimed.</p></header>
    <SecurityWorkRows />
  </div></section>;
}
