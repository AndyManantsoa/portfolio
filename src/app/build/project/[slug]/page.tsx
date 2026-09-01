import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { Code, ExternalLink, ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} - BUILD`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation back */}
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/build/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            {project.name}
          </h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-all hover:bg-blue-600"
              >
                <Code className="h-4 w-4" />
                View Code
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-transparent px-4 py-2 font-medium text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Problem & Solution */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Problem
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                {project.problemSolved}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Solution
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                This project implements a modern solution using cutting-edge
                technologies and best practices.
              </p>
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Key Features
              </h2>
              <ul className="mt-4 space-y-2">
                {project.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-1 flex-shrink-0 text-blue-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Lessons */}
          {(project.challenges.length > 0 ||
            project.lessonsLearned.length > 0) && (
            <div className="grid gap-8 md:grid-cols-2">
              {project.challenges.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Challenges
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="text-sm text-slate-600 dark:text-slate-400"
                      >
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.lessonsLearned.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Lessons Learned
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {project.lessonsLearned.map((lesson) => (
                      <li
                        key={lesson}
                        className="text-sm text-slate-600 dark:text-slate-400"
                      >
                        • {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
