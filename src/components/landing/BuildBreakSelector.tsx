import Link from "next/link";
import styles from "./BuildBreakSelector.module.css";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

export function BuildBreakSelector() {
  return (
    <section
      className={styles.split}
      aria-label="Explore development or web pentesting"
    >
      <Link
        data-cursor="build"
        href="/build"
        className={`${styles.side} ${styles.build}`}
      >
        <span className={styles.detail} aria-hidden="true">
          &lt;/&gt;
        </span>
        <div className={styles.content}>
          <h2 className={styles.heading}>BUILD</h2>
          <p className={styles.subtitle}>Software Development</p>
          <span className={styles.cta}>
            <span aria-hidden="true" className="text-2xl">
              <IoMdArrowDropleft />
            </span>
            Let's build{" "}
          </span>
        </div>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </Link>

      <div className={styles.divider} aria-hidden="true">
        <span />
        <i />
        <span />
        <i />
        <span />
      </div>

      <Link
        data-cursor="break"
        href="/break"
        className={`${styles.side} ${styles.break}`}
      >
        <span className={styles.detail} aria-hidden="true">
          <span className={styles.method}>GET</span> /api{" "}
          <span className={styles.protocol}>HTTP/1.1</span>
        </span>
        <div className={styles.content}>
          <h2 className={styles.heading}>BREAK</h2>
          <p className={styles.subtitle}>Ethical Hacking</p>
          <span className={styles.cta}>
            Let's break{" "}
            <span aria-hidden="true" className="text-2xl">
              <IoMdArrowDropright />
            </span>
          </span>
        </div>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </Link>
    </section>
  );
}
