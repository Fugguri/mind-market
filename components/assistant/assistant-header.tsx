'use client'

import { Assistant } from "@prisma/client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BarChart, ChevronDown, Plus, Settings, Settings2, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";

interface AssistantHeaderProps {
    assistant: Assistant

}

const AssistantHeader = ({assistant}:AssistantHeaderProps) => {
    const {onOpen } = useModal()

    const isAdmin = true;
    const isModerator = true;

    const router = useRouter()

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
                    <DropdownMenuItem onClick={()=> router.push(`${assistant.id}`)}
                    className="tex-green-600 dark:text-green-400 py-2 px-3 text-sm cursor-pointer">
                        Статистика
                        <BarChart className=" w-5 h-5 ml-auto"/>
                    </DropdownMenuItem>
                    
                    )}
                {isAdmin && (
                        <DropdownMenuSeparator/>
                        
                        )}
                {/* {isAdmin && (
                        <DropdownMenuItem onClick={() => onOpen("addIntegration", {assistant: assistant})}
                        className="text-zinc-600 dark:text-zinc-400 py-2 px-3 text-sm cursor-pointer">
                        Добавить сервис
                        <Plus className=" w-5 h-5 ml-auto"/>
                        </DropdownMenuItem>
                                
                            )} */}
                {isAdmin && (
                        <DropdownMenuItem onClick={() => onOpen("editAssistant", { assistant: assistant })} className="text-zinc-600 dark:text-zinc-400 py-2 px-3 text-sm cursor-pointer">
                            Редактировать ассистента
                            <Settings2 className=" w-5 h-5 ml-auto"/>
                        </DropdownMenuItem>
                        
                    )}
                {isAdmin && (
                        <DropdownMenuItem 
                        onClick={() => onOpen("deleteAssistant", { assistant: assistant })}
                        className="text-rose-500 py-2 px-3 text-sm cursor-pointer">
                            Удалить ассистента
                            <Trash className=" w-5 h-5 ml-auto"/>
                        </DropdownMenuItem>
                        
                    )}
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
     );
}
 
export default AssistantHeader;