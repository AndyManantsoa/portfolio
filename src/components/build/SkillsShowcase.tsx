"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BrushCleaning,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  PanelsTopLeft,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  SiDocker,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiExpo,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiPostgresql,
  SiTypescript,
  SiGit,
  SiGithub,
  SiPostman,
  SiOpenid,
  SiSupabase,
  SiPrisma,
  SiAnthropic,
  SiGithubcopilot,
  SiCanvas,
  SiFigma,
  SiFastapi,
} from "react-icons/si";

const skillSections = [
  {
    id: "programming-languages",
    label: "Programming Languages",
    icon: Code2,
    title: "Programming Languages",
    cards: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-xl text-[#f7df1e]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-xl text-[#3178c6]" />,
      },

      { name: "Python", icon: <SiPython className="text-xl text-[#3776ab]" /> },
      {
        name: "Java",
        icon: <SiOpenjdk className="text-xl text-[#ed8b00]" />,
      },
      {
        name: "C Language",
        icon: <SiC className="text-xl text-[#00599c]" />,
      },
      {
        name: "C++",
        icon: <SiCplusplus className="text-xl text-red-200" />,
      },
    ],
  },
  {
    id: "frontend-development",
    label: "Frontend Development",
    icon: PanelsTopLeft,
    title: "Frontend Development",
    cards: [
      { name: "React", icon: <SiReact className="text-xl text-[#61dafb]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-xl text-white" /> },
      {
        name: "Expo",
        icon: <SiExpo className="text-xl text-cyan-300" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-xl text-[#38bdf8]" />,
      },
    ],
  },
  {
    id: "backend-development",
    label: "Backend Development",
    icon: Database,
    title: "Backend Development",
    cards: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-xl text-[#68a063]" />,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="text-xl text-cyan-300" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-xl text-yellow-300" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-xl text-green-300" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-xl text-cyan-300" />,
      },
      { name: "Python", icon: <SiPython className="text-xl text-[#3776ab]" /> },
    ],
  },
  {
    id: "cloud-deployment",
    label: "Cloud & Deployment",
    icon: Cloud,
    title: "Cloud & Deployment",
    cards: [
      { name: "Docker", icon: <SiDocker className="text-xl text-[#2496ed]" /> },
      {
        name: "Vercel",
        icon: <SiVercel className="text-xl text-[#000000]" />,
      },
    ],
  },
] as const;

const toolingTags = [
  { name: "Git", accent: "#f05032", icon: SiGit },
  { name: "GitHub", accent: "#a1a1aa", icon: SiGithub },
  { name: "Postman", accent: "#ff6c37", icon: SiPostman },
  { name: "Supabase", accent: "#3ecf8e", icon: SiSupabase },
  { name: "Prisma", accent: "#5a67d8", icon: SiPrisma },
  { name: "Claude", accent: "#d97757", icon: SiAnthropic },
  { name: "Copilot", accent: "#a1a1aa", icon: SiGithubcopilot },
  { name: "Canvas", accent: "#00c4cc", icon: SiCanvas },
  { name: "Figma", accent: "#f24e1e", icon: SiFigma },
  { name: "ChatGPT", accent: "#22c55e", icon: SiOpenid },
] as const;

export function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState<
    (typeof skillSections)[number]["id"]
  >(skillSections[0].id);

  const activeSection = useMemo(
    () =>
      skillSections.find((section) => section.id === activeTab) ??
      skillSections[0],
    [activeTab],
  );

  return (
    <div className="min-h-screen bg-[#040b16] px-4 py-20 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            My Skills
          </h1>
        </header>

        <nav className="mb-8">
          <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-2 shadow-[0_0_0_1px_rgba(15,23,42,0.45)] backdrop-blur-sm">
            {skillSections.map((section) => {
              const Icon = section.icon;
              const isActive = activeTab === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTab(section.id)}
                  className={[
                    "group relative flex flex-1 min-w-[180px] items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ease-out",
                    isActive
                      ? "bg-blue-500 text-white shadow-[0_8px_20px_rgba(59,130,246,0.35)]"
                      : "border border-transparent bg-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/60 hover:text-slate-200",
                  ].join(" ")}
                >
                  <Icon
                    className={
                      isActive
                        ? "h-4 w-4"
                        : "h-4 w-4 text-slate-400 group-hover:text-slate-200"
                    }
                  />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeSection.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-8 rounded-[28px] border border-slate-700/80 bg-[#0a1627]/95 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.35)] sm:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-cyan-400 sm:text-3xl">
              {activeSection.title}
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {activeSection.cards.map((card) => (
                <motion.article
                  key={card.name}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="group rounded-2xl border border-slate-700/80 bg-[#0c1a2d] p-5 text-center shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] transition-all duration-200 hover:border-cyan-400/50 hover:bg-[#101f35] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_16px_32px_rgba(14,116,144,0.12)]"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/20 bg-slate-800/80 text-cyan-300 shadow-[inset_0_0_18px_rgba(34,211,238,0.08)] transition-all duration-200 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),inset_0_0_18px_rgba(34,211,238,0.14)]">
                    {card.icon}
                  </div>

                  <div className="text-base font-semibold text-slate-100">
                    {card.name}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </AnimatePresence>

        <section className="rounded-[28px] border border-slate-700/80 bg-[#0a1627]/95 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.35)] sm:p-8">
          <h2 className="text-center text-2xl font-semibold tracking-[-0.05em] text-cyan-400 sm:text-3xl">
            AI &amp; Developer Tooling
          </h2>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {toolingTags.map((tag) => (
              <button
                key={tag.name}
                type="button"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/55 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:text-white"
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-[10px] font-bold text-white"
                  style={{
                    backgroundColor: `${tag.accent}20`,
                    borderColor: `${tag.accent}80`,
                  }}
                >
                  {tag.icon && <tag.icon className="h-3 w-3" />}
                </span>
                <span>{tag.name}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
