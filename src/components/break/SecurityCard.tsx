"use client";

import { motion } from "framer-motion";
import type { SecurityArea } from "@/data/security";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SecurityCardProps {
  area: SecurityArea;
  index?: number;
}

export function SecurityCard({ area, index = 0 }: SecurityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: (index ?? 0) * 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="rounded-lg border border-emerald-700/50 bg-slate-950/50 backdrop-blur transition-all hover:border-emerald-500/80"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div>
          <h3 className="text-lg font-semibold text-emerald-400">
            {area.name}
          </h3>
          {area.proficiency && (
            <p className="mt-1 text-sm text-slate-400">
              Proficiency: {area.proficiency}
            </p>
          )}
        </div>
        <ChevronDown
          className={`h-5 w-5 text-emerald-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-emerald-700/50 px-6 py-4"
        >
          <p className="text-slate-300">{area.description}</p>

          <div className="mt-4">
            <p className="text-sm font-medium text-emerald-400">Topics:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {area.topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-block rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

interface SecurityGridProps {
  areas: SecurityArea[];
}

export function SecurityGrid({ areas }: SecurityGridProps) {
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
      className="space-y-4"
    >
      {areas.map((area, index) => (
        <SecurityCard key={area.name} area={area} index={index} />
      ))}
    </motion.div>
  );
}
