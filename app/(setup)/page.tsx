import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";


const SetupPage = async () => {

    const profile = await initialProfile();
    
    const assistant = await db.assistant.findFirst({
        where:{ 
            profileId: profile.id
        }
    });


    if(assistant) {
        return redirect(`/assistants/${assistant.id}`)
    }


    return <InitialModal/>

}
 
export default SetupPage;