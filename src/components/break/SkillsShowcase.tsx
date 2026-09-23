"use client";

import { Reveal } from "@/components/portfolio/Reveal";
import { SkillsPanel } from "@/components/portfolio/SkillsPanel";
import styles from "@/components/portfolio/Portfolio.module.css";
import { SiPython, SiJavascript, SiGnubash, SiBurpsuite, SiWireshark, SiMetasploit, SiOwasp } from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { Code2, Search, Network, FolderSearch, ListFilter, ScanSearch, Database, KeyRound, Braces, Globe, Wrench } from "lucide-react";

const skillSections = [
  {
    id: "Scripting & Automation",
    label: "Scripting & Automation",
    icon: Code2,
    title: "Scripting & Automation",
    cards: [
      {
        name: "Python",
        icon: <SiPython className="text-xl text-[#3776ab]" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-xl text-[#f7df1e]" />,
      },
      {
        name: "Bash",
        icon: <SiGnubash className="text-xl text-[#f7df1e]" />,
      },
      {
        name: "PowerShell",
        icon: <TbBrandPowershell className="text-xl text-[#5391fe]" />,
      },
    ],
  },
  {
    id: "Reconnaissance & Enumeration",
    label: "Reconnaissance & Enumeration",
    icon: Search,
    title: "Reconnaissance & Enumeration",
    cards: [
      {
        name: "Nmap",
        icon: <Network className="text-xl text-blue-400" />,
      },
      {
        name: "Shodan",
        icon: <Search className="text-xl text-red-400" />,
      },
      {
        name: "Gobuster",
        icon: <FolderSearch className="text-xl text-indigo-400" />,
      },
      {
        name: "ffuf",
        icon: <ListFilter className="text-xl text-slate-300" />,
      },
      {
        name: "Subfinder",
        icon: <Network className="text-xl text-emerald-400" />,
      },
    ],
  },

  {
    id: "Security Tools",
    label: "Security Tools",
    icon: Wrench,
    title: "Security Tools",
    cards: [
      {
        name: "Burp Suite",
        icon: <SiBurpsuite className="text-xl text-orange-400" />,
      },
      {
        name: "Wireshark",
        icon: <SiWireshark className="text-xl text-blue-400" />,
      },
      {
        name: "SQLmap",
        icon: <Database className="text-xl text-slate-300" />,
      },
      {
        name: "Nuclei",
        icon: <ScanSearch className="text-xl text-emerald-400" />,
      },
      {
        name: "Metasploit",
        icon: <SiMetasploit className="text-xl text-red-400" />,
      },
    ],
  },

  {
    id: "Web Application Security",
    label: "Web Application Security",
    icon: Globe,
    title: "Web Application Security",
    cards: [
      {
        name: "OWASP Top 10",
        icon: <SiOwasp className="text-xl text-red-400" />,
      },
      {
        name: "SQL Injection",
        icon: <Database className="text-xl text-blue-400" />,
      },
      {
        name: "XSS",
        icon: <Code2 className="text-xl text-yellow-400" />,
      },
      {
        name: "IDOR / BOLA",
        icon: <KeyRound className="text-xl text-orange-400" />,
      },
      {
        name: "API Security",
        icon: <Braces className="text-xl text-emerald-400" />,
      },
    ],
  },
] as const;

export function SkillsShowcase() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <header className={styles.header}>
          <Reveal delay={0}><p className={styles.eyebrow}>BREAK / SKILLS</p></Reveal>
          <Reveal delay={0.1}><h2 className={styles.heading}>The security toolkit.</h2></Reveal>
          <Reveal delay={0.2}><p className={styles.description}>The techniques and tools I study and practice through web security research and labs.</p></Reveal>
        </header>
        <SkillsPanel sections={skillSections} />
      </div>
    </section>
  );
}
