import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "@/components/portfolio/Portfolio.module.css";

export default function ProjectShowcase() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>BUILD / PROJECTS</p>
          <h2 className={styles.heading}>Things I&apos;ve built.</h2>
          <p className={styles.description}>A collection of applications, systems, and experiments I&apos;ve designed and developed.</p>
        </header>
        <div className={styles.projects}>
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} eager={index === 0} />)}
        </div>
        <div className={styles.tooling}>
          <Link href="/build/projects" className={styles.link}>View all projects <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
