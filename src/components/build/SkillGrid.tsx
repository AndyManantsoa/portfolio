"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skills";

interface SkillGridProps {
  categories: SkillCategory[];
}

export function SkillGrid({ categories }: SkillGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {categories.map((category) => (
        <motion.div
          key={category.name}
          variants={categoryVariants}
          className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {category.name}
          </h3>

          <div className="mt-4 space-y-3">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                  {skill.proficiency && (
                    <span className="text-xs text-blue-500 dark:text-emerald-400">
                      {skill.proficiency}
                    </span>
                  )}
                </div>
                {skill.proficiency && (
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-emerald-500 dark:to-emerald-600"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: {
                          beginner: "25%",
                          intermediate: "60%",
                          advanced: "85%",
                          expert: "100%",
                        }[skill.proficiency],
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
