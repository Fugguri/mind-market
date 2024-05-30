"use client";

import * as b from "@/components/hooks/budgets";
import React, { useState } from "react";
import { Pane, PanesContainer } from "@/components/crm/panes";
import { PaneTitle } from "@/components/crm/pane-content";
import { Budget } from "@/components/crm/pane-content";
import dynamic from "next/dynamic";
import { BtnFilledIcon, BtnOutlineIcon } from "@/components/buttons";
import { Graph as StaticGraph } from "@/components/graph";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const Graph = dynamic<React.ComponentProps<typeof StaticGraph>>(
  () => import("@/components/graph").then((mod) => mod.Graph),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <>
      <PanesContainer
        width="calc(2/3 * 100%)"
        direction="column"
        justify="unset"
        height="100%"
      >
        <PanesContainer
          width="unset"
          height="calc(40% - 2rem)"
          direction="row"
          justify="unset"
        >
          <Pane width="50%" height="unset" direction="row" justify="start">
            <Budget
              text="Траты CRM"
              month={b.CRM.month}
              budget={b.CRM.budget}
              year={b.CRM.year}
            />
          </Pane>
          <Pane width="50%" height="unset" direction="row" justify="start">
            <Budget
              text="Маркетинг"
              month={b.Marketing.month}
              budget={b.Marketing.budget}
              year={b.Marketing.year}
            />
          </Pane>
        </PanesContainer>
        <Pane width="unset" height="60%" direction="column" justify="start">
          <div className="flex flex-col gap-[.4rem]">
            <PaneTitle>Статистика работы ИИ</PaneTitle>
            <h4>
              Новый сервис Mindmarket предоставляет компаниям уникальную
              возможность интегрировать передовые технологии ИИ в свои операции.
            </h4>
            <div
              // style={{ margin: "-1rem -1.5rem", width: "calc(100% + 3rem)" }}
            >
              <Graph />
            </div>
            <div className="flex flex-row gap-[1rem]">
              <BtnFilledIcon text="Экспорт данных" type="button" />
              <BtnOutlineIcon text="Настройки статистики" type="button" />
            </div>
          </div>
        </Pane>
      </PanesContainer>

      <PanesContainer
        width="33%"
        direction="column"
        justify="unset"
        height="100%"
      >
        <PanesContainer
          width="100%"
          height="calc(40% - 2rem)"
          direction="row"
          justify="unset"
        >
          <Pane width="100%" height="unset" direction="row" justify="start">
            <Budget
              text="Интеграции"
              month={b.Integrations.month}
              budget={b.Integrations.budget}
              year={b.Integrations.year}
            />
          </Pane>
        </PanesContainer>

        <Pane width="unset" height="60%" direction="column" justify="start">
          <PaneTitle>Последние действия</PaneTitle>
          <Table
            isHeaderSticky
            removeWrapper
            shadow="none"
            radius="none"
            aria-label="Example static collection table"
            className="h-[90%] overflow-auto"
          >
            <TableHeader>
              <TableColumn className="text-l">Интеграция</TableColumn>
              <TableColumn className="text-l">Стоимость</TableColumn>
              <TableColumn className="text-l">Дата</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1" className="border-b-1 border-[#2b2b2b]">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
            </TableBody>
          </Table>
          <BtnOutlineIcon type="submit" text="Задать вопрос поддержке" />
        </Pane>
      </PanesContainer>
    </>
  );
}
