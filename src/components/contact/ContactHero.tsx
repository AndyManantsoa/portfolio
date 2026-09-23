"use client";

import { ArrowUpRight, Mail, Copy, Check } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiInstagram } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import shared from "@/components/portfolio/Portfolio.module.css";
import styles from "./Contact.module.css";

const email = "andymanantsoa@myyahoo.com";
const contacts = [
  { name: "GitHub", description: "Code, projects, and work in progress.", href: "https://github.com/AndyManantsoa", icon: SiGithub },
  { name: "LinkedIn", description: "Professional connections and opportunities.", href: "https://www.linkedin.com/in/AndyManantsoa", icon: FaLinkedin },
  { name: "Instagram", description: "A little beyond the code.", href: "https://www.instagram.com/AndyManantsoa", icon: SiInstagram },
];

export function ContactHero() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current);
  }, []);

  const copyEmail = async () => {
    if (timeout.current) clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
      timeout.current = setTimeout(() => setCopyStatus("idle"), 3000);
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <div className={`${shared.page} ${styles.page}`}>
      <div className={shared.container}>
        <header className={styles.header}>
          <p className={shared.eyebrow}>CONTACT / START A CONVERSATION</p>
          <h1 className={styles.title}>Open a channel.</h1>
          <p className={styles.intro}>
            Development, web security, collaboration, or opportunities — feel free to reach out.
          </p>
        </header>

        <div className={styles.columns}>
          <section className={styles.emailSection} aria-labelledby="email-heading">
            <p className={shared.eyebrow}>01 / DIRECT LINE</p>
            <h2 id="email-heading" className={shared.heading}>Let&apos;s talk.</h2>
            <p className={styles.description}>A few words about you and what you have in mind is a great place to start.</p>
            <a className={styles.email} href={`mailto:${email}`}>{email}<ArrowUpRight aria-hidden="true" /></a>
            <div className={styles.actions}>
              <a href={`mailto:${email}`} className={styles.primary}><Mail aria-hidden="true" />Write an email</a>
              <button type="button" onClick={copyEmail} className={styles.copy}>
                {copyStatus === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                {copyStatus === "copied" ? "Copied" : "Copy address"}
              </button>
              {/* Place the PDF at public/resume/andy-manantsoa-resume.pdf. */}
              <a href="/resume/andy-manantsoa-resume.pdf" download className={styles.copy}>Download résumé ↓</a>
            </div>
            <p className={styles.feedback} role="status">
              {copyStatus === "error" ? "Couldn’t copy the address. Select it above, or use Write an email." : copyStatus === "copied" ? "Email address copied to your clipboard." : ""}
            </p>
          </section>

          <section className={styles.socialSection} aria-labelledby="social-heading">
            <p className={shared.eyebrow}>02 / ELSEWHERE</p>
            <h2 id="social-heading" className={styles.socialHeading}>Find me online.</h2>
            <div className={styles.socials}>
              {contacts.map(({ name, description, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={styles.social}>
                  <Icon aria-hidden="true" />
                  <span><span className={styles.socialName}>{name}</span><span className={styles.socialDescription}>{description}</span></span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
