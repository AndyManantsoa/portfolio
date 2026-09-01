"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import { formatDateShort } from "@/lib/utils";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent dark:from-emerald-400 md:left-1/2 md:ml-0" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className={`relative flex gap-6 md:gap-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="relative flex w-12 flex-col items-center md:w-full">
              <div className="h-4 w-4 rounded-full border-4 border-white bg-blue-500 dark:bg-emerald-400 dark:border-slate-950" />
            </div>

            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-500 dark:text-emerald-400">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                    {formatDateShort(exp.startDate)} -{" "}
                    {exp.endDate ? formatDateShort(exp.endDate) : "Present"}
                  </span>
                </div>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>

                {exp.responsibilities.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Responsibilities:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp}>• {resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
