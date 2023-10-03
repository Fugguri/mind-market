"use client"

import { MessageSquareIcon, Plus } from "lucide-react"
import { ActionTooltip } from "@/components/action-tooltip"
import { useModal } from "@/hooks/use-modal-store"
import { useRouter } from "next/router"
import { currentProfile } from "@/lib/current-profile"
import { redirect } from "next/navigation"



export const NavigationChat = () => {

    const onClick = () => {
        redirect('/chats')
    }


    return (
    <div>
        <ActionTooltip
        side="right"
        align="center"
        label="Чаты">
            <button 
            // onClick={onClick()}
            className="group flex items-center">
                 
                <div className="flex mx-3 h-[48px] w-[48px] 
                rounded-24px group-hover:rounded-[16px] transition-all
                overflow-hidden items-center justify-center bg-background
                dark:bg-neutral-700
                group-hover:bg-emerald-500">
                    <MessageSquareIcon 
                    className="group-hover:text-white transition 
                    text-emerald-500"
                    size={25}
                    />
                </div>
            </button>
        </ActionTooltip>
    </div>
 )
}