import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile";
import { ScrollArea } from "@/components/ui/scroll-area";

import { NavigationItem } from "./navigation-item";
import { NavigationAction } from "./navigation-action";
import { NavigationChat } from "./navigation-chat";
import { NavigationCrm } from "./navigation-crm";
import { NavigationAssistants } from "./navigation-assistant";
import { NavigationIntegrations } from "./navigation-integrations";
import NavigationSettings from "./navigations-settings";

import { getServerSession} from "next-auth";
import Profile from "./navigation-profile";



const NavigationSidebar = async () => {
    const session = await getServerSession();
    if (session) {
    return ( 
        <div className="space-y-4 flex flex-col items-center 
        h-full text-primary w-full dark:bg-[#1e1f22]
        py-3">
            
            <NavigationChat/>
            <NavigationCrm/>
            <NavigationAssistants/>
            <NavigationIntegrations/>
            <NavigationAction/>
            {/* <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700
            rounded-md w-10 mx-auto "/>  */}
            <ScrollArea className="flex-1 w-full">
                {/* {assistants.map((assistant) => (
                    <div key={assistant.id} className="mb-4">
                        <NavigationItem
                        
                        id={assistant.id}
                        name={assistant.name}
                        imageUrl={assistant.imageUrl}
                        />
                    </div>
                ))} */}
            </ScrollArea>
            <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
                <NavigationSettings/>
                <ModeToggle/>
                <Profile/>
                
            </div>

        </div>
     );}

    return redirect('api/auth/singin')
}
 
export default NavigationSidebar;