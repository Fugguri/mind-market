import styles from "../styles/Footer.module.css";
import { SubmitBtn } from "./buttons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
                  <div className={styles.foot_main}>
                <div className={styles.foot_1}>
                    <div className={styles.social}>
                        <h3>Социальные сети</h3>
                        <ul>
                            <li><a href = "" className="text-link">Телеграм</a></li>
                            <li><a href = "" className="text-link">ВКонтакте</a></li>
                            <li><a href = "" className="text-link">Tenchat</a></li>
                            <li><a href = "" className="text-link">Почта</a></li>
                            <li><a href = "" className="text-link">Инстаграм*</a></li>
                        </ul>
                    </div>
                    <div className={styles.foot_menu}>
                        <h3>Меню</h3>
                        <ul>
                            <li><Link href = "/about" className="text-link">О нас</Link></li>
                            <li><Link href = "/invest" className="text-link">Инвесторам</Link></li>
                            <li><Link href = "/contacts" className="text-link">Контакты</Link></li>
                            <li><Link href = "/help" className="text-link">Помощь</Link></li>
                            <li><Link href = "/" className="text-link">Главная</Link></li>
                        </ul>
                    </div>
                    <div className={styles.subcribe}>
                        <SubmitBtn icon="arrow_outward"  name="Подписаться на рассылку"/>
                    </div>
                </div>
            </div>
            <div className={styles.razdat}></div>
            <div className={styles.last_footer}>
                <div className={styles.last_footer_flexelements}>
                    <h4>MindMarket © 2015–2024</h4>
                    <h5>*Запрещённая социальная сеть в РФ</h5>
                    <div className={styles.new_syl}>
                        <h6>Terms & policies</h6>
                        <h6>Privacy policy</h6>
                    </div>
                </div>
            </div>
    </footer>
  );
}