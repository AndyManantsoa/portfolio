import ProjectGrid from "@/components/build/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-20 max-w-3xl">
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
        </section>

        {/* Projects */}
        <ProjectGrid />
      </div>
    </main>
  );
}
