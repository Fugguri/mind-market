"use client";

import Link from "next/link";
import styles from "../../../styles/components/SideNav.module.css";
import { usePathname } from "next/navigation";

export default function SideBtn(prop: {
  icon: string;
  text: string;
  link: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={prop.link} className={styles.btnLabel}>
    <div
      active-btn={`${pathname === prop.link ? "true" : ""}`}
      className={styles.btn}
    >
        <label>
          <div className="material-symbols-outlined" id={styles.icon}>
            {prop.icon}
          </div>{" "}
          {prop.text}
        </label>
        <div className="material-symbols-outlined" id={styles.indicator}>
          chevron_right
        </div>
    </div>
      </Link>
  );
}
