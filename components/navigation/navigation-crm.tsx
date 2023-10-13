"use client"

import { BarChartHorizontalBigIcon, MessageSquareIcon, Plus } from "lucide-react"
import { ActionTooltip } from "@/components/action-tooltip"
import { useRouter } from "next/navigation"
import { currentProfile } from "@/lib/current-profile"




export const NavigationCrm = () => {

    const router = useRouter()
    const onClick = () => {
        router.push(`/crm`)
    }


    return (
    <div>
        <ActionTooltip
        side="right"
        align="center"
        label="CRM">
            <button 
            onClick={onClick}
            className="group flex items-center">
                <div className="flex mx-3 h-[48px] w-[48px] 
                rounded-24px group-hover:rounded-[16px] transition-all
                overflow-hidden items-center justify-center bg-background
                dark:bg-neutral-700
                group-hover:bg-emerald-500">
                    <BarChartHorizontalBigIcon 
                    className="group-hover:text-white transition 
                    text-emerald-500 rounden-full"
                    size={25}
                    />
                </div>
            </button>
        </ActionTooltip>
    </div>
 )
}