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

export const metadata = {
    title: "Мессенджер",
  };


  

export default async function DashboardLayout({	children,
	params,
}: {
	children: React.ReactNode
	params: { projectId: string }
}) {

  const projectId = params.projectId

  const chats = await db.chat.findMany({
    where:{
      ProjectId:projectId
    },
    include:{
      Integration:true,
      Client:true
    }
  })

  return (


    <>
    <Pane height="100%" width="30%" direction="column" justify="unset">
        <PaneTitle>Чаты</PaneTitle>
        <div className="flex flex-col gap-[1rem] overflow-y-scroll h-[100%]">
          {chats.map(chat => (
            <div key={chat.id}>

            <ChatListItem id={chat.id}  img="" name={chat.Client.name??""} messenger="Telegram" projectId={projectId}/>
            
            </div>
          ))}


        </div>
      </Pane>
        {children}
    </>
  );
}