import Link from "next/link";
import { notFound } from "next/navigation";
import { Code, ExternalLink, ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = (await import("@/data/projects")).projects.find(
    (p: Project) => p.slug === slug,
  );

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
      <section className="border-b border-slate-200 bg-transparent px-4 py-12 dark:border-slate-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {project.status === "coming-soon" && (
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">Coming soon</p>
          )}
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            {project.title}
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
                Visit Website
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Technologies */}
          {project.technologies.length > 0 && <div>
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
          </div>}
        </div>
      </section>
    </div>
  );
}
