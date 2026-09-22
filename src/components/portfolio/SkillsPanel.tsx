"use client";

import { useId, useState, type ComponentType, type ReactNode } from "react";
import styles from "./Portfolio.module.css";

type Section = {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  readonly cards: readonly { readonly name: string; readonly icon: ReactNode }[];
};

export function SkillsPanel({ sections }: { sections: readonly Section[] }) {
  const [activeId, setActiveId] = useState(sections[0].id);
  const panelId = useId();
  const active = sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Skill categories">
        {sections.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" className={styles.filter}
            aria-pressed={activeId === id} aria-controls={panelId}
            onClick={() => setActiveId(id)}>
            <Icon aria-hidden={true} /><span>{label}</span>
          </button>
        ))}
      </div>
      <div className={styles.panel} id={panelId} role="region" aria-labelledby={`${panelId}-heading`}>
        <h3 className={styles.panelTitle} id={`${panelId}-heading`}>{active.title}</h3>
        <div className={styles.skills}>
          {active.cards.map((card) => (
            <div key={card.name} className={styles.skill}>
              <span className={styles.icon} aria-hidden="true">{card.icon}</span>
              <span className={styles.skillName}>{card.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
