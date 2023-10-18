import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";

interface ChatIdPageProps {
    params:{
        chatType: string,
        chatId: string
    }
}


const ChatIdPage = async ({params}: ChatIdPageProps ) => {
    
    // const profile = currentProfile()

    // if(!profile){
    //     redirectToSignIn()
    // }

    
    return ( 
        <div>Chat item id: {`${params.chatId}`} </div>
     );
}
 
export default ChatIdPage;