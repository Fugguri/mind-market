'use client'

import axios from 'axios'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogDescription,
} from '@/components/ui/dialog'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FileUpload } from '@/components/file-upload'
import { ModalType, useModal } from '@/hooks/use-modal-store'
import EmptyPage from '../mics/empty'
import IntegrationItem from '../integration-item'


export const AddIntegrationModal = () => {
	const router = useRouter()
	const params = useParams()

	const { isOpen, onClose, type, data } = useModal()
	const isModalOpen = isOpen && type === 'addIntegration'

    const assistants = data.assistants

	const integrationsList = [
		{
			id: '1',
			imageUrl: '/telegram_img.png',
			title: 'Telegram Bot',
			modal: 'addTgBot' as ModalType,
		},
		{
			id: '2',

			imageUrl: '/telegram_img.png',
			title: 'Telegram Личный',
			modal: 'addTgUserBot' as ModalType,
		},

		{
			id: '3',

			imageUrl: '/whatsapp_img.png',
			title: 'WhatsApp (GreenApi)',
			modal: 'addWaBot' as ModalType,
		},
		{
			id: '4',

			imageUrl: '/instagram_img.jpg',
			title: 'Instagram',
			modal: 'addInst' as ModalType,
		},
		{
			id: '5',
			imageUrl: '/vk_img.png',
			title: 'ВКонтакте',
			modal: 'addVK' as ModalType,
		},
		{
			id: '6',
			imageUrl: '/avito_img.jpg',
			title: 'Авито',
			modal: 'addAvito' as ModalType,
		},
		{
			id: '7',
			imageUrl: '/jivo_img.png',
			title: 'Jivo',
			modal: 'addJivo' as ModalType,
		},
	]
	
	return (
        
        <Dialog  open={isModalOpen} onOpenChange={()=> onClose()}
		className='bg-white text-black left-1/2 top-1/2 fixed transform -translate-x-1/2 -translate-y-1/2 w-80vw h-80vh grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-10 shadow-lg duration-200 animate-fade-in-0 fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg'>

		<DialogContent className='bg-white text-black left-[50%] top-[50%] overflow-hidden w-80vw h-80vh'>
					<DialogHeader className=''>
						<DialogTitle className='text-2xl text-center font-bold'>
							<h1>Выберите ресурс который хотите подключить</h1>
						</DialogTitle>
						<DialogDescription className='tetx-center text-zinc-500'>
						<div  className=' items-center align-middle font-roboto ml-15'>
							<div className='flex m-10 p-10 align-middle items-center '>
								<br></br>
								<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-10'>
									{integrationsList.map(integration => (
										<div  key={integration.title}>
											<IntegrationItem
												projectId={'dsad'}
												integration={integration}
												assistants={assistants}
											/>
										</div>
									))}
								</div>
							</div>
							</div>
						</DialogDescription>
					</DialogHeader>
					</DialogContent>

        </Dialog>

    )
}
