

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
                   
          { assistants? assistants.map(assistant=> {
            <AssistantCard name={assistant.name} 
            // platform={assistant.use_count}
            />
          })
          :		<div className='rounded-[30px] m-10 p-10 items-center h-[80%] w-[80%] bg-gray-400 dark:text-black'>
          <div className='bg-gray'>
            <p>У вас еще нет добавленных ассистентов</p>
          </div>
        </div>
          
          
        }
          
        </ScrollShadow>
        <AddAssistantButton/>
      </Pane>
    </>
  );
}

export default AssistantsPage;
