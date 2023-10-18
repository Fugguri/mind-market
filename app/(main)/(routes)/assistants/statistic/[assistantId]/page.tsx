import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";


interface AssistantIdStatisticPageProps {
    params: {assistantId: string}
}


const AssistantIdStatisticPage =  async ({ params }: AssistantIdStatisticPageProps) => {
    const profile = await currentProfile()

    if (!profile){
        redirect('api/auth/signin')
    }


    const assistant = await db.assistant.findUnique({
        where:{
            profileId : profile?.id,
            id : params.assistantId
        }
    })

    if (!assistant) {
        redirect("/")
    }
    
    return ( 
            <Card  className="bg-primary/10 p-5 rounded-xl cursor-pointer  transition border-0 m-10">
            <CardHeader className="flex items-center text-center bg-">
                <div className="relative w-32 h-32">
                            <Image
                            fill
                            alt="Assistant"
                            className="rounded-xl object-cover"
                            src={assistant.imageUrl? assistant.imageUrl : "https://cojo.ru/wp-content/uploads/2022/12/avatarki-dlia-vatsapa-50-1.webp"}
                            />
                </div>
                        
    
                <CardTitle>
                    {assistant?.name}
                </CardTitle>
                <CardDescription>
                    {assistant?.comment}
                </CardDescription>
            </CardHeader>
            <CardContent className=" m-2 rounded-xl bg-primary/20">
                <h1>
                    Промт:
                </h1>
                <p className="p-[5px] text-center">
                    {assistant?.settings} 
                </p>
                <h1 className="flex justify-between items-center">
                    <p>
                        Токен:
                        </p>
                        <p>
                    {assistant?.token} 
                        </p>
                </h1>

                <h1 className="flex justify-between items-center">
                    <p>
                    Счетчик ответов : 
                        </p>
                        <p>

                    {assistant?.use_count} 
                        </p>
                </h1>


            </CardContent>
            <CardFooter className="flex justify-between items-center font-serif text-xs" >
                <div>
                    <p className="p-[5px]">
                    id: 
                    </p>
                    <p>
                    {assistant?.id} 
                    </p>
                    </div>
                <p className="p-[5px]">
                    Создан: 
                    {assistant?.createdAt.toUTCString()} 
                </p>
                <p className="p-[5px]">
                Отредактировано: {assistant?.updatedAt.toUTCString()} 
                </p>
            </CardFooter>
            </Card>            

     );
}
 
export default AssistantIdStatisticPage;