import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import AssistantHeader from "./assistant-header";

interface AssistantSidebarProps {
    assistantId:string
}


const AssistantSidebar = async ({
    assistantId
}: AssistantSidebarProps) => {
    const profile = await currentProfile()

    if(!profile) {
        return redirect('/')
    }
 
    const assistant = await db.assistant.findUnique({
        where : {
            id: assistantId
        }
    })
    if (!assistant) {
        return redirect("/")
    }
    return ( 
    <div className="flex flex-col h-full text-primary w-fill dark:bg-[#2B2D31] db-[#F2F3F5]">
        <AssistantHeader
        assistant={assistant} 
        />
    </div> 
    );
}
 
export default AssistantSidebar;