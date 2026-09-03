"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react/";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      {/* Project image */}
      <Link href={`/build/project/${project.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

          {/* Open icon */}
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </div>
        </div>
      </Link>

      {/* Project information */}
      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/build/project/${project.slug}`}>
              <h3 className="text-xl font-medium tracking-tight transition-opacity group-hover:opacity-70">
                {project.title}
              </h3>
            </Link>

            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-400">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/10"
              >
                <SiGithub className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
