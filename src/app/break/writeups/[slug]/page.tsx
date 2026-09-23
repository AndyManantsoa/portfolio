import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWriteupBySlug, getAllWriteups } from "@/data/writeups";
import styles from "@/components/portfolio/Portfolio.module.css";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const writeup = getWriteupBySlug((await params).slug);
  return { title: writeup ? `${writeup.title} - BREAK` : "Writeup not found", description: writeup?.description };
}
export function generateStaticParams() { return getAllWriteups().map(({ slug }) => ({ slug })); }

export default async function WriteupPage({ params }: { params: Promise<{ slug: string }> }) {
  const writeup = getWriteupBySlug((await params).slug);
  if (!writeup) notFound();
  const sections = [
    { label: "TARGET", content: writeup.target },
    { label: "SCOPE", content: writeup.scope },
    { label: "OBJECTIVE", content: writeup.objective },
    { label: "METHODOLOGY", content: writeup.methodology },
    { label: "FINDINGS", content: writeup.findings?.length ? writeup.findings : "No validated findings recorded. This is a lab outline." },
    { label: "IMPACT", content: writeup.impact || "Not assessed. No impact is claimed." },
    { label: "REPRODUCTION", content: writeup.reproduction?.length ? writeup.reproduction : "Pending a completed lab and reproducible evidence." },
    { label: "REMEDIATION", content: writeup.remediation?.length ? writeup.remediation : "Pending validated findings and a retest." },
    { label: "TOOLS", content: writeup.tools.join(" / ") },
  ];
  return <article className={`${styles.page} ${styles.break} ${styles.document}`}><div className={styles.documentInner}>
    <Link href="/break/writeups" className={styles.link}>← All writeups</Link>
    <header className={styles.documentHeader}><p className={styles.eyebrow}>{writeup.category} / {writeup.status}</p><h1 className={styles.documentTitle}>{writeup.title}</h1><p className={styles.description}>{writeup.description}</p>{writeup.status === "Lab outline" && <p className={styles.description}>Demonstration structure for a future lab report. Testing has not been documented.</p>}</header>
    {sections.map(section => <section className={styles.editorialSection} key={section.label}><h2 className={styles.eyebrow}>{section.label}</h2>{Array.isArray(section.content) ? <ol className={section.label === "METHODOLOGY" ? styles.methodology : styles.documentList}>{section.content.map(item => <li key={item}>{item}</li>)}</ol> : <p className={styles.description}>{section.content}</p>}</section>)}
  </div></article>;
}
