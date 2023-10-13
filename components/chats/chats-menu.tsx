"use client"

import { redirect, useParams, usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { currentProfile } from "@/lib/current-profile";
import ChatMenuItem from "./chat-menu-item";

interface ChatTypeProps {
    params: {chatType: string}
}

const ChatTypeMenu = ({params }: ChatTypeProps) => {
    
    const menuItems = [
        {title:"Входящие",
        chatType:"inbox",
        path: "/chats/inbox"},
        {title:"Мои",
        chatType:"my",
        path: "/chats/my"},
        {title:"Все",
        chatType:"archive",
        path: "/chats/archive"},
    ]


    return ( 
    <div>
        <div className="grid grid-cols-3 ml-5"> 
        {menuItems.map((item ) => (
            <ChatMenuItem
                key={item.path}
                title={item.title}
                path={item.path}
                chatType={item.chatType}
                
            />))
        }
        </div>
            <Separator orientation="horizontal"/>
        <div className="grid grid-cols-3 m-5 h-10 "> 
            <div className="col-span-1 flex align-top font-size-16" >Сообщение</div>    
            <div className="col-span-1 flex items-center font-size-16" >Время </div>    
            <div className="col-span-1 flex items-center font-size-16" >Канал </div>    
        </div>
    </div>
     );
}
 
export default ChatTypeMenu;