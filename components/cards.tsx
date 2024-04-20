"use client";

import { useState } from "react";
import { BtnFilledIcon, BtnOutnlineIcon } from "./buttons";
import styles from "../styles/Cards.module.css";
import Image from "next/image";
import Link from "next/link";

export function Card(prop: { label: string; text: string }) {
  return (
    <div className={styles.card}>
      <label id={styles.cardLabel}>{prop.label}</label>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function CardOutline(prop: { label: string; text: string }) {
  return (
    <div className={styles.card_outline}>
      <label id={styles.cardLabel}>{prop.label}</label>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function CardModule(prop: { label: string; text: string }) {
  return (
    <>
      <label id={styles.cardLabel}>{prop.label}</label>
      <div className={styles.card_description}>{prop.text}</div>
    </>
  );
}

export function CardModuleLabel(prop: { label: string }) {
  return (
    <>
      <label id={styles.cardLabel}>{prop.label}</label>
    </>
  );
}

export function CardModuleLink(prop: {
  text: string;
  link: string;
  label: string;
}) {
  return (
    <Link href={prop.link} className={styles.card_link}>
      <>
        <label id={styles.cardLabel}>{prop.label}</label>
        <div className={styles.card_description}>{prop.text}</div>
      </>
      <div className="material-symbols-outlined">arrow_outward</div>
    </Link>
  );
}

export function CardModuleLinkDesk(prop: { text: string; link: string }) {
  return (
    <Link href={prop.link} className={styles.card_link}>
      <div className={styles.card_description}>{prop.text}</div>
      <div className="material-symbols-outlined">arrow_outward</div>
    </Link>
  );
}

export function CardModuleDesc({ children }: { children: React.ReactNode }) {
  return <div className={styles.card_description}>{children}</div>;
}

export function CardExtend({ children }: { children: React.ReactNode }) {
  return <div className={styles.card}>{children}</div>;
}

export function CardExtendOutline({ children }: { children: React.ReactNode }) {
  return <div className={styles.card_outline}>{children}</div>;
}

export function CardQuote(prop: { text: string }) {
  return <div className={styles.card_quote}>{prop.text}</div>;
}

export function CardQuoteLabel(prop: { text: string; label: string }) {
  return (
    <div className={styles.card_quote_label}>
      <label id={styles.cardLabel}>{prop.label}</label>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function FilledCardRect(prop: { text: string; icon: string }) {
  return (
    <div className={styles.card_filled_rect}>
      <div className={styles.iconContainer}>
        <div className="material-symbols-outlined" id={styles.filledCardIMG}>{prop.icon}</div>
      </div>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function FilledCardRectR(prop: { text: string; icon: string }) {
  return (
    <div className={styles.card_filled_rectR}>
      <div className={styles.iconContainer}>
        <div className="material-symbols-outlined" id={styles.filledCardIMG}>{prop.icon}</div>
      </div>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function FilledCardCircle(prop: { icon: string }) {
  return (
    <div className={styles.card_filled_circle}>
      <div className="material-symbols-outlined" id={styles.filledCardIMG}>{prop.icon}</div>
    </div>
  );
}

export function CardImage(prop: {
  src: string;
  alt: string;
  text: string;
  subtext: string;
}) {
  return (
    <div className={styles.card_image}>
      <div
        className={styles.imgContainer}
        style={{
          position: "relative",
          width: "12em",
          height: "12em",
        }}
      >
        <Image
          fill
          alt={prop.alt}
          src={prop.src}
          style={{
            objectFit: "cover",
            borderRadius: ".5em",
          }}
        />
      </div>
      <label id={styles.cardLabel}>
        {prop.text}
        <br />
        {prop.subtext}
      </label>
    </div>
  );
}

export function QuestionCard(prop: {
  num: string;
  label: string;
  ans: string;
}) {
  const [opened, setOpened] = useState(0);

  function openQuestion() {
    if (opened === 1) {
      setOpened(0);
      return;
    }
    setOpened(1);
  }

  return (
    <div is-opened={opened} className={styles.cardQuestContainer}>
      <div
        tabIndex={-1}
        onClick={openQuestion}
        className={styles.card_question}
      >
        <div className={styles.quest_left}>
          <label id={styles.questNum}>{prop.num}</label>
          <label id={styles.questlabel}>{prop.label}</label>
        </div>
        <button
          className="material-symbols-outlined"
          id={styles.questionPlus}
          onClick={openQuestion}
        >
          add
        </button>
      </div>
      <div className={styles.quest_ans}>{prop.ans}</div>
    </div>
  );
}

export function CardBigIcon(prop: { icon: string; text: string }) {
  return (
    <div className={styles.card_big_icon}>
      <div className="material-symbols-outlined" id={styles.bigIcon}>
        {prop.icon}
      </div>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function Graph() {
  return (
    <div className={styles.card_graph}>
      <div className={styles.graph_container}></div>
      <div className={styles.graph_months}>
        <div>Янв</div>
        <div>Фев</div>
        <div>Мар</div>
        <div>Апр</div>
        <div>Май</div>
        <div>Июн</div>
        <div>Июл</div>
        <div>Авг</div>
        <div>Сен</div>
        <div>Окт</div>
        <div>Ноя</div>
        <div>Дек</div>
      </div>
    </div>
  );
}

export function ImagePlaceholder(prop: {
  src: string;
  alt: string;
  width: string;
  height: string;
}) {
  return (
    <div
      className={styles.imgContainer}
      style={{
        position: "relative",
        width: prop.width,
        height: prop.height,
      }}
    >
      <Image
        fill
        alt={prop.alt}
        src={prop.src}
        style={{
          objectFit: "cover",
          borderRadius: ".5em",
        }}
      />
    </div>
  );
}
