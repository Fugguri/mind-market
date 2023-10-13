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
        <div className="h-full">
            <div className="hidden mt-5 md:flex w-full h-[72px] z-30 flex-col ml-l-5  fixed inset-y-0">
                <ChatsHeader/>
                <ChatTypeMenu params={params}/>
            </div>            
            <main className="h-full pt-[150px]">
            { children }
            </main>
        </div>
     );
}
 
export default ChatLayout;