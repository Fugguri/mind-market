import { LargeHeading } from "@/components/headings";
import {
  BlockRTL,
  BlockLTR,
  BlockLTRTop,
  BlockRTLTop,
} from "@/components/blocks";
import { BtnOutlineIcon } from "@/components/buttons";
import {
  CardShell,
  CardShellUnderline,
  CardShellLink,
  CardModuleLabel,
  CardModuleDescription,
  Graph,
  ImagePlaceholder,
} from "@/components/cards";
import {
  CardsAboutModule,
  CardsMassMedia,
} from "@/components/modules/aboutUs";

export default function InvestPage() {
  return (
    <>
      <LargeHeading>
        Открыты к новым
        <br />
        возможностям и партнёрствам
      </LargeHeading>
      <div className="divider transparent" id="largest" />
      <BlockLTRTop>
        <CardShell maxWidth="55%">
          <CardModuleLabel>
            Мы открыты к инвестициям для дальнейшей экспансии рынка
            автоматизации бизнес-процессов
          </CardModuleLabel>
          <CardModuleDescription>
            Мы стремимся к постоянному развитию и улучшению наших продуктов,
            чтобы соответствовать всем потребностям наших клиентов. Мы готовы
            рассмотреть возможности для инвестирования в нашу компанию,
            чтобы расширить нашу деятельность и увеличить клиентскую базу.
          </CardModuleDescription>
        </CardShell>
      </BlockLTRTop>
      <div className="divider transparent" id="small" />
      <BlockRTL>
        <CardShell maxWidth="55%">
          <CardModuleLabel>
            Делимся перспективами: наш путь к росту и развитию
          </CardModuleLabel>
          <CardModuleDescription>
            Мы уверены в том, что наш бизнес имеет большой потенциал для роста
            и развития, и готовы предоставить вам все необходимые данные
            и информацию о нашей компании и перспективах её развития.
          </CardModuleDescription>
        </CardShell>
      </BlockRTL>
      <div className="divider transparent" id="largest" />
      <div className="divider transparent" />

      <h1>Количество обработанных слов</h1>
      <Graph />
      <div className="divider transparent" id="small" />
      <h3 style={{ maxWidth: "25%", fontSize: "1.1em", fontWeight: "500" }}>
        24/7, независимо ни от чего, мы стоим на страже автоматизации наших
        клиентов.
      </h3>

      <CardsMassMedia />

      <div className="divider transparent" id="small" />
      <BlockLTRTop>
        <ImagePlaceholder
          src="/images/2.png"
          alt=""
          width="100%"
          height="50em"
        />

        <CardShell maxWidth="33%">
          <CardModuleDescription>
            Рынок ИИ находится в стадии развития, но даже сейчас эта индустрия
            оценивается более чем в 300 млрд $, что говорит об интересе частных
            инвесторов и фондов к относительно недавно появившейся нише, которой
            предрекают огромную роль в будущем.
          </CardModuleDescription>
          <BtnOutlineIcon type="button" text="Читать" icon="trending_flat" />
        </CardShell>

        <CardShell maxWidth="33%">
          <CardModuleDescription>
            Объём российского рынка ИИ в прошлом году достиг почти 650 млрд
            рублей, это примерно на 18% больше, чем годом ранее. Во многих
            отраслях мы перешли к практическому внедрению ИИ», – сказал зампред
            Правительства. Более 1 тыс. российских организаций ведут разработки
            в области ИИ-технологий. Что говорит об интересе частных инвесторов,
            фондов и даже правительста к относительно недавно появившейся нише,
            которой предрекают огромную роль в будущем не только в России,
            но и в мире.
          </CardModuleDescription>
          <BtnOutlineIcon type="button" text="Читать" icon="trending_flat" />
        </CardShell>
      </BlockLTRTop>
      <div className="divider transparent" id="big" />
      <h1>Информация о рынке</h1>
      <div className="divider transparent" id="smallest" />
      <BlockLTR>
        <CardShellUnderline maxWidth="33%">
          <CardModuleDescription>
            Рынок ИИ находится в стадии развития, но даже сейчас эта индустрия
            оценивается более чем в 300 млрд $, что говорит об интересе частных
            инвесторов и фондов к относительно недавно появившейся нише, которой
            предрекают огромную роль в будущем.
          </CardModuleDescription>
        </CardShellUnderline>

        <CardShell maxWidth="33%">
          <CardModuleDescription>
            2023 Ежеквартальный отчет Gartner Business. 2023 Ежеквартальный
            отчет Gartner Business
          </CardModuleDescription>
          <BtnOutlineIcon icon="trending_flat" text="Читать" type="button" />
        </CardShell>
      </BlockLTR>
      <div className="divider transparent" id="big" />
      <BlockLTRTop>
        <CardShell maxWidth="33%">
          <CardModuleDescription>
            Совокупный CAGR – около 50% по оценке “Яков и партнеры” на
            российском рынке в сегменте генеративного ИИ для В2В
          </CardModuleDescription>
          <BtnOutlineIcon icon="trending_flat" text="Читать" type="button" />
        </CardShell>
        {/* <div className="w-[25%]" /> */}
        <ImagePlaceholder
          src="/images/3.png"
          alt=""
          width="100%"
          height="30em"
        />
      </BlockLTRTop>
      <CardsAboutModule />
    </>
  );
}
