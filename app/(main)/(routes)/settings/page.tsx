import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AssistantsPage = async () => {
    const profile = await currentProfile()

    if(!profile) {
        redirectToSignIn()
    }


    return ( 
        redirect(`https://web-mindmarket.ru/settings/assistants`)
     );
}
 
export default AssistantsPage;
