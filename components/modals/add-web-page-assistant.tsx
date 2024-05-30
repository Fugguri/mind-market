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
import IntegrationItem from '../integrations/integration-item'


export const AddIntegrationModal = () => {
	const router = useRouter()
	const params = useParams()

	const { isOpen, onClose, type, data } = useModal()
	const isModalOpen = isOpen && type === 'addWebPageAssistant'

    
	
	return (
        
        <Dialog  open={isModalOpen} onOpenChange={()=> onClose()}>

		<DialogContent className='bg-white text-black  overflow-hidden'>
					<DialogHeader className=''>
						<DialogTitle className='text-2xl text-center font-bold'>
							<h1>Выберите ресурс который хотите подключить</h1>
						</DialogTitle>
						<DialogDescription className='tetx-center text-zinc-500'>
						<div  className=' items-center align-middle font-roboto ml-15'>
							<div className='flex m-10 p-10 align-middle items-center '>
								<br></br>
								<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-10'>
									{integrationsList.map(integration => (
										<div key={integration.title}>
											<IntegrationItem
												projectId={'dsad'}
												integration={integration}
												// assistants={assistant}
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
