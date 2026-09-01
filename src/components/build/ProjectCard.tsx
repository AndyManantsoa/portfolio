"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      whileHover="hover"
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <Link href={`/build/project/${project.slug}`}>
        <div className="block">
          <motion.div
            variants={hoverVariants}
            className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100 dark:from-slate-800 dark:to-slate-900"
          >
            {/* Placeholder image - replace with actual images */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500/20 dark:text-blue-400/20">
                  {project.slug.toUpperCase().slice(0, 2)}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {project.name}
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {project.shortDescription || project.description}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="inline-block text-xs text-slate-500 dark:text-slate-400">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-4">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Code className="h-4 w-4" />
                  Code
                </a>
              )}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </motion.div>
  );
}
