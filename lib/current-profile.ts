import { redirect } from 'next/navigation';
import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const currentProfile = async () => {
    const { userId } = auth()
    if(!userId) {
        return ;
    }

    const profile = await db.profile.findUnique({
        where:{
            userId
        }
    })
    
    return profile
}