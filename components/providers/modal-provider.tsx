"use client"

import { CreateAssistantModal } from "@/components/modals/create-assistant-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])
    
    if(!isMounted) {
        return null;
    }

    return(
        <div>
        <CreateAssistantModal/>
        </div>
    )
}