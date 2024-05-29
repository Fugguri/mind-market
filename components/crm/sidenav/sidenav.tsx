import styles from "../../../styles/components/SideNav.module.css";
export function SideNav({ children }: { children: React.ReactNode }) {
  return <div className={styles.navContainer}>{children}</div>;
}
