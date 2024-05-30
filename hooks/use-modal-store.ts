import { create } from 'zustand'
import { Assistant, User } from '@prisma/client'
export type ModalType =
	| 'createServer'
	
	| 'addIntegration'
	| 'addTgBot'
	| 'addTgUserBot'
	| 'addWaBot'
	| 'addInst'
	| 'addJivo'
	| 'addVK'
	| 'addAvito'
	
	|'addAssistansSelection'
	| 'addAssistant'
	| 'editAssistant'
	| 'deleteAssistant'

	| 'editProfile'
	| 'deleteProfile'
	
	| 'createProject'
interface ModalData {
	assistants?: Assistant[]
	assistant?: Assistant
	assistant_id?:string
	token?: string
	profile?: User
	projectId?: string
}

interface ModalStore {
	type: ModalType | null
	data: ModalData
	isOpen: boolean
	onOpen: (type: ModalType, data?: ModalData) => void
	onClose: () => void
}

export const useModal = create<ModalStore>(set => ({
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ type: null, isOpen: false }),
}))
