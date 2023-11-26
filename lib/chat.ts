import { Member } from './../node_modules/.prisma/client/index.d';
import { db } from "@/lib/db";

const findChat = async (memberOneId: string, MemberTwoId: string) => {
    
    return await db.chat.findFirst({
        where:{
            AND : [
                {memberOneId: memberOneId},
                {memberTwoId: MemberTwoId}
            ],
        },
        include: {
            
        }
    })
}