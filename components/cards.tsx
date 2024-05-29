"use client";

import { useState } from "react";
import styles from "../styles/components/Cards.module.css";
import pstyles from "../styles/components/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

export function CardShell(prop: {
  children: React.ReactNode;
  maxWidth: string;
}) {
  return (
    <div
      className={styles.card}
      id={styles.cardsh}
      style={{
        maxWidth: prop.maxWidth,
      }}
    >
      <>{prop.children}</>
    </div>
  );
}

export function CardShellOutline(prop: {
  children: React.ReactNode;
  maxWidth: string;
}) {
  return (
    <div
      className={styles.card_outline}
      id={styles.cardsh}
      style={{
        maxWidth: prop.maxWidth,
      }}
    >
      <>{prop.children}</>
    </div>
  );
}

export function CardShellUnderline(prop: {
  children: React.ReactNode;
  maxWidth: string;
}) {
  return (
    <div
      className={styles.card_underline}
      id={styles.cardsh}
      style={{
        maxWidth: prop.maxWidth,
      }}
    >
      <>{prop.children}</>
    </div>
  );
}

export function CardShellLink(prop: {
  children: React.ReactNode;
  link: string;
  maxWidth: string;
}) {
  return (
    <Link
      href={prop.link}
      style={{
        maxWidth: prop.maxWidth,
      }}
    >
      <div className={styles.card_link} id={styles.cardsh}>
        <>{prop.children}</>
        <div className="material-symbols-outlined">arrow_outward</div>
      </div>
    </Link>
  );
}

export function CardShellDefaultLink(prop: {
  children: React.ReactNode;
  link: string;
  maxWidth: string;
}) {
  return (
    <a
      href={prop.link}
      style={{
        maxWidth: prop.maxWidth,
      }}
    >
      <div className={styles.card_link} id={styles.cardsh}>
        <>{prop.children}</>
        <div className="material-symbols-outlined">arrow_outward</div>
      </div>
    </a>
  );
}

export function CardShellBigIcon(prop: {
  children: React.ReactNode;
  icon: string;
  maxWidth: string;
}) {
  return (
    <div
      className={styles.card_big_icon}
      style={{
        maxWidth: prop.maxWidth,
      }}
    >
      <div className="material-symbols-outlined" id={styles.bigIcon}>
        {prop.icon}
      </div>
      <>{prop.children}</>
    </div>
  );
}

export function CardModuleLabel({ children }: { children: React.ReactNode }) {
  return <label id={styles.cardLabel}>{children}</label>;
}

export function CardModuleDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.card_description}>{children}</div>;
}

// Staff

export function FilledCardRect(prop: { text: string; icon: string }) {
  return (
    <div className={styles.card_filled_rect}>
      <div className={styles.iconContainer}>
        <div className="material-symbols-outlined" id={styles.filledCardIMG}>
          {prop.icon}
        </div>
      </div>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function FilledCardRectR(prop: { text: string; icon: string }) {
  return (
    <div className={styles.card_filled_rectR}>
      <div className={styles.iconContainer}>
        <div className="material-symbols-outlined" id={styles.filledCardIMG}>
          {prop.icon}
        </div>
      </div>
      <div className={styles.card_description}>{prop.text}</div>
    </div>
  );
}

export function FilledCardCircle(prop: { icon: string }) {
  return (
    <div className={styles.card_filled_circle}>
      <div className="material-symbols-outlined" id={styles.filledCardIMG}>
        {prop.icon}
      </div>
    </div>
  );
}

export function CardImage(prop: {
  src: string;
  alt: string;
  text: string;
  subtext: string;
  width: string;
  height: string;
}) {
  return (
    <div className={styles.card_image}>
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
            // borderRadius: ".5em",
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
  children: React.ReactNode;
  num: string;
  label: string;
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
      <div className={styles.quest_ans}>{prop.children}</div>
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
          // borderRadius: ".5em",
        }}
      />
    </div>
  );
}

export function CardProduct(prop: {
  color: string;
  background: string;
  name: string;
  deadline: string;
  price: string;
  comment: string;
}) {
  return (
    <div
      className={pstyles.ProuctCard}
      style={{ color: prop.color, backgroundColor: prop.background }}
    >
      <div>
        <div className={pstyles.Title} style={{ borderColor: prop.color }}>
          {prop.name}
        </div>
        <div className={pstyles.topContainer}>
          <div id={pstyles.Text}>Сроки</div>
          <div id={pstyles.deadLine}>от {prop.deadline}</div>
        </div>
      </div>
      <div>
        <div className={pstyles.priceContainer}>
          <div id={pstyles.priceTitle}>Стоимость</div>
          <div id={pstyles.price}>{prop.price} ₽</div>
        </div>
        <div id={pstyles.Text}>{prop.comment}</div>
      </div>
    </div>
  );
}
