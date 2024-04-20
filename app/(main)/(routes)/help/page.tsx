import { HeadModuleL } from "../../components/headings";
import { CardQuoteLabel } from "../../components/cards";
import HelpForm from "../../components/helpForm";
import styles from "../../styles/HelpPage.module.css";

export default function HelpPage() {
  return (
    <>
      <HeadModuleL h1="Полезная информация" h2="и форма для вопросов" />
      <div className="divider transparent" id="large" />
      <div className={styles.middleContainer}>
        <CardQuoteLabel
          label="Какие решения предлагает MindMarket для улучшения процессов и аналитики?"
          text="MindMarket предлагает решения в области автоматизации, прогнозирования, анализа больших данных, а также интеллектуальных систем поддержки решений."
        />
        <CardQuoteLabel
          label="Какие виды данных поддерживает MindMarket для обработки ИИ?"
          text="MindMarket поддерживает разнообразные типы данных, включая структурированные и неструктурированные данные, изображения, звук, видео и текст."
        />
      </div>
      <div className="divider transparent" id="small" />
      <div className={styles.middleContainer}>
        <CardQuoteLabel
          label="Как происходит обучение системы на основе моих данных?"
          text="MindMarket обеспечивает возможности обучения моделей на основе клиентских данных, при этом строго соблюдая принципы конфиденциальности и безопасности информации."
        />
        <CardQuoteLabel
          label="Есть ли возможность интеграции с существующими системами управления бизнесом?"
          text="Да, MindMarket обеспечивает гибкую систему интеграции с различными существующими бизнес-системами для эффективного внедрения решений и максимизации их потенциала."
        />
      </div>
      <div className="divider transparent" id="medium" />
      <h1>Дополнительная информация о нашей платформе и её возможностях</h1>
      <HelpForm />
    </>
  );
}
