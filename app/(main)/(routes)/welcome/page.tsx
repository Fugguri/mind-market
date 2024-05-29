"use client";

import { LargeHeadingCenter } from "@/components/headings";
import {
  QuestionCard,
  CardShell,
  CardShellOutline,
  CardShellLink,
  CardModuleDescription,
  CardModuleLabel,
  FilledCardRect,
  FilledCardRectR,
  FilledCardCircle,
  ImagePlaceholder,
} from "@/components/cards";
import {
  BtnFilledIcon,
  BtnOutlineIcon,
  BtnTextIcon,
} from "@/components/buttons";
import {
  BlockLTRTop,
  BlockLTR,
  BlockRTL,
  BlockRTLTop,
} from "@/components/blocks";
import styles from "@/styles/pages/MainPage.module.css";
import YouTubeVideo from "@/components/youtubeVideo";
import Image from "next/image";
import * as React from "react";
import dynamic from "next/dynamic";

export default function IndexPage() {
  const [a, setA] = React.useState(0);
  const handleClick = () => {
    setA(a + 1);
  };

  return (
    <div>
      <div className="divider transparent" id="big" />
      <div className={styles.centerContainer}>
        <LargeHeadingCenter>
          Исскуственный интеллект
          <br /> повышает вашу выручку
          <div className="text-4xl">
            Повышаем конверсию в продажу в 2 раза без увеличения штата
            сотрудников
          </div>
        </LargeHeadingCenter>
        <div className="divider transparent" id="small"></div>
        <h3 className="m-0">Топ-3 иновационных проектов Москвы 2024 г.</h3>
        <div className="divider transparent" id="smallest"></div>
        <CardShell maxWidth="45%">
          <div style={{ width: "1000em" }}></div>
          <BtnOutlineIcon
            icon="trending_flat"
            text="Прикоснуться к ИИ"
            type="button"
          />
        </CardShell>
        <div className="divider transparent" />
        <h4>*Протестируйте бесплатно</h4>
      </div>
      <div className="divider transparent" id="big" />
      <div className="divider" id="smallest" />
      <div className="divider transparent" id="smallest" />
      <div
        style={{
          width: "fit-content",
          fontWeight: "400",
          fontSize: "1.5em",
          margin: "0 auto",
        }}
      >
        Рост конверсии в продажи от 50%! Рост эффективности сотрудников в 2
        раза! Автоматизация рутинных процессов!
      </div>

      <div className="divider transparent" id="medium" />
      <div className={styles.productImageContainer}>
        <Image
          className={styles.productImage}
          fill
          alt=""
          src="/images/Products.png"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="divider transparent" id="medium" />

      <h1>Мы помогаем клиентам</h1>
      <div className="divider transparent" id="small"></div>
      <BlockLTRTop>
        <CardShellOutline maxWidth="auto">
          <CardModuleLabel>ИИ в бизнес-процессах</CardModuleLabel>
          <CardModuleDescription>
            Внедряем рабочие системы или разрабатываем решения индивидуально
            под каждый бизнес, оптимизируя рабочие процессы компаний
            с использованием технологий искусственного интеллекта.
          </CardModuleDescription>
        </CardShellOutline>

        <CardShellOutline maxWidth="auto">
          <CardModuleLabel>Решения для частных лиц</CardModuleLabel>
          <CardModuleDescription>
            Внедряем простые и легко используемые инструменты на основе
            искусственного интеллекта для физических лиц или малого бизнеса.
            Поможем без больших вложений снять рутину с вас.
          </CardModuleDescription>
        </CardShellOutline>
        <CardShellOutline maxWidth="auto">
          <CardModuleLabel>Инновационные разработки</CardModuleLabel>
          <CardModuleDescription>
            Разрабатываем уникальные решения для сложных бизнес-процессов.
            Создаём программы и платформы, обеспечивающих цифровую трансформацию
            даже сложных с точки зрения процессов компаний.
          </CardModuleDescription>
        </CardShellOutline>
      </BlockLTRTop>
      <div className="divider transparent" style={{ margin: "1.5em 0" }} />
      <BlockLTRTop>
        <CardShellOutline maxWidth="auto">
          <CardModuleLabel>CRM на основе ИИ</CardModuleLabel>
          <CardModuleDescription>
            Подключаем собственную CRM систему для оптимизации процессов
            в едином окне. Первая CRM, которая сама заполняет информацию.
            Вы просто следите за процессами.
          </CardModuleDescription>
        </CardShellOutline>
        <CardShellOutline maxWidth="auto">
          <CardModuleLabel>Консультирование</CardModuleLabel>
          <CardModuleDescription>
            Персонализированные консультации по применению искусственного
            интеллекта в рабочих процессах, в зависимости от специфики компаний
            и их нужд.
          </CardModuleDescription>
        </CardShellOutline>
        <CardShellOutline maxWidth="auto">
          <CardModuleLabel>Обучающие курсы</CardModuleLabel>
          <CardModuleDescription>
            Обучаем персонал компаний как пользоваться программами
            на искусственном интеллекте. Объясняем логику работы ИИ и помогаем
            внедрять инструменты для автоматизации рутинных задач.
          </CardModuleDescription>
        </CardShellOutline>
      </BlockLTRTop>

      <div className="divider transparent" id="big"></div>
      <h1>Подкаст с нашим основателем</h1>
      <div className="divider transparent" id="smallest"></div>
      <YouTubeVideo
        src="https://www.youtube.com/embed/DUsAetMq63U?si=MGlkVOPstuZPGmUZ"
        height="720em"
        width="100%"
      />
      <div className="divider transparent" id="smallest"></div>
      <div className="w-[14rem]">
        <BtnTextIcon
          text="Связаться с нами"
          onclick={() => {
            setA(a + 1);
            console.log(a);
          }}
          icon="call"
          justify="start"
          position="left"
          type="button"
        />
      </div>

      <div className="divider transparent" id="big"></div>
      <h1>Часто задаваемые вопросы</h1>
      <div className="divider transparent" id="smallest"></div>
      <QuestionCard num="01" label="Что такое искусственный интеллект?">
        ИИ — это математическая или компьютерная модель, которая имитирует
        человеческое мышление и способна обучаться на основе данных.
      </QuestionCard>
      <QuestionCard
        num="02"
        label="Как искусственный интеллект может мне помочь?"
      >
        Он способен быстро обрабатывать большие объёмы данных, находить в них
        закономерности и строить на их основе прогнозы. Это поможет вам
        принимать взвешенные решения и оптимизировать процессы, что повысит
        эффективность вашего бизнеса.
      </QuestionCard>
      <QuestionCard
        num="03"
        label="Что входит в консультацию по искусственному интеллекту?"
      >
        Консультация по искусственному интеллекту может включать в себя:
        <br /> <br />
        - анализ бизнес-процессов компании и выявление областей, где внедрение
        искусственного интеллекта может повысить эффективность;
        <br />
        - подбор подходящих моделей искусственного интеллекта для конкретных
        задач компании;
        <br />
        - разработку стратегии внедрения искусственного интеллекта;
        <br />- обучение сотрудников работе с новыми технологиями.
      </QuestionCard>
      <QuestionCard
        num="04"
        label="Как проходит обучение сотрудников компаний?"
      >
        Обучение включает в себя теоретические основы искусственного интеллекта,
        практические занятия по работе с конкретными моделями и инструментами, а
        также разбор реальных кейсов внедрения искусственного интеллекта в
        бизнес.
      </QuestionCard>
      <QuestionCard
        num="05"
        label="Почему компании, которые не используют ИИ останутся в прошлом?"
      >
        Компании, которые не используют искусственный интеллект, могут остаться
        в прошлом, потому что внедрение ИИ может дать им конкурентное
        преимущество за счёт оптимизации процессов, улучшения качества продукции
        и услуг, а также снижения издержек.
      </QuestionCard>
      <div className="divider transparent" id="big" />
      <h1 style={{ fontSize: "2.5em" }}>
        Решения на основе ИИ, которые помогут вам стать лидером отрасли уже
        сегодня
      </h1>
      <div className="divider transparent" id="small" />
      <div className={styles.middleContainer}>
        <FilledCardRect
          icon="query_stats"
          text="Разработка алгоритмов по быстрому анализу рынка для базового изучения новых направлений для бизнеса"
        />
        <FilledCardRectR
          icon="smart_toy"
          text="Разработка робота для автоматизации входящих заявок. Повышает эффективность отдела продаж и увеличивает доходимость клиентов."
        />
        <FilledCardCircle icon="book" />
      </div>
    </div>
  );
}
