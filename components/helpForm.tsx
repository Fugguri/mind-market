import { SubmitBtn } from "../components/buttons";
import styles from "../styles/Registatration.module.css";

export default function HelpForm() {
  return (
    <div className={styles.page}>
      <div className="divider transparent" id="medium"></div>
      <div className={styles.context}>
        Если вы увидели где‑то ошибки или хотите предложить ваши идеи, будем
        рады с вами их обсудить
      </div>
      <div className="divider transparent" id="medium"></div>
      <div className={styles.wrapper}>
        <div className={styles.form_page}>
          <form action="" target="_self">
            <input type="text" placeholder="ФИО" required />
            <input type="email" placeholder="Почта" required />
            <input type="text" placeholder="Опишите ваш запрос" required />
            <SubmitBtn icon="arrow_outward" name="Отправить" />
          </form>
        </div>
      </div>
    </div>
  );
}
