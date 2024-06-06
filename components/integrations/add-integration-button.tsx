
'use client'
import { useModal } from "@/hooks/use-modal-store";
import { Assistant, Integration, TelegramBot, TelegramUserBot } from "@prisma/client";

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
import { Integrations } from "../hooks/budgets";

interface IntegrationsPageProps { 

    assistants:Assistant[],
    integrations:Integration[]
    telegramBots: TelegramBot[]
    telegramUserBots: TelegramUserBot[]



}



const IntegrationPage = (props: IntegrationsPageProps ) => {
  const { onOpen } = useModal()

  const stopIntegration = () => {
    // api fetch to stop integration 
    console.log("stopping integration")
  };


  return  (
        <div>

          
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
              {props.telegramBots.map(telegramBot => (
              <TableRow key={telegramBot.id} className="border-b-1 border-[#2b2b2b]">
                <TableCell>T{telegramBot.first_name}</TableCell>
                <TableCell>Телеграм бот</TableCell>
                <TableCell>{telegramBot.telegram_id.toString()}</TableCell>
                <TableCell>Активно</TableCell>

                <TableCell>
                  <div className="flex flex-row gap-[1rem] max-w-[30rem]">
                    {/* API */}
                    <BtnSwitch enabled="false" text="Отменить" />
                    <BtnSwitch onClick={()=>stopIntegration()} enabled="true" text="Приостановить" />
                  </div>
                </TableCell>
              </TableRow>
              )
            
            )}
              
      

              
              </TableBody>
              </Table>
              </div>
              <div className="flex flex-row align-bottom w-[30rem] h-[5%]">
          {/* API */}
            <BtnFilledIcon onClick={()=>onOpen("addIntegration",{assistants:props.assistants})} text="Добавить интеграцию" />
        </div>
      </Pane>
      </div>
      
      
            )
     
}
 
export default IntegrationPage;