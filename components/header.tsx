"use client";

// TODO Variants

import useScrollPosition from "./hooks/scrollPosition";
import Tab from "./tab";
import styles from "../styles/Header.module.css";
import { ProfileButton } from "./buttons";
import Link from "next/link";

export default function Header() {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={styles.header}
      transparent-header={`${scrollPosition === 0 ? "true" : ""}`}
    >
      <Link href="/">
        <div className={styles.logo}></div>
      </Link>
      <div className={styles.tabs}>
        <Tab name="Главная" tablink="/welcome"></Tab>
        <Tab name="О нас" tablink="/welcome/about"></Tab>
        <Tab name="Инвесторам" tablink="/welcome/invest"></Tab>
        <Tab name="Контакты" tablink="/welcome/contacts"></Tab>
        {/* <Tab name="Помощь" tablink="/welcome/help"></Tab> */}
        <Tab name="Продукты" tablink="/welcome/products"></Tab>
      </div>
      <ProfileButton logged_in={false}></ProfileButton>
    </header>
  );
}

export function HeaderRegister() {
  return (
    <header className={styles.header} transparent-header="true">
      <a href="/">
        <div className={styles.logo}></div>
      </a>
      <ProfileButton logged_in={false}></ProfileButton>
    </header>
  );
}

export function HeaderLogin() {
  return (
    <header className={styles.header} transparent-header="true">
      <a href="/">
        <div className={styles.logo}></div>
      </a>
    </header>
  );
}
