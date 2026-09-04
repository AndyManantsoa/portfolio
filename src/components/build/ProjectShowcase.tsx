"use client";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

function ProjectShowcase() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.header
            key="project-showcase-header"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              BUILD / PROJECTS
            </p>
            <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
              Things I've built.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
              A collection of applications, systems, and experiments I've
              designed and developed.
            </p>
          </motion.header>
          <motion.section
            key="project-showcase-section"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-8 rounded-[28px] border border-slate-700/80 bg-[#0a1627]/95 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.35)] sm:p-8"
          >
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </motion.section>
        </AnimatePresence>
        <section className="mx-auto max-w-7xl"></section>

        <div className="mt-8 text-center">
          <a
            href="/build/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-all hover:bg-blue-600"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
