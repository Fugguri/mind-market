import styles from "@/styles/components/Blocks.module.css";

export function BlockLTR({ children }: { children: React.ReactNode }) {
    return <div className={styles.LTR}>{children}</div>;
  }


export function BlockRTL({ children }: { children: React.ReactNode }) {
  return <div className={styles.RTL}>{children}</div>;
}

export function BlockLTRTop({ children }: { children: React.ReactNode }) {
  return <div className={styles.LTRTop}>{children}</div>;
}


export function BlockRTLTop({ children }: { children: React.ReactNode }) {
return <div className={styles.RTLTop}>{children}</div>;
}

export function BlockLTRCenter({ children }: { children: React.ReactNode }) {
  return <div className={styles.LTRCenter}>{children}</div>;
}


export function BlockRTLCenter({ children }: { children: React.ReactNode }) {
return <div className={styles.RTLCenter}>{children}</div>;
}

export function BlockLTRTopSB({ children }: { children: React.ReactNode }) {
  return <div className={styles.LTRTopSB}>{children}</div>;
}

// TODO Variants