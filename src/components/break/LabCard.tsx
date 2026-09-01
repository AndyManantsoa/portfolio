"use client";

import { motion } from "framer-motion";
import type { Lab } from "@/data/labs";

interface LabCardProps {
  lab: Lab;
  index?: number;
}

export function LabCard({ lab, index = 0 }: LabCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: (index ?? 0) * 0.1 },
    },
  };

  const difficultyColors = {
    Easy: "bg-green-900/30 text-green-300",
    Medium: "bg-yellow-900/30 text-yellow-300",
    Hard: "bg-orange-900/30 text-orange-300",
    Insane: "bg-red-900/30 text-red-300",
  };

  return (
    <motion.div
      variants={containerVariants}
      className="rounded-lg border border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-emerald-400">{lab.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{lab.platform}</p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            difficultyColors[lab.difficulty]
          }`}
        >
          {lab.difficulty}
        </span>
      </div>

      <p className="mt-3 text-slate-300">{lab.targetConcept}</p>

      {lab.techniquesLearned.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold text-emerald-400">Techniques:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {lab.techniquesLearned.map((technique) => (
              <span
                key={technique}
                className="inline-block rounded-full bg-emerald-900/30 px-2 py-1 text-xs text-emerald-300"
              >
                {technique}
              </span>
            ))}
          </div>
        </div>
      )}

      {lab.toolsUsed.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold text-emerald-400">Tools:</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {lab.toolsUsed.map((tool) => (
              <span
                key={tool}
                className="inline-block rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

interface LabGridProps {
  labs: Lab[];
}

export function LabGrid({ labs }: LabGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {labs.map((lab, index) => (
        <LabCard key={lab.id} lab={lab} index={index} />
      ))}
    </motion.div>
  );
}
