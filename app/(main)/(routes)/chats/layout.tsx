import ChatsHeader from "@/components/chats/chats-header";
import ChatTypeMenu from "@/components/chats/chats-menu";
import { usePathname } from "next/navigation";

const ChatLayout = async ({
    children,
    params
}: { children: React.ReactNode,
    params : {chatType: string }
}) => {

    
    return ( 
            <main className="h-full">
            <div className="h-full">
            <div className="hidden mt-5 md:flex w-full  flex-col ml-l-5   inset-y-0">
                <ChatsHeader/>
                <ChatTypeMenu params={params}/>
            </div>
            <div >
                { children }
            </div>            
        </div>
            </main>
        );
}
 
export default ChatLayout;