import { create } from 'zustand'
import { Assistant, User } from '@prisma/client'
export type ModalType =
	| 'createServer'
	| 'addTgBot'
	| 'addTgUserBot'
	| 'addWaBot'
	| 'addInst'
	| 'addVK'
	| 'addAvito'
	| 'editAssistant'
	| 'deleteAssistant'
	| 'editProfile'

interface ModalData {
	assistant?: Assistant
	token?: string
	profile?: User
}

interface ModalStore {
	type: ModalType | null
	data: ModalData
	isOpen: boolean
	onOpen: (type: ModalType, data?: ModalData) => void
	onClose: () => void
}

export const useModal = create<ModalStore>(set => (	{
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ type: null, isOpen: false }),
}))
