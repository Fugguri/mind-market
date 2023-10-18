import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const initialProfile = async () => {
    // const user = await 

    // if (!user){
    //     return redirect('api/')
    // }

    // const profile = await db.profile.findUnique({
    //     where: {
    //         userId: user.id
    //     }
    // })
    // if (profile) {
    //     return profile;
    // }

    // const newProfile = await db.profile.create({
    //     data: {
    //         userId: user.id,
    //         name : `${user.firstName} ${user.lastName}`,
    //         imageUrl: user.imageUrl,
    //         email: user.emailAddresses[0].emailAddress
            
    //     }
    // })

    // return newProfile;
}