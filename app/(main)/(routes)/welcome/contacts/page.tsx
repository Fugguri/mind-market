import { BlockLTRCenter } from "../../../components/blocks";
import { LargeHeading } from "../../../components/headings";
import {
  CardModuleDescription,
  CardShell,
  CardShellLink,
} from "../../../components/cards";
import styles from "../../../styles/pages/ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <>
      <BlockLTRCenter>
        <LargeHeading>Наши контакты</LargeHeading>
        <CardShell maxWidth="50%">
        <CardModuleDescription>Рады предоставить дополнительную информацию о платформе MindMarket и ответить на ваши вопросы. Не стесняйтесь связаться с нами по любым вопросам, связанным с нашей платформой и технологиями искусственного интеллекта.
        </CardModuleDescription>
        </CardShell>
      </BlockLTRCenter>
      <div className="divider transparent" id="largest" />
      <div className={styles.middleContainer}>
        <div className={styles.textContactsContainer}>
          <div className={styles.textContact}>
            <div className="material-symbols-outlined" id={styles.textContIcon}>
              mail
            </div>
            <div className={styles.tCont}>
              <label>Электронная почта:</label>{" "}
              <a className="text-link" href="mailto:info@mindmarket.ai">
                info@mindmarket.ai
              </a>
            </div>
          </div>
          <div className={styles.textContact}>
            <div className="material-symbols-outlined" id={styles.textContIcon}>
              call
            </div>
            <div className={styles.tCont}>
              <label>Телефон:</label>{" "}
              <a className="text-link" href="tel:+7917-642-9123">
                +7 917 642-91-23
              </a>
            </div>
          </div>
          <div className={styles.textContact}>
            <div className="material-symbols-outlined" id={styles.textContIcon}>
              location_on
            </div>
            <div className={styles.tCont}>
              <label>Адрес:</label>
              <a
                className="text-link"
                href="geo:55.75095437308601, 37.61762914185446"
                target="_blank"
              >
                Ул. Инноваций, 123, Город-Центр
              </a>
            </div>
          </div>
        </div>
        <CardShellLink link="" maxWidth="35%">
          <CardModuleDescription>
            Мы находимся здесь, чтобы помочь вам раскрыть потенциал
            искусственного интеллекта для вашего бизнеса. Не стесняйтесь
            задавать вопросы, предлагать идеи и обсуждать возможности с нами.
          </CardModuleDescription>
        </CardShellLink>
      </div>
      <div className="divider transparent" id="smallest" />
      <div className="divider transparent" id="large" />

      <div className={styles.middleContainer}>
        <div className={styles.contactsCardContainer}>
          <label>Социальные сети и ресурсы</label>
          <div className={styles.contactsCard}>
            <a href="" className="text-link">
              Телеграм
            </a>
            <a href="" className="text-link">
              Tenchat
            </a>
            <a href="" className="text-link">
              Инстаграм
            </a>
            <a href="" className="text-link">
              ГитХаб
            </a>
          </div>
        </div>
        <div className={styles.contactsCardContainer}>
          <label>Контакты для СМИ</label>
          <div className={styles.contactsCard}>
            <a href="mailto:news@mindmarket.ai" className="text-link">
              news@mindmarket.ai
            </a>
            <a href="" className="text-link">
              @alekseypak
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
