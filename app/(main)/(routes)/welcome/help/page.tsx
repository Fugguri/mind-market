import { LargeHeading } from "@/components/headings";
import {
  CardShellUnderline,
  CardModuleLabel,
  CardModuleDescription,
} from "@/components/cards";
import styles from "@/styles/pages/HelpPage.module.css";
import { Input, Textarea } from "@nextui-org/input";
import Link from "next/link";
import { BtnFilledIcon } from "@/components/buttons";

export default function HelpPage() {
  return (
    <>
      <LargeHeading>
        Полезная информация
        <br />и форма для вопросов
      </LargeHeading>
      <div className="divider transparent" id="large" />
      <div className={styles.middleContainer}>
        <CardShellUnderline maxWidth="100%">
          <CardModuleLabel>
            Какие решения предлагает MindMarket для улучшения процессов
            и аналитики?
          </CardModuleLabel>
          <CardModuleDescription>
            MindMarket предлагает решения в области автоматизации,
            прогнозирования, анализа больших данных, а также интеллектуальных
            систем поддержки решений.
          </CardModuleDescription>
        </CardShellUnderline>

        <CardShellUnderline maxWidth="100%">
          <CardModuleLabel>
            Какие виды данных поддерживает MindMarket для обработки ИИ?
          </CardModuleLabel>
          <CardModuleDescription>
            MindMarket поддерживает разнообразные типы данных, включая
            структурированные и неструктурированные данные, изображения, звук,
            видео и текст.
          </CardModuleDescription>
        </CardShellUnderline>
      </div>
      <div className="divider transparent" id="small" />
      <div className={styles.middleContainer}>
        <CardShellUnderline maxWidth="100%">
          <CardModuleLabel>
            Как происходит обучение системы на основе моих данных?
          </CardModuleLabel>
          <CardModuleDescription>
            MindMarket обеспечивает возможности обучения моделей на основе
            клиентских данных, при этом строго соблюдая принципы
            конфиденциальности и безопасности информации.
          </CardModuleDescription>
        </CardShellUnderline>

        <CardShellUnderline maxWidth="100%">
          <CardModuleLabel>
            Есть ли возможность интеграции с существующими системами управления
            бизнесом?
          </CardModuleLabel>
          <CardModuleDescription>
            Да, MindMarket обеспечивает гибкую систему интеграции с различными
            существующими бизнес-системами для эффективного внедрения решений
            и максимизации их потенциала.
          </CardModuleDescription>
        </CardShellUnderline>
      </div>
      <div className="divider transparent" id="medium" />
      {/* <h1>Дополнительная информация о нашей платформе и её возможностях</h1> */}

      <div className="divider transparent" id="medium" />
      <div className="flex flex-col justify-center items-center gap-[2rem]">
        <label className=" align-middle text-center text-lg font-semibold text-wrap">
          Если вы увидели где‑то ошибки или хотите предложить ваши идеи, будем
          рады с вами их обсудить
        </label>
        <form
          action=""
          target="_self"
          className="flex flex-col gap-[1rem] w-[50rem]"
        >
          <Input
            required
            size="lg"
            radius="none"
            variant="underlined"
            type="text"
            color="default"
            id="name"
            name="name"
            placeholder="ФИО"
            className="w-[50rem]"
          />

          <Input
            required
            size="lg"
            radius="none"
            variant="underlined"
            type="email"
            color="default"
            id="email"
            name="email"
            placeholder="Почта"
            className="w-[50rem]"
          />

          <Textarea
            required
            size="lg"
            radius="none"
            variant="underlined"
            type="text"
            color="default"
            id="message"
            name="message"
            placeholder="Опишите ваш запрос"
            className="w-[50rem]"
          />

          <BtnFilledIcon type="submit" text="Отправить" icon="arrow_outward" />
        </form>
      </div>
    </>
  );
}
