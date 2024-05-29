"use client";

import Link from "next/link";
import styles from "../styles/components/Tab.module.css";
import { usePathname } from "next/navigation";

export default function Tab(prop: {
  // icon: string;
  name: string;
  tablink: string;
}) {
  const pathname = usePathname();
  return (
    <div
      active-tab={`${pathname === prop.tablink ? "true" : ""}`}
      className={styles.tab}
    >
      <label>
        <Link href={prop.tablink}>
          {prop.name}
        </Link>
      </label>
      <div className={styles.tab_indicator}></div>
    </div>
  );
}
