"use client"

import { Pane } from "@/components/crm/panes";
import { PaneTitle } from "@/components/crm/pane-content";
import { AssistantCard } from "@/components/crm/cards";
import { Platforms } from "@/components/hooks/enums";
import { BtnFilledIcon, BtnOutlineIcon } from "@/components/buttons";

import { ScrollShadow } from "@nextui-org/react";
import { useModal } from "@/hooks/use-modal-store";

export default function Page() {
  const { onOpen } = useModal()

  // get assistants logic
  const assistants = null

  return (
    <>
      <Pane height="100%" width="100%" direction="column" justify="unset">
        <PaneTitle>Список ассистентов</PaneTitle>
        <ScrollShadow size={15} className="flex flex-row flex-wrap overflow-y-scroll h-[100%] gap-[2rem]">
          {/* API */}
          <AssistantCard name="Test" platform={Platforms.vk}/>
        </ScrollShadow>
        <div className="flex flex-row content-end h-[3rem] w-1/2 gap-[1rem]">
          {/* API */}
          <BtnFilledIcon onClick={() => onOpen('createServer')} text="Добавить ассистента"/>
          <BtnOutlineIcon  text="Экспорт данных"/>
        </div>
      </Pane>
    </>
  );
}
