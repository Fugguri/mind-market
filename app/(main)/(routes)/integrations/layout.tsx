import { redirectToSignIn } from "@clerk/nextjs";
import { currentProfile } from "@/lib/current-profile";

const IntegrationsLayuot = async ({ children } : { children: React.ReactNode }) => 
{
    const profile = await currentProfile();

    if (!profile) {
        return redirectToSignIn
    };
    
    return (  
        <div className="h-full">
            <main className="h-full align-middle items-center ">
                {children}
            </main>
        </div> 
    )  
}


export default IntegrationsLayuot;