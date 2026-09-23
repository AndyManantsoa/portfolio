"use client";

import { Reveal } from "@/components/portfolio/Reveal";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { certifications } from "@/data/certifications";
import shared from "@/components/portfolio/Portfolio.module.css";
import styles from "./Certifications.module.css";

export function CertificationShowcase() {
  const [selected, setSelected] = useState(certifications.find(cert => cert.preview) ?? certifications[0]);
  const reduceMotion = useReducedMotion();

  return (
    <section id="certifications" className={shared.section} aria-labelledby="certifications-heading">
      <div className={shared.container}>
        <header className={shared.header}>
          <Reveal delay={0}><p className={shared.eyebrow}>BREAK / CERTIFICATIONS</p></Reveal>
          <Reveal delay={0.1}><h2 id="certifications-heading" className={shared.heading}>The learning behind the work.</h2></Reveal>
          <Reveal delay={0.2}><p className={shared.description}>Security, cloud, and networks. Select a credential to take a closer look.</p></Reveal>
        </header>
        <Reveal><div className={styles.layout}>
          <div className={styles.index}>
            <p className={styles.indexLabel}>CREDENTIAL INDEX</p>
            {certifications.map((cert, index) => (
              <button key={cert.id} type="button" className={styles.entry} aria-pressed={selected.id === cert.id} aria-controls="certificate-preview" onClick={() => setSelected(cert)}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span><span className={styles.issuer}>{cert.issuer}</span><span className={styles.name}>{cert.title}</span><span className={styles.category}>{cert.category}</span></span>
                <span className={styles.arrow} aria-hidden="true">↗</span>
                {selected.id === cert.id && <motion.span className={styles.marker} layoutId="certificate-marker" transition={{ duration: reduceMotion ? 0 : 0.25 }} />}
              </button>
            ))}
          </div>
          <div id="certificate-preview" className={styles.viewer} role="region" aria-label={`${selected.title} preview`}>
            <div className={styles.viewerBar}><span>{selected.issuer} / DOCUMENT</span><span>{selected.preview ? "PREVIEW" : "NOT UPLOADED"}</span></div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={selected.id} initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduceMotion ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
                <div className={styles.stage}>
                  {selected.preview ? (
                    <Image src={selected.preview} alt={`${selected.title} certificate`} width={selected.previewWidth} height={selected.previewHeight} sizes="(min-width: 1024px) 680px, (min-width: 768px) 55vw, 100vw" className={styles.document} />
                  ) : (
                    <div className={styles.empty}><FileText aria-hidden="true" /><p>{selected.title}</p><span>Preview not added yet.</span></div>
                  )}
                </div>
                <div className={styles.caption}>
                  <p aria-live="polite">{selected.title}</p>
                  {selected.href && <a href={selected.href} target="_blank" rel="noopener noreferrer">Open PDF <ArrowUpRight aria-hidden="true" /></a>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div></Reveal>
      </div>
    </section>
  );
}
