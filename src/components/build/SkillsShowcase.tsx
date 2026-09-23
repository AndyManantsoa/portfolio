"use client";

import { Reveal } from "@/components/portfolio/Reveal";
import { SkillsPanel } from "@/components/portfolio/SkillsPanel";
import styles from "@/components/portfolio/Portfolio.module.css";

import {
  Cloud,
  Code2,
  Server,
  PanelsTopLeft,
} from "lucide-react";
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
  SiSupabase,
  SiPrisma,
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
    icon: Server,
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
        icon: <SiVercel className="text-xl text-white" />,
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
  { name: "Figma", accent: "#f24e1e", icon: SiFigma },
] as const;

export function SkillsShowcase() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <header className={styles.header}>
          <Reveal delay={0}><p className={styles.eyebrow}>BUILD / SKILLS</p></Reveal>
          <Reveal delay={0.1}><h2 className={styles.heading}>The development toolkit.</h2></Reveal>
          <Reveal delay={0.2}><p className={styles.description}>Languages, frameworks, and tools I use to turn ideas into working applications.</p></Reveal>
        </header>
        <SkillsPanel sections={skillSections} />
        <Reveal><div className={styles.tooling}>
          <h3 className={styles.panelTitle}>Developer tools</h3>
          <div className={styles.tags}>
            {toolingTags.map(({ name, icon: Icon }) => (
              <span key={name} className={styles.tag}><Icon aria-hidden="true" />{name}</span>
            ))}
          </div>
        </div></Reveal>
      </div>
    </section>
  );
}
