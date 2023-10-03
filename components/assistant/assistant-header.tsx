'use client'

import { Assistant } from "@prisma/client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BarChart, ChevronDown, Settings, Settings2 } from "lucide-react";

interface AssistantHeaderProps {
    assistant: Assistant

}

const AssistantHeader = ({assistant}:AssistantHeaderProps) => {
    const isAdmin = true;
    const isModerator = true;
    return ( 
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="focus:outline-none">
                <button className="w-full text-md font-semibold px-3 flex 
                items-center h-12 border-neutral-200 
                dark:border-neutral-800 border-b-2 
                hover:bg-zinc-700/10 dark:hover:bg-zinc-800/50 transition">
                    {assistant.name}
                    <ChevronDown className="h-5 w-5 ml-auto"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
                {isModerator&&isAdmin && (
                    <DropdownMenuItem className="tex-green-600 dark:text-green-400 py-2 px-3 text-sm cursor-pointer">
                        Статистика
                        <BarChart className=" w-5 h-5 ml-auto"/>
                    </DropdownMenuItem>
                    
                    )}
                {isAdmin && (
                        <DropdownMenuItem className="text-zinc-600 dark:text-zinc-400 py-2 px-3 text-sm cursor-pointer">
                            Редактировать ассистента
                            <Settings2 className=" w-5 h-5 ml-auto"/>
                        </DropdownMenuItem>
                        
                    )}
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
     );
}
 
export default AssistantHeader;