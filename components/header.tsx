import Tab from "./tab";
import styles from "../styles/Header.module.css"
import { ProfileButton } from "./buttons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.tabs}>
        <Tab name="Главная" tablink="/"></Tab>
        <Tab name="О нас" tablink="/about"></Tab>
        <Tab name="Инвесторам" tablink="/invest"></Tab>
        <Tab name="Контакты" tablink="/contacts"></Tab>
        <Tab name="Помощь" tablink="/help"></Tab>
      </div>
      <ProfileButton logged_in={false} ></ProfileButton>
    </header>
  );
}

export function HeaderRegister() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <ProfileButton logged_in={false} ></ProfileButton>
    </header>
  );
}

export function HeaderLogin() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
    </header>
  );
}