'use client'
import { Assistant } from "@prisma/client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useModal } from "@/hooks/use-modal-store";

interface AssistantItemProps{
    assistant: Assistant
}

const AsistantItem = ({assistant}: AssistantItemProps) => {
    const {onOpen} = useModal()


    return ( 
        <Card 
         className="bg-primary/10 rounded-xl cursor-pointer  transition border-0">
                <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
                    
                    <div className="relative w-32 h-32">
                        <Image
                        fill
                        alt="Assistant"
                        className="rounded-xl object-cover"
                        src={assistant.imageUrl? assistant.imageUrl : "https://cojo.ru/wp-content/uploads/2022/12/avatarki-dlia-vatsapa-50-1.webp"}
                        />
                    </div>
                        <p className="font-bold text-xl" > {assistant.name} </p>
                        <p className="text-md">{assistant.comment}</p>
    
                </CardHeader>

                <CardFooter className="flex justify-center items-center text-xs">
                    {/* <p>id: {assistant.id}</p>
                    <p>Создан:{assistant.createdAt.toLocaleDateString()}</p>
                    <p>Отредактировано:{assistant.updatedAt.toLocaleDateString()}</p>
         */}
                    <Button 
                    onClick={() => onOpen('editAssistant', {assistant})}
                    variant='edit' size='edit'>
                        Настроить
                    </Button>
            
                </CardFooter>
                </Card>
        
     );
}
 
export default AsistantItem;