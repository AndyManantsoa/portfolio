import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/build/ExperienceTimeline";
import { getAllExperience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience - BUILD",
  description: "My professional development experience and career timeline.",
};

export default function ExperiencePage() {
  const experiences = getAllExperience();

  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Experience
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            My professional journey in web development and software engineering.
          </p>
        </div>

        {experiences.length > 0 ? (
          <ExperienceTimeline experiences={experiences} />
        ) : (
          <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-slate-600 dark:text-slate-400">
              Experience details coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
