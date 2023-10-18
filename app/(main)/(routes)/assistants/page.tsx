import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AssistantsPage = async () => {
    const profile = await currentProfile()

    if(!profile) {
        redirectToSignIn()
    }

    const assistant = await db.assistant.findFirst(
        {where:{
            profileId:profile?.id
        }}
    )

    if (!assistant) {
        
    }

    return ( 
        redirect(`assistants/statistic/${assistant?.id}`)

     );
}
 
export default AssistantsPage;