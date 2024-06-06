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

interface ChatMessagesPageProps {
    params: {
        projectId:string
        chatId: string
    }

}

const ChatMessagesPage = async ({params}: ChatMessagesPageProps) => {

    const chatId = params.chatId
    const projectId = params.projectId

    const chat = await db.chat.findUnique({where:{
        id:chatId
    },
    include:{
        Client:true
    }
})
    const messages = await db.message.findMany({where:{
        chat_id:chatId
    }})

    return ( 
        <>
        <Pane height="100%" width="70%" direction="column" justify="unset">
        <PaneTitle>Общение</PaneTitle>
        <div className="flex flex-col w-[100%] h-[100%]">
          <div className="flex flex-col min-h-[75%] h-[85%]">
            <div className="flex items-center justify-between pb-4">
              {/* API */}
              <ChatHeaderModule img="" name={chat?.Client.name??""} messenger="Telegram" />
              <div className="flex flex-row gap-[1rem] text-base">
                <BtnIconOnly icon="phone" />
                <BtnIconOnly icon="bottom_panel_open" />
                <BtnIconOnly icon="menu" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 overflow-y-scroll h-[100%] border-b-2 border-[#fefefe52] border-solid">
              {messages.map(message => (
              <Message
                text={message.text?? ""}
                time={message.timestamp.toISOString()}
                type={message.incoming? Type.in:Type.out}
              />
              ))}
              
            </div>
          </div>
          <div className="flex gap-[1rem] items-start mt-4 min-h-[10%] h-auto max-h-[25%]">
            {/* API */}
            <BtnIconOnly icon="mood" />
            <Textarea radius="none" placeholder="Ваше сообщение" />
            <BtnIconOnly icon="send" />
          </div>
        </div>
      </Pane>
        </>
     );
}
 
export default ChatMessagesPage;