'use client'

import { CreateAssistantModal } from '@/components/modals/assistants/create-assistant-modal'
import { useEffect, useState } from 'react'
import { AddTgBotModal } from '@/components/modals/integrations/tg-bot-modal'
import { AddTgUserBotModal } from '@/components/modals/integrations/tg-user-bot-modal'
import { AddWaBotModal } from '@/components/modals/integrations/wa-bot-modal'
import { DeleteAssistantModal } from '@/components/modals/assistants/delete-assistant-modal'
import { EditAssistantModal } from '@/components/modals/assistants/edit-assistant-modal'
import { AddInstModal } from '../modals/integrations/instagram-modal'
import { CreateProjectModal } from '../modals/create-project-modal'
import { EditProfileModal } from '../modals/edit-profile-modal'
import { AddJivoModal } from '../modals/integrations/jivo-modal'
import { AddIntegrationModal } from '../modals/add-integration-modal'
import AddASsistantsSelectionModal from '../modals/assistants/add-assistants-selection-modal'
import AddWebPageAssistantItem from '../modals/assistants/add-web-page-assistant'
import DecisionTree from '../modals/assistants/add-smart-assistant'
import AddDocumentAssistantItem from '../modals/assistants/add-document-assistant'
// import AddSmartAssistantItem from '@/modals/assistants/add-smart-assistant'
// import { CreateIntegrationModal } from "@/components/modals/create-integration-modal";

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<>
			<AddJivoModal/>
			<AddTgBotModal />
			<AddTgUserBotModal />
			<AddInstModal />
			<AddWaBotModal />
			<CreateAssistantModal />
			<DeleteAssistantModal />
			<EditAssistantModal />
			<CreateProjectModal />
			<EditProfileModal />
			<EditProfileModal />
			<AddIntegrationModal/>
			<AddASsistantsSelectionModal/>
			<AddWebPageAssistantItem/>
			{/* <AddSmartAssistantItem/> */}
			<AddDocumentAssistantItem/>
			<DecisionTree/>
		</>
	)
}
