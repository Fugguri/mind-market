"use client"


import Image from "next/image"
import { Button } from "../ui/button"
import { PersonStanding, PersonStandingIcon, User } from "lucide-react"
import { redirect, useRouter } from "next/navigation";

interface ChatItemProps {chat:{
    id:string,
    text: string
    title: string
    time: string
    channel: string
}, chatType: string
}


const ChatItem = (props:ChatItemProps,) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`${props.chatType}/${props.chat.id}`)
    }

    return ( 
    <div >
        <button onClick={()=> onClick()}
        className="bg-transparent h-[72px]  hover:bg-slate-700 w-full">
        <div className="grid grid-cols-4 h-15 "> 
        <div className="col-span-1 flex " >
            <User className="w-[48ps] h-[48px] ml-5 mr-5"/>
                
            <div>
                <h1 className="font-bold font-size-16">
                {props.chat.title}
                </h1>
            <p className=" ml-3 font-size-14">{props.chat.text}</p>
                </div>
            </div>
            <div className="col-span-1 items-start font-size-16" >
            {props.chat.time}
            </div>
            <div  className="col-span-1 align-middle items-end font-size-16" >
            {props.chat.channel}
            </div>
        </div>

        </button>
    </div> 
    );
}
 
export default ChatItem;