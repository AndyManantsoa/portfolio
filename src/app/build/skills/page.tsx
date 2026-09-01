import type { Metadata } from "next";
import { SkillGrid } from "@/components/build/SkillGrid";
import { skillsCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills - BUILD",
  description:
    "Technologies and skills I use to build modern web applications.",
};

export default function SkillsPage() {
  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            The tools and technologies I use to build robust web applications.
          </p>
        </div>

        <SkillGrid categories={skillsCategories} />
      </div>
    </div>
  );
}
