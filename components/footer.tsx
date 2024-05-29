import styles from "../styles/Footer.module.css";
import { BtnUnderlineIcon } from "./buttons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="divider transparent" id="largest" />
      <div className={styles.logo} />
      <div className="divider transparent" id="smallуыеы" />
      <div className="flex flex-row align-middle justify-center w-[100%]">
        <a
          className="text-link"
          id={styles.innovations_container}
          href="https://i.moscow/academy"
        >
          <div className={styles.innovation_label}>
          Резидент Московского иновационного кластера
          </div>
          <div className={styles.innovation_icon} />
        </a>
      </div>
      <div className="divider transparent" id="big" />
      <div className={styles.foot_main}>
        <div className={styles.foot_1}>
          <div className={styles.foot_menu}>
            <h3>Меню</h3>
            <div id={styles.list}>
              <Link href="/about" className="text-link">
                О нас
              </Link>
              <Link href="/invest" className="text-link">
                Инвесторам
              </Link>
              <Link href="/contacts" className="text-link">
                Контакты
              </Link>
              <Link href="/help" className="text-link">
                Помощь
              </Link>
              <Link href="/" className="text-link">
                Главная
              </Link>
            </div>
          </div>

          <div className={styles.foot_menu}>
            <h3>Сотрудничество</h3>
            <div id={styles.list}>
              <a href="" className="text-link">
                Партнёрство
              </a>
              <a href="" className="text-link">
                Вакансии
              </a>
              <a href="" className="text-link">
                Проекты
              </a>
              <a href="" className="text-link">
                Важные сообщения
              </a>
              <a href="" className="text-link">
                Патенты
              </a>
            </div>
          </div>
          <div className={styles.foot_menu}>
            <h3>Социальные сети</h3>
            <div id={styles.list}>
              <a href="" className="text-link">
                Телеграм
              </a>
              <a href="" className="text-link">
                ВКонтакте
              </a>
              <a href="" className="text-link">
                Tenchat
              </a>
              <a href="" className="text-link">
                Почта
              </a>
              <a href="" className="text-link">
                Инстаграм*
              </a>
            </div>
          </div>
        </div>
        <div className={styles.subcribe}>
          <BtnUnderlineIcon
            icon="arrow_outward"
            text="Подписаться на рассылку"
            type="submit"
            justify="between"
          />
        </div>
      </div>
      <div className={styles.razdat} />
      <div className={styles.last_footer_flexelements}>
        <h5>MindMarket © 2015–2024</h5>
        <h4>*Запрещённая социальная сеть в РФ</h4>
        <div className={styles.new_syl}>
          <h5>
            <a href="" className="text-link">
              Terms & policies
            </a>
          </h5>
          <h5>
            <a href="" className="text-link">
              Privacy policy
            </a>
          </h5>
        </div>
      </div>
    </footer>
  );
}
