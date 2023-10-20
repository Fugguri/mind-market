

import AsistantItem from "@/components/assistant/assistant-item";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";


import { useModal } from "@/hooks/use-modal-store";


const ProfilePage = async () => {

    const profile = await currentProfile()

    if(!profile) {
        redirectToSignIn()
    }
    return ( 
        <div className="m-5">
                    <p className="m-3 font-bold dark:text-neutral-500">Профиль</p>
        <div className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-2 pb-10">
            {profile?.id}
            {profile?.email}
            {profile?.expires.toISOString()}
            {profile?.imageUrl}
            {profile?.login}
            {profile?.name}
            {profile?.password}
            {profile?.token}
            {profile?.updatedAt.toISOString()}<br/>
            {profile?.createdAt.toISOString()}


        </div>
        </div>
     );
}
 
export default ProfilePage;
