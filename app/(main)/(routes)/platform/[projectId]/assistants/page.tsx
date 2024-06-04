'use server'

import { Pane } from "@/components/crm/panes";
import { PaneTitle } from "@/components/crm/pane-content";
import { AssistantCard } from "@/components/crm/cards";
import { Platforms } from "@/components/hooks/enums";
import { BtnFilledIcon, BtnOutlineIcon } from "@/components/buttons";

import { ScrollShadow } from "@nextui-org/react";
import { useModal } from "@/hooks/use-modal-store";
import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import noAssistantPage from "@/components/assistant/no-assistant";
import { AddAssistantButton } from "@/components/assistant/add-assistant";
import EmptyPage from "@/components/mics/empty";

interface AssistantsPageProps {
  params: {
    projectId:string
  }
}


const AssistantsPage = async ({params}:AssistantsPageProps) => {
	const profile = await currentProfile()
	if (!profile) {
		return redirect('/api/auth/signin')
	}

  // get assistants logic
  const assistants = await db.assistant.findMany({where:{
    projectId:params.projectId
  },
  include:{
    Integration: true
  }
})
  const CreateAssistants =  () => {
    if (assistants.length > 0) {
    return (  assistants.map(assistant=> (

      <AssistantCard key={assistant.id} id={assistant.id} name={assistant.name} projectId={params.projectId} assistant={assistant} 
      platform={assistant.Integration.map(integration=> (integration.service_type))}
      />
    ) 
    ) )}
    else {
      return(


        <EmptyPage title='ассистентов' />
      )
    }
  }

  console.log("assistants is ",params,assistants)
  return (
    <>
      <Pane height="100%" width="100%" direction="column" justify="unset">
        <PaneTitle>Список ассистентов</PaneTitle>
        <ScrollShadow size={15} className="flex flex-row flex-wrap overflow-y-scroll h-[100%] gap-[2rem]">
                   
          {CreateAssistants()}
          
        </ScrollShadow>
        <AddAssistantButton projectId={params.projectId}/>
      </Pane>
    </>
    
  );
}

export default AssistantsPage;
