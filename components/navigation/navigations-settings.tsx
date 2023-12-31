'use client'

import { Settings2 } from "lucide-react";
import { ActionTooltip } from "../action-tooltip";
import { useRouter } from "next/navigation";

const NavigationSettings = () => {
    const router = useRouter()


    const onClick = () => {

        router.push(`/settings`)
    }


    return ( 
        <div>
        <ActionTooltip
        side="right"
        align="end"
        label="Настройки">
            <button 
            onClick={onClick}
            className="group flex items-center">
                 
                <div className="flex mx-3 h-[48px] w-[48px] 
                rounded-24px group-hover:rounded-[16px] transition-all
                overflow-hidden items-center justify-center bg-background
                dark:bg-neutral-700
                group-hover:bg-emerald-500">
                    <Settings2 
                    className="group-hover:text-white transition 
                    text-emerald-500"
                    size={25}
                    />
                </div>
            </button>
        </ActionTooltip>
    </div>
     );
}
 
export default NavigationSettings;