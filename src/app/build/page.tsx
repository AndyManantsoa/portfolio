import type { Metadata } from "next";
import { BuildHero } from "@/components/build/BuildHero";
import { ProjectGrid } from "@/components/build/ProjectCard";
import { getAllProjects } from "@/data/projects";
import { SkillsShowcase } from "@/components/build/SkillsShowcase";

export const metadata: Metadata = {
  title: "BUILD - Projects & Experience",
  description:
    "Explore my web development projects, technologies, and professional experience.",
};

export default function BuildPage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-20">
      <BuildHero />

      {/* Featured Projects */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            A selection of projects I've built to solve real problems and
            explore new technologies.
          </p>

          <div className="mt-12">
            <ProjectGrid projects={projects.slice(0, 6)} />
          </div>

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
      <SkillsShowcase />
    </div>
  );
}
