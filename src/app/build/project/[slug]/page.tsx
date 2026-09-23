import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "@/components/portfolio/Portfolio.module.css";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const entry = projects.find(p => p.slug === slug);
  return { title: entry ? `${entry.title} - BUILD` : "Project not found", description: entry?.description };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const sections = [
    { label: "OVERVIEW", content: project.overview || project.description },
    { label: "ROLE", content: project.role },
    { label: "STACK", content: project.technologies.length ? project.technologies.join(" / ") : undefined },
    { label: "PROBLEM", content: project.problem },
    { label: "SOLUTION", content: project.solution },
    { label: "ARCHITECTURE", content: project.architecture },
    { label: "KEY FEATURES", content: project.keyFeatures },
    { label: "TECHNICAL CHALLENGES", content: project.technicalChallenges },
  ];
  return <article className={`${styles.page} ${styles.document}`}><div className={styles.documentInner}>
    <Link href="/build/projects" className={styles.link}>← All projects</Link>
    <header className={styles.documentHeader}><p className={styles.eyebrow}>BUILD / {project.status === "coming-soon" ? "IN DEVELOPMENT" : "PROJECT"}{project.year ? ` · ${project.year}` : ""}</p><h1 className={styles.documentTitle}>{project.title}</h1></header>
    {sections.filter(section => Array.isArray(section.content) ? section.content.length > 0 : Boolean(section.content)).map(section => <section key={section.label} className={styles.editorialSection}><h2 className={styles.eyebrow}>{section.label}</h2>{Array.isArray(section.content) ? <ul className={styles.documentList}>{section.content.map(item => <li key={item}>{item}</li>)}</ul> : <p className={styles.description}>{section.content}</p>}</section>)}
    {(project.image || Boolean(project.screenshots?.length)) && <section className={styles.editorialSection}><h2 className={styles.eyebrow}>SCREENSHOTS</h2><div>
      {project.image && <figure className={styles.documentFigure}><Image src={project.image} alt={`${project.title} website screenshot`} sizes="(min-width: 1024px) 700px, 100vw" /></figure>}
      {project.screenshots?.map(screenshot => <figure key={screenshot.src} className={styles.documentFigure}><Image src={screenshot.src} alt={screenshot.alt} width={1440} height={900} sizes="(min-width: 1024px) 700px, 100vw" />{screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}</figure>)}
    </div></section>}
    {project.demo && project.demo !== "#" && <section className={styles.editorialSection}><h2 className={styles.eyebrow}>LIVE SITE</h2><a className={styles.link} href={project.demo} target="_blank" rel="noopener noreferrer">Visit website ↗</a></section>}
    {project.github && project.github !== "#" && <section className={styles.editorialSection}><h2 className={styles.eyebrow}>SOURCE CODE</h2><a className={styles.link} href={project.github} target="_blank" rel="noopener noreferrer">View source ↗</a></section>}
  </div></article>;
}
