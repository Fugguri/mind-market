import { CardQuote } from "./cards";
import styles from "../styles/Headings.module.css";

export function HeadModuleLTR(prop: { h1: string; h2: string }) {
  return (
    <div className={styles.heading}>
      <div className={styles.ltr} id={styles.H1}>{prop.h1}</div>
      <div className={styles.rtl} id={styles.H2}>{prop.h2}</div>
    </div>
  );
}

export function HeadModuleRTL(prop: { h1: string; h2: string }) {
  return (
    <div className={styles.heading}>
      <div className={styles.rtl} id={styles.H1}>{prop.h1}</div>
      <div className={styles.ltr} id={styles.H2}>{prop.h2}</div>
    </div>
  );
}

export function LargeHeading(prop: { text: string }) {
  return (
    <div className={styles.heading} id={styles.single}>
      <div className={styles.ltr}>{prop.text}</div>
    </div>
  );
}

export function HeadModuleL(prop: { h1: string; h2: string }) {
  return (
    <div className={styles.heading}>
      <div className={styles.ltr} id={styles.H1}>{prop.h1}</div>
      <div className={styles.ltr} id={styles.H2}>{prop.h2}</div>
    </div>
  );
}