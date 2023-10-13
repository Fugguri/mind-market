'use client'

import { Plus } from "lucide-react";
import { ActionTooltip } from "../action-tooltip";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


const ChatsHeader = () => {
    const router = useRouter();
    const onClick =  () => {
        router.push(`/chats/add`)
    }

    return ( 
    <div className="grid grid-cols-6 w-full ">
        <div className="col-span-1 font-bold text-neutral-300">
            Чаты
        </div>
        <div className="col-end-6">
        <ActionTooltip
        side="right"
        align="end"
        label="Добавить диалог">
            <button 
            onClick={onClick}
            className="group flex items-left">
                <div className="col-span-end flex mx-3 h-[48px] w-[230px]
                rounded-full group-hover:rounded-[16px] transition-all
                overflow-hidden items-center justify-center bg-background
                dark:bg-neutral-700
                group-hover:bg-emerald-500">
                    <Plus 
                    className="m-3 group-hover:text-white transition 
                    text-emerald-500"
                    size={25}
                    /> Добавить чат
                </div>
            </button>
        </ActionTooltip>
        </div>
    </div> 
    );
}
 
export default ChatsHeader;