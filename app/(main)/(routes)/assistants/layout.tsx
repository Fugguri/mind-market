import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import AssistantSidebar from "@/components/assistant/assistant-sidebar";

const AssistantPageLayuot = async ({
    children,

}: { children: React.ReactNode,
}) => {
    const profile = await currentProfile();

    if (!profile) {
        return redirectToSignIn
    };
    const assistant = await db.assistant.findMany({
        where: {
            profileId: profile.id
        }
    })
    if (!assistant) {
        return redirect("/")
    }
    return (  
        
        <div className="h-full">
        <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
            <AssistantSidebar/>
        </div>
        <main className="h-full md:pl-60">
            {children}
        </main>
    </div>
  )  ;
}
 
export default AssistantPageLayuot;