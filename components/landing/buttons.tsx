import Link from "next/link";
import styles from "../styles/Btns.module.css";

export function BtnFilledIcon(prop: {
  icon: string;
  name: string;
}) {
  return (
    <button className={styles.btn_icon_filled} id={styles.btn}>
      {prop.name}
      <div className="material-symbols-outlined">{prop.icon}</div>
    </button>
  );
}

export function BtnOutnlineIcon(prop: {
  icon: string;
  name: string;
}) {
  return (
    <button className={styles.btn_icon_outline} id={styles.btn}>
      {prop.name}
      <div className="material-symbols-outlined">{prop.icon}</div>
    </button>
  );
}

export function BtnTextIcon(prop: {
  icon: string;
  name: string;
}) {
  return (
    <button className={styles.btn_icon_text} id={styles.btn}>
      {prop.name}
      <div className="material-symbols-outlined">{prop.icon}</div>
    </button>
  );
}

export function ProfileButton(prop: { logged_in: boolean }) {
  if (prop.logged_in) {
    return <div>Your profile</div>;
  }
  return (
    <Link tabIndex={-1} href="/login">
      <BtnTextIcon
        name="Войти"
        icon="arrow_outward"
      ></BtnTextIcon>
    </Link>
  );
}

export function SubmitBtn(prop: {name: string, icon:string}) {
  return (
    <button type="submit" className={styles.btn_icon_submit} id={styles.btn}>
      {prop.name}
      <div className="material-symbols-outlined">{prop.icon}</div>
    </button>
  );
}
