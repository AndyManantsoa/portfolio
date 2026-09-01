import type { Metadata } from "next";
import { motion } from "framer-motion";
import { ProjectGrid } from "@/components/build/ProjectCard";
import { getAllProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "All Projects - BUILD",
  description:
    "Explore all of my web development and software engineering projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            All Projects
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {projects.length} projects showcasing my skills across different
            domains.
          </p>
        </div>

        {projects.length > 0 ? (
          <ProjectGrid projects={projects} />
        ) : (
          <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-slate-600 dark:text-slate-400">
              No projects yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
