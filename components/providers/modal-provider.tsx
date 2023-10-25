'use client'

import { CreateAssistantModal } from '@/components/modals/create-assistant-modal'
import { useEffect, useState } from 'react'
import { AddTgBotModal } from '@/components/modals/integrations/tg-bot-modal'
import { AddTgUserBotModal } from '@/components/modals/integrations/tg-user-bot-modal'
import { AddWaBotModal } from '@/components/modals/integrations/wa-bot-modal'
import { DeleteAssistantModal } from '@/components/modals/delete-assistant-modal'
import { EditAssistantModal } from '@/components/modals/edit-assistant-modal'
import { AddInstModal } from '../modals/integrations/instagram-modal'
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
			<AddTgBotModal />
			<AddTgUserBotModal />
			<AddInstModal />
			<AddWaBotModal />
			<CreateAssistantModal />
			<DeleteAssistantModal />
			<EditAssistantModal />
		</>
	)
}
