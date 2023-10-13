import ChatItem from "@/components/chats/chat-item";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatTypePageProps {
    params:{
        chatType: string
    }
}


const ChatTypePage = ({params}:ChatTypePageProps) => {

    const chats = [{    
        id:'54523',
        text: "some ",
        title: "some d",
        time: "some da",
        channel: "some da"
    },
    {    
        id:'5452rew3',
        text: "some ",
        title: "some d",
        time: "some da",
        channel: "some da"
    }]

    return ( 
        
        <ScrollArea>
            {chats.map((chat) =>(
                <div key={chat.id}>
                    <ChatItem 
                        chatType={params.chatType}
                        chat={chat}/>
                </div>
            ))}
        </ScrollArea>
     );
}
 
export default ChatTypePage;