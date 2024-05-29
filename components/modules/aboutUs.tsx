import { PanesContainer } from "../crm/panes";
import styles from "../../styles/modules/aboutUs.module.css";
import { BlockRTLTop } from "../blocks";
import { BtnOutlineIcon } from "../buttons";
import { ImagePlaceholder, CardShell, CardModuleDescription } from "../cards";

export function CardsMassMedia() {
  return (
    <>
      <div className="divider transparent" id="medium" />
      <h1>СМИ о нас</h1>
      <BlockRTLTop>
        <ImagePlaceholder
          src="/images/1.png"
          alt=""
          width="80%"
          height="40em"
        />

        <CardShell maxWidth="33%">
          <CardModuleDescription>
            Мы, также, активно участвуем в различных мероприятиях. Недавно мы
            завершили участие в акселераторе Московского инновационного кластера
            и вошли в ТОП-3 иновационных проектов России из 3500.
            <br />О нас на VC.ru
          </CardModuleDescription>
          <a href="https://vc.ru/offline/1142988">
            <BtnOutlineIcon type="button" text="Читать" icon="trending_flat" />
          </a>
        </CardShell>

        <CardShell maxWidth="33%">
          <CardModuleDescription>
            Мы компания Mindmarket. Наш сервис по внедрению ИИ в отделы компаний
            работает больше года. Наше решение уже стоит в различных компаниях в
            их отделах продаж и клиентского сервиса. Работаем как с крупными
            компаниями (пример — это крупнейший институт психологии Smart), так
            и с небольшим бизнесом с оборотом от 100 млн руб.
            <br />О нас в Москва 24
          </CardModuleDescription>
          <a href="https://www.m24.ru/videos/tehnologii/24042024/686489">
            <BtnOutlineIcon type="button" text="Читать" icon="trending_flat" />
          </a>
        </CardShell>
      </BlockRTLTop>
    </>
  );
}

export function CardsAboutModule() {
  return (
    <>
      <div className="divider transparent" id="big" />
      <h1 className="m-0">Участники Московского инновационного кластера</h1>
      <div className="divider transparent" id="small" />
      <div className={styles.cards}>
        <PanesContainer height="100%" width="100%" direction="row" justify="">
          <PanesContainer
            height="100%"
            width="50%"
            direction="column"
            justify=""
          >
            <PanesContainer
              height="50%"
              width="100%"
              direction="row"
              justify=""
            >
              <div
                className="w-[100%] h-[100%] flex flex-col"
                id={styles.card1}
              >
                <h1 id={styles.fst_label}>Топ 3</h1>
                <h1 id={styles.snd_label}>инновационных</h1>
                <h1 id={styles.snd_label}>проектов</h1>
                <h1 id={styles.trd_label}>2024</h1>
              </div>
            </PanesContainer>

            <PanesContainer
              height="50%"
              width="100%"
              direction="row"
              justify=""
            >
              <div
                className="w-[50%] h-[100%] flex flex-row"
                id={styles.card2}
              ></div>
              <div
                className="w-[50%] h-[100%] flex flex-row"
                id={styles.card3}
              ></div>
            </PanesContainer>
          </PanesContainer>

          <PanesContainer height="100%" width="50%" direction="row" justify="">
            <PanesContainer
              height="100%"
              width="50%"
              direction="column"
              justify=""
            >
              <div
                className="w-[100%] h-[50%] flex flex-row"
                id={styles.card4}
              ></div>
              <div
                className="w-[100%] h-[50%] flex flex-row"
                id={styles.card5}
              ></div>
            </PanesContainer>

            <PanesContainer
              height="100%"
              width="50%"
              direction="column"
              justify=""
            >
              <div
                className="w-[100%] h-[50%] flex flex-row"
                id={styles.card6}
              ></div>
              <div className="w-[100%] h-[50%] flex flex-row" id={styles.card7}>
                <div id={styles.img}>
                  <div id={styles.blur} />
                </div>
              </div>
            </PanesContainer>
          </PanesContainer>
        </PanesContainer>
      </div>
    </>
  );
}
