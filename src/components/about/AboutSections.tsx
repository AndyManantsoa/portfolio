import { certifications, currently } from "@/data/about";
import styles from "@/components/portfolio/Portfolio.module.css";

export function AboutSections() {
  return (
    <div className={`${styles.page} ${styles.container}`}>
      <section className={styles.editorialSection}>
        <h2 className={styles.eyebrow}>ABOUT</h2>
        <p className={styles.description}>
          My focus is full-stack web development: building APIs and
          understanding how authentication and authorization shape reliable
          applications. I also study web application security through labs and
          scoped practice.
        </p>
      </section>
      <section className={styles.editorialSection}>
        <h2 className={styles.eyebrow}>CURRENTLY</h2>
        <dl className={styles.metadata}>
          {currently.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className={styles.editorialSection}>
        <h2 className={styles.eyebrow}>BACKGROUND</h2>
        <div>
          <h3 className={styles.panelTitle}>
            B.Tech Computer Science &amp; Engineering
          </h3>
          <p className={styles.description}>Expected graduation: 2027</p>
          <h3 className={`${styles.panelTitle} mt-8`}>Certifications</h3>
          {certifications.length ? (
            <ul className={styles.documentList}>
              {certifications.map((cert) => (
                <li key={cert.title}>
                  {cert.href ? (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.title} ↗
                    </a>
                  ) : (
                    cert.title
                  )}
                  <span className={styles.description}>
                    {" "}
                    — {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.description}>No certifications listed yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
