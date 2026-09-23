"use client";

import { useId, useState, type ComponentType, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Portfolio.module.css";

type Section = {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  readonly cards: readonly { readonly name: string; readonly icon: ReactNode }[];
};

export function SkillsPanel({ sections }: { sections: readonly Section[] }) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(sections[0].id);
  const panelId = useId();
  const active = sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <>
      <Reveal><div className={styles.filters} role="group" aria-label="Skill categories">
        {sections.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" className={styles.filter}
            aria-pressed={activeId === id} aria-controls={panelId}
            onClick={() => setActiveId(id)}>
            <Icon aria-hidden={true} /><span>{label}</span>
          </button>
        ))}
      </div></Reveal>
      <Reveal delay={0.1}><div className={styles.panel} id={panelId} role="region" aria-labelledby={`${panelId}-heading`}>
        <h3 className={styles.panelTitle} id={`${panelId}-heading`}>{active.title}</h3>
        <div className={styles.skills}>
          {active.cards.map((card, index) => (
            <motion.div key={`${activeId}-${card.name}`} className={styles.skill}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.05 }}>
              <span className={styles.icon} aria-hidden="true">{card.icon}</span>
              <span className={styles.skillName}>{card.name}</span>
            </motion.div>
          ))}
        </div>
      </div></Reveal>
    </>
  );
}
