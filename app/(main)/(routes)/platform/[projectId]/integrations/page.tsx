"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Pane } from "@/components/crm/panes";
import { PaneTitle } from "@/components/crm/pane-content";
import { BtnSwitch, BtnFilledIcon } from "@/components/buttons";
import { Platforms } from "@/components/hooks/enums";
import { useModal } from "@/hooks/use-modal-store";

export default function Page() {

  const { onOpen } = useModal()


  const stopIntegration = () => {
    // api fetch to stop integration 
    console.log("stopping integration")
  }

  return (
    <>
      <Pane width="100%" height="unset" direction="column" justify="unset">
        <PaneTitle>Данные об интеграциях</PaneTitle>
        <div className="h-[950%]">
          <Table
            isHeaderSticky
            removeWrapper
            radius="none"
            shadow="none"
            aria-label="Example static collection table"
            className="overflow-y-auto h-[100%]"
          >
            <TableHeader>
              <TableColumn className="text-base">
                Название интеграции
              </TableColumn>
              <TableColumn className="text-base">Площадки</TableColumn>
              <TableColumn className="text-base">id</TableColumn>
              <TableColumn className="text-base">Статус</TableColumn>
              <TableColumn className="text-base">Действия</TableColumn>
            </TableHeader>
            <TableBody>
              {/* API */}
              <TableRow key="1" className="border-b-1 border-[#2b2b2b]">
                <TableCell>Маша Иванова</TableCell>
                <TableCell>{Platforms.vk}</TableCell>
                <TableCell>2158125125</TableCell>
                <TableCell>Активно</TableCell>
                <TableCell>
                  <div className="flex flex-row gap-[1rem] max-w-[30rem]">
                    {/* API */}
                    <BtnSwitch enabled="false" text="Отменить" />
                    <BtnSwitch onClick={()=>stopIntegration()} enabled="true" text="Приостановить" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-row align-bottom w-[30rem] h-[5%]">
          {/* API */}
          <BtnFilledIcon onClick={()=>onOpen("addIntegration")} text="Добавить интеграцию" />
        </div>
      </Pane>
    </>
  );
}
