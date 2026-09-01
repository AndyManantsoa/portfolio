import type { Metadata } from "next";
import { BreakHero } from "@/components/break/BreakHero";
import { SkillsShowcase } from "@/components/break/SkillsShowcase";

export const metadata: Metadata = {
  title: "BREAK - Cybersecurity",
  description:
    "My cybersecurity knowledge, research, and practical security learning.",
};

export default function BreakPage() {
  return (
    <div className="space-y-20">
      <BreakHero />
      <SkillsShowcase />
      {/* Featured Sections */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-emerald-400">
            Explore Security
          </h2>
          <p className="mt-2 text-slate-400">
            Different areas of cybersecurity I'm studying and practicing.
          </p>

          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="/break/security"
                className="group rounded-lg border-2 border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur transition-all hover:border-emerald-500/80 hover:bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300">
                  Security Knowledge
                </h3>
                <p className="mt-2 text-slate-400">
                  Core security concepts, techniques, and areas of study.
                </p>
              </a>

              <a
                href="/break/tools"
                className="group rounded-lg border-2 border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur transition-all hover:border-emerald-500/80 hover:bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300">
                  Tools
                </h3>
                <p className="mt-2 text-slate-400">
                  Security tools I've learned and used in labs.
                </p>
              </a>

              <a
                href="/break/labs"
                className="group rounded-lg border-2 border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur transition-all hover:border-emerald-500/80 hover:bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300">
                  Labs
                </h3>
                <p className="mt-2 text-slate-400">
                  Practical security labs and hands-on learning.
                </p>
              </a>

              <a
                href="/break/writeups"
                className="group rounded-lg border-2 border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur transition-all hover:border-emerald-500/80 hover:bg-slate-900/50 md:col-span-2 lg:col-span-1"
              >
                <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300">
                  Writeups
                </h3>
                <p className="mt-2 text-slate-400">
                  Detailed writeups of challenges and exploits.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
