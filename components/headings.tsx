import styles from "../styles/components/Headings.module.css";

// export function HeadModuleLTR(prop: { h1: string; h2: string }) {
//   return (
//     <div className={styles.heading}>
//       <div className={styles.ltr} id={styles.H1}>
//         {prop.h1}
//       </div>
//       <div className={styles.rtl} id={styles.H2}>
//         {prop.h2}
//       </div>
//     </div>
//   );
// }

// export function HeadModuleRTL(prop: { h1: string; h2: string }) {
//   return (
//     <div className={styles.heading}>
//       <div className={styles.rtl} id={styles.H1}>
//         {prop.h1}
//       </div>
//       <div className={styles.ltr} id={styles.H2}>
//         {prop.h2}
//       </div>
//     </div>
//   );
// }

export function LargeHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.heading} id={styles.single}>
      <h1 className={styles.ltr}>{children}</h1>
    </div>
  );
}

export function LargeHeadingCenter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.heading} id={styles.singleCenter}>
      <h1 className={styles.ltr}>{children}</h1>
    </div>
  );
}

// export function HeadModuleL(prop: { h1: string; h2: string }) {
//   return (
//     <div className={styles.heading}>
//       <div className={styles.ltr} id={styles.H1}>
//         {prop.h1}
//       </div>
//       <div className={styles.ltr} id={styles.H2}>
//         {prop.h2}
//       </div>
//     </div>
//   );
// }
