import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import AssistantHeader from "./assistant-header";


const AssistantSidebar = async () => {
    const profile = await currentProfile()

    if(!profile) {
        return redirect('/')
    }
 
    const assistants = await db.assistant.findMany({
        where : {
            profileId: profile.id
        }
    })
    if (!assistants) {
        return redirect("/")
    }
    return ( 
    <div className="flex flex-col h-full text-primary w-fill dark:bg-[#2B2D31] db-[#F2F3F5]">
        <p className="m-3 font-bold dark:text-neutral-500">Ассистенты</p>

        {assistants.map((assistant) => (
        <div key={assistant.id} className="mb-4">
        <AssistantHeader
        key={assistant.id }
        assistant={assistant} 
        />
        </div>))}
    </div> 
    )
    
}
 
export default AssistantSidebar;