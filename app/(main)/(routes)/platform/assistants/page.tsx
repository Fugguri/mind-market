

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

const AssistantsPage = async () => {
  // const { onOpen } = useModal()
	const profile = await currentProfile()
	if (!profile) {
		return redirect('/api/auth/signin')
	}

  const project = await db.project.findFirst({

    where: {
      ownerId: profile?.id,
		},
  }
  )
  // get assistants logic
  const assistants = await db.assistant.findMany({where:{
    projectId:project?.id
  }})

  return (
    <>
      <Pane height="100%" width="100%" direction="column" justify="unset">
        <PaneTitle>Список ассистентов</PaneTitle>
        <ScrollShadow size={15} className="flex flex-row flex-wrap overflow-y-scroll h-[100%] gap-[2rem]">
                   
          { assistants.map(assistant=> (

            <AssistantCard key={assistant.id} name={assistant.name} 
            // platform={assistant.use_count}
            />
          )
          )
          // :		<EmptyPage title='ассистентов' />
          
          
        }
          
        </ScrollShadow>
        <AddAssistantButton/>
      </Pane>
    </>
  );
}

export default AssistantsPage;
