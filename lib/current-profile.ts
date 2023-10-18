import { redirect } from 'next/navigation';
import { auth } from "@clerk/nextjs";
import { db } from "./db";
import  {getServerSession}  from 'next-auth/next';
import { authConfig } from '@/config/auth';

export const currentProfile = async () => {
    const session = await getServerSession(authConfig)
    
    if(!session) {
        return null
    }

    const profile = await db.profile.findFirst({
        where:{
            email: session?.user?.email?.toString(),
            name: session?.user?.name?.toString(),
        }
    })
    
    console.log(profile)
    return profile
}