import { redirect } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/lib/db";
import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item";
import { currentProfile } from "@/lib/current-profile";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { NavigationChat } from "./navigation-chat";
import { NavigationCrm } from "./navigation-crm";
import { NavigationAssistant } from "./navigation-assistant";

const NavigationSidebar = async () => {
    const user = await currentProfile();
    
    if(!user) {
        return redirect("/");
    }

    const assistants = await db.assistant.findMany({
        where: { 
            profileId: user.id 
        }
    })
    return ( 
        <div className="space-y-4 flex flex-col items-center 
        h-full text-primary w-full dark:bg-[#1e1f22]
        py-3">
            
            <NavigationChat/>
            <NavigationCrm/>
            <NavigationAssistant/>
            <NavigationAction/>
            <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700
            rounded-md w-10 mx-auto "/>
            <ScrollArea className="flex-1 w-full">
                {assistants.map((assistant) => (
                    <div key={assistant.id} className="mb-4">
                        <NavigationItem
                        id={assistant.id}
                        name={assistant.name}
                        imageUrl={assistant.imageUrl}
                        />
                    </div>
                ))}
            </ScrollArea>
            <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
                <ModeToggle/>
                <UserButton
                afterSignOutUrl="/"
                appearance={{
                    elements:{
                        avatarBox: "h-[48px] w-[48px]"
                    }
                }}
                />
            </div>
        </div>
     );
}
 
export default NavigationSidebar;