import { HeadModuleLTR, HeadModuleRTL } from "../../components/headings";
import { BlockRTL, BlockLTRTop, BlockRTLTop } from "../../components/blocks";
import { BtnOutnlineIcon } from "../../components/buttons";
import {
  Card,
  CardExtend,
  CardModule,
  CardQuote,
  Graph,
  ImagePlaceholder,
  CardModuleLink,
} from "../../components/cards";

export default function InvestPage() {
  return (
    <>
      <HeadModuleLTR h1="Открыты к новым" h2="возможностям и партнёрствам" />
      <div className="divider transparent" id="largest" />
      <BlockLTRTop>
        <Card
          label="Мы открыты к инвестициям для дальнейшей экспансии рынка автоматизации бизнес-процессов"
          text="Мы стремимся к постоянному развитию и улучшению наших продуктов, чтобы соответствовать всем потребностям наших клиентов. Мы готовы рассмотреть возможности для инвестирования в нашу компанию, чтобы расширить нашу деятельность и увеличить клиентскую базу."
        />
      </BlockLTRTop>
      <div className="divider transparent" id="small" />
      <BlockRTL>
        <Card
          label="Делимся перспективами: наш путь к росту и развитию"
          text="Мы уверены в том, что наш бизнес имеет большой потенциал для роста и развития, и готовы предоставить вам все необходимые данные и информацию о нашей компании и перспективах её развития."
        />
      </BlockRTL>
      <div className="divider transparent" id="largest" />
      <div className="divider transparent" />
      <h1>Количество обработанных слов</h1>
      <h3>
        24/7, независимо ни от чего, мы стоим на страже автоматизации наших
        клиентов.
      </h3>
      <Graph />
      <div className="divider transparent" id="medium" />
      <h1>СМИ о нас</h1>
      <div className="divider transparent" id="smallest" />
      <BlockLTRTop>
        <ImagePlaceholder
          src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg"
          alt=""
          width="100%"
          height="30em"
        />
        <CardExtend>
          <CardModule
            label=""
            text="ИИ помогает стартапу Y повысить качество продукции и сократить издержки. Благодаря внедрению искусственного интеллекта стартап смог улучшить качество продукции на 15 % и сократить издержки на 25 %"
          />
          <BtnOutnlineIcon name="Читать" icon="trending_flat" />
        </CardExtend>
        <CardExtend>
          <CardModule
            label=""
            text="Компания N внедрила искусственный интеллект для оптимизации производства: результаты превзошли ожидания. Инновация позволила сократить время на обработку заказов на 20 %, а также снизить количество ошибок в 10 раз"
          />
          <BtnOutnlineIcon name="Читать" icon="trending_flat" />
        </CardExtend>
      </BlockLTRTop>
      <div className="divider transparent" id="small" />
      <BlockRTLTop>
        <ImagePlaceholder
          src="https://mts.ai/wp-content/uploads/Group-3249834-1-min.png"
          alt=""
          width="80%"
          height="40em"
        />
        <CardExtend>
          <CardModule
            label=""
            text="Исследование: компании, использующие искусственный интеллект, имеют больше шансов на успех в условиях конкуренции. Согласно исследованию, проведённому консалтинговой компанией, компании, которые внедрили искусственный интеллект в свои бизнес-процессы, имеют более высокую рентабельность и конкурентоспособность"
          />
          <BtnOutnlineIcon name="Читать" icon="trending_flat" />
        </CardExtend>
        <CardExtend>
          <CardModule
            label=""
            text="Предприниматели всё чаще обращаются к искусственному интеллекту для автоматизации рутинных задач и повышения эффективности бизнеса. Согласно опросу, проведённому среди предпринимателей, более 60 % респондентов считают, что искусственный интеллект помогает им оптимизировать бизнес-процессы и повысить эффективность работы"
          />
          <BtnOutnlineIcon name="Читать" icon="trending_flat" />
        </CardExtend>
      </BlockRTLTop>
      <div className="divider transparent" id="big" />
      <h1>Информация о рынке</h1>
      <div className="divider transparent" id="smallest" />
      <BlockLTRTop>
        <CardQuote text="Объём российского рынка ИИ в прошлом году достиг почти 650 млрд рублей, это примерно на 18% больше, чем годом ранее. Во многих отраслях мы перешли к практическому внедрению ИИ», – сказал зампред Правительства. Более 1 тыс. российских организаций ведут разработки в области ИИ-технологий. Что говорит об интересе частных инвесторов, фондов и даже правительста к относительно недавно появившейся нише, которой предрекают огромную роль в будущем не только в России, но и в мире." />
        <CardQuote text="2023 Ежеквартальный отчет Gartner Business. 2023 Ежеквартальный отчет Gartner Business" />
        <CardExtend>
          <CardModuleLink
            label=""
            link=""
            text="Совокупный CAGR – около 50% по оценке “Яков и партнеры” на российском рынке в сегменте генеративного ИИ для В2В"
          />
        </CardExtend>
      </BlockLTRTop>
    </>
  );
}
