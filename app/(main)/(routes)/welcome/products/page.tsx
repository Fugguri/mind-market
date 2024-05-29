import { LargeHeading } from "@/components/headings";
import { CardProduct } from "@/components/cards";
import { BlockLTRTopSB } from "@/components/blocks";

export default function ProductsPage() {
  return (
    <>
      <LargeHeading>
        Здесь представлены продукты
        <br />
        Которые говорят за себя
      </LargeHeading>

      <div className="divider transparent" id="big" />
      <BlockLTRTopSB>
        <CardProduct
          name="Аврора"
          deadline="1 месяца"
          price="112 000"
          comment="Работает на 20% эффективнее и лучше"
          color="var(--whtite)"
          background="var(--blue)"
        />
        <CardProduct
          name="Аврора"
          deadline="1 месяца"
          price="112 000"
          comment="Работает на 20% эффективнее и лучше"
          color="var(--blue)"
          background="var(--white)"
        />
        <CardProduct
          name="Аврора"
          deadline="1 месяца"
          price="112 000"
          comment="Работает на 20% эффективнее и лучше"
          color="var(--whtite)"
          background="var(--black)"
        />
        <CardProduct
          name="Аврора"
          deadline="1 месяца"
          price="112 000"
          comment="Работает на 20% эффективнее и лучше"
          color="var(--blue)"
          background="var(--white)"
        />
      </BlockLTRTopSB>
    </>
  );
}
