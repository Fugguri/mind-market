'use client'

import axios from 'axios'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../../ui/form'

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
import { useModal } from '@/hooks/use-modal-store'
import { useEffect } from 'react'

const formSchema = z.object({
	name: z.string().min(1, {
		message: 'Введите имя ассистента',
	}),
	settings: z.string().min(1, {
		message: 'Введите промт для настройки ассистента',
	}),
	comment: z.string().min(1, {
		message: 'Комментарий к этому ассистенку.',
	}),
	imageUrl: z.string().min(1, {
		message: 'Изображение',
	}),
})

export const EditAssistantModal = () => {
	const { isOpen, onClose, type, data } = useModal()

	const router = useRouter()

	const isModalOpen = isOpen && type === 'editAssistant'

	const { assistant } = data

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			settings: '',
			comment: '',
			imageUrl: '',
		},
	})
	useEffect(() => {
		if (assistant) {
			form.setValue('name', assistant.name ? assistant.name : 'Default')
			form.setValue(
				'settings',
				assistant.settings ? assistant.settings : 'Default'
			)
			form.setValue(
				'comment',
				assistant.comment ? assistant.comment : 'Default'
			)
			form.setValue(
				'imageUrl',
				assistant.imageUrl ? assistant.imageUrl : 'Default'
			)
		}
	}, [assistant, form])

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.patch(`/api/assistants/${assistant?.id}`, values)

			form.reset()
			router.refresh()
			onClose()
		} catch (error) {
			console.log(error)
		}
	}

	const handleClose = () => {
		onClose()
		form.reset()
	}

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className='bg-white text-black p-0 overflow-hidden'>
				<DialogHeader className='pt-8 px-6'>
					<DialogTitle className='text-2xl text-center font-bold'>
						Настройте своего ассистента
					</DialogTitle>
					<DialogDescription className='tetx-center text-zinc-500'>
						Дайте своему ассистенту имя и настройте его описание. Вы всегда
						сможете его изменить!
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-8 px-6'>
							<div className='flex items-center justify-center text-center'>
								<FormField
									control={form.control}
									name='imageUrl'
									render={({ field }) => {
										return (
											<FormItem>
												<FormControl>
													<FileUpload
														endpoint='assistantImage'
														value={field.value}
														onChange={field.onChange}
													/>
												</FormControl>
											</FormItem>
										)
									}}
								/>
							</div>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Имя ассистента
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Дайте имя вашему ассистенку'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='settings'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Промт для настройки ассистента
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Добавьте промт'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='comment'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Комментарий к ассистенту
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Добавьте комментарий'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter className='bg-gray-100 px-6 py-4'>
							<Button variant='primary' disabled={isLoading}>
								Обновить
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
