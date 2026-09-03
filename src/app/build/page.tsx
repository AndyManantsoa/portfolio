import type { Metadata } from "next";
import { BuildHero } from "@/components/build/BuildHero";
import ProjectGrid from "@/components/build/ProjectGrid";

import { SkillsShowcase } from "@/components/build/SkillsShowcase";

export const metadata: Metadata = {
  title: "BUILD - Projects & Experience",
  description:
    "Explore my web development projects, technologies, and professional experience.",
};

export default function BuildPage() {
  return (
    <div className="space-y-20">
      <BuildHero />

      {/* Featured Projects */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            BUILD / PROJECTS
          </p>
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
            Things I've built.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
            A collection of applications, systems, and experiments I've designed
            and developed.
          </p>

          <div className="mx-auto max-w-7xl">
            <ProjectGrid />
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
