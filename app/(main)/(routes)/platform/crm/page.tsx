"use client";

import { Pane } from "@/components/crm/panes";
import { PaneTitle } from "@/components/crm/pane-content";
import { DealCard, ProjectCard } from "@/components/crm/cards";
import { ProjectTypes } from "@/components/hooks/enums";
import { BtnFilledIcon, BtnOutlineIcon } from "@/components/buttons";

import { ScrollShadow } from "@nextui-org/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children } from "react";

function Tab(prop: { name: string; tablink: string }) {
  const pathname = usePathname();
  return (
    <>
      <div active-tab={`${pathname === prop.tablink ? "true" : ""}`}>
        <PaneTitle>
          <Link
            className={`${
              pathname === prop.tablink ? "text-white font-semibold" : ""
            }`}
            href={prop.tablink}
          >
            {prop.name}
          </Link>
        </PaneTitle>
      </div>
    </>
  );
}

function Header() {
  return (
    <div className="flex flex-row gap-[4rem] h-[4rem]">
      <Tab name="Сделки" tablink="/crm" />
      <Tab name="Категории" tablink="" />
      <Tab name="Задача" tablink="" />
      <Tab name="Клиенты" tablink="" />
    </div>
  );
}

function VFlex(prop: { children: React.ReactNode; width: string }) {
  return (
    <div
      className="flex flex-col gap-[1rem] items-center"
      style={{ width: prop.width }}
    >
      {prop.children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Pane height="100%" width="70%" direction="column" justify="unset">
        <div>
          <Header />
          <div className="flex flex-row gap-[1.5rem]">
            <h4 className="w-[33%] flex justify-center">Текущие</h4>
            <h4 className="w-[33%]  flex justify-center">В процессе</h4>
            <h4 className="w-[33%]  flex justify-center">Завершены</h4>
          </div>
        </div>
        <ScrollShadow size={15} className="flex flex-row overflow-y-scroll h-[80%] gap-[1.5rem]">
            <VFlex width="33%">
              <DealCard title="a" text="a" price={1} link="/" />
            </VFlex>

            <VFlex width="33%">
              <DealCard title="a" text="a" price={1} link="/" />
            </VFlex>

            <VFlex width="33%">
              <DealCard title="a" text="a" price={1} link="/" />
            </VFlex>
        </ScrollShadow>

        <div className="flex align-bottom h-[3.5rem] gap-[1rem] w-[50%]">
          <BtnFilledIcon text="Создать папку" />
          <BtnOutlineIcon text="Экспорт данных" />
        </div>
      </Pane>

      <Pane height="100%" width="30%" direction="column" justify="unset">
        <PaneTitle>Канбан доска по сделкам</PaneTitle>
        <ScrollShadow className="mt-[1.5rem] flex flex-col space-y-4 overflow-y-scroll h-[80%] gap-[1rem]">
          <ProjectCard status={ProjectTypes.nd} date="12" name="powjdp" />
          <ProjectCard status={ProjectTypes.nd} date="12" name="powjdp" />
          <ProjectCard status={ProjectTypes.nd} date="12" name="powjdp" />
          <ProjectCard status={ProjectTypes.nd} date="12" name="powjdp" />
          <ProjectCard status={ProjectTypes.nd} date="12" name="powjdp" />
          <ProjectCard status={ProjectTypes.nd} date="12" name="powjdp" />
        </ScrollShadow>
        <div className="flex align-bottom h-[3.5rem]">
          <BtnFilledIcon text="Задать вопрос поддержке" />
        </div>
      </Pane>
    </>
  );
}
