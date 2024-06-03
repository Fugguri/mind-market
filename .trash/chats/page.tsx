import { currentProfile } from "@/lib/current-profile";

import { redirect } from "next/navigation";

const ChatPage = async () => {
    // const profile = await currentProfile()

    // if(!profile) {
    //     redirectToSignIn()
    // }

    return ( redirect("chats/inbox") );
}
 
export default ChatPage;