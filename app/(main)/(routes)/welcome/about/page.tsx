import { LargeHeading } from "@/components/headings";
import { BlockRTL, BlockLTR, BlockRTLTop } from "@/components/blocks";
import {
  CardImage,
  CardShell,
  CardShellUnderline,
  CardModuleDescription,
  CardShellBigIcon,
  ImagePlaceholder,
} from "@/components/cards";
import { BtnOutlineIcon } from "@/components/buttons";
import styles from "@/styles/pages/AboutPage.module.css";
import { CardsAboutModule, CardsMassMedia } from "@/components/modules/aboutUs";

export default function AboutPage() {
  return (
    <>
      <LargeHeading>
        Добро пожаловать
        <br />
        на страницу о MindMarket!
      </LargeHeading>
      <BlockRTL>
        <CardShellUnderline maxWidth="35%">
          <CardModuleDescription>
            <div style={{ fontSize: "1.1em", fontWeight: "500" }}>
              Мы технологическая компания по разработке решений на основе
              искусственного интеллекта. Наша цель — помочь компаниям и частным
              лицам получить доступ к передовым AI-технологиям и решениям,
              которые помогут улучшить эффективность работы повысить
              прибыльности бизнеса
            </div>
          </CardModuleDescription>
        </CardShellUnderline>
      </BlockRTL>
      <div className="divider transparent" />
      <h1>Основатели</h1>
      <div className="divider transparent" id="smallest" />
      <BlockLTR>
        <CardImage
          src="/images/Ilya.png"
          text="Кукуев Илья"
          subtext="СЕО"
          alt=""
          width="12em"
          height="12em"
        />
        <CardImage
          src="/images/Alexey.png"
          text="Пак Алексей"
          subtext="СМО"
          alt=""
          width="12em"
          height="12em"
        />
        <CardImage
          src="/images/Evgeniy.png"
          text="Лукоев Евгений"
          subtext="ССО"
          alt=""
          width="12em"
          height="12em"
        />
      </BlockLTR>
      <div className="divider transparent" id="big" />

      <div className={styles.desk_container}>
        <div className={styles.icon_container}>
          <CardShellBigIcon icon="arrow_insert" maxWidth="100%">
            <CardModuleDescription>
              Наша команда специалистов по AI работает над созданием новых
              продуктов и улучшением существующих, чтобы обеспечить нашим
              клиентам наилучший результат. Мы гарантируем высокое качество
              предоставляемых услуг и индивидуальный подход к каждому клиенту.
            </CardModuleDescription>
          </CardShellBigIcon>
        </div>

        <div className={styles.text_container}>
          <div>
            Мы готовы ответить на все ваши вопросы и предложить наилучшее
            решение для вашей компании.
          </div>
          <BtnOutlineIcon
            text="Связаться с нами"
            icon="trending_flat"
            type="button"
          />
        </div>
      </div>

      <CardsMassMedia />
      <CardsAboutModule />
    </>
  );
}
