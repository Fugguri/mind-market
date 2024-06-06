import { Textarea } from "@nextui-org/react";
import { Pane } from "@/components/crm/panes";
import { PaneTitle } from "@/components/crm/pane-content";
import { BtnIconOnly } from "@/components/buttons";
import {
  ChatHeaderModule,
  ChatListItem,
  Message,
  Type,
} from "@/components/crm/chat";
import { db } from "@/lib/db";

interface ChatPageProps {
  params : {
    projectId:string
  }
}

export default async function ChatPage({params}: ChatPageProps) {

  const projectId = params.projectId

  const chats = await db.chat.findMany({
    where:{
      ProjectId:projectId
    },
    include:{
      Integration:true
    }
  })

  return (
    <>
      <Pane height="100%" width="30%" direction="column" justify="unset">
        <PaneTitle>Чаты</PaneTitle>
        <div className="flex flex-col gap-[1rem] overflow-y-scroll h-[100%]">
        </div>
      </Pane>
      
    </>
  );
}
