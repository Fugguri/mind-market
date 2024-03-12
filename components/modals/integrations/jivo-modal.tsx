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
} from '@/components/ui/form'

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogDescription,
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { useModal } from '@/hooks/use-modal-store'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useEffect } from 'react'

export const AddJivoModal = () => {
	const { isOpen, onClose, type, data } = useModal()

	const assistants = data.assistants
	const formSchema = z.object({
		provider_id: z.string().min(1, {
			message: 'Введите токен',
		}),
		assistant: z.string().min(1, {
			message: 'Выберите ассистента',
		}),
	})

	const router = useRouter()
	const isModalOpen = isOpen && type === 'addJivo'
	const profile = data.profile
	const params = useParams()
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			provider_id: '',
			assistant: '',
		},
	})

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.post(
				`https://web-mindmarket.ru/api_v2/integration/jivo/create`,
				{
					projectId: params.projectId,
					assistantId: values.assistant,
					provider_id: values.provider_id,
				}
			)
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
	// useEffect(() => {
	// 	if (assistants) {
	// 		form.setValue('assistant',)
	// 	}
	// }, [assistants, form])

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className='bg-white text-black p-0 overflow-hidden'>
				<DialogHeader className='pt-8 px-6'>
					<DialogTitle className='text-2xl text-center font-bold'>
						<p>Jivo</p>
					</DialogTitle>
					<DialogDescription className='tetx-center text-zinc-500'>
						Вы всегда сможете удалить интеграцию.
						<br />
						<a
							target='_blank'
							className='text-black'
							href='https://telegra.ph/Instrukciya-dlya-vnedreniya-MindMarket-v-servis-jivo-09-24'
						>
							Инструкция по добавлению нашего API в Jivo
						</a>
						<br />
						token:{params.projectId}
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-8 px-6'>
							<FormField
								control={form.control}
								name='provider_id'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											provider_id
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Введите provider_id, полученный от Jivo'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='assistant'
								render={({ field }) => (
									<FormItem className='bg-white'>
										<FormLabel>Ассистент</FormLabel>
										<FormControl className='bg-white'>
											<Select onValueChange={field.onChange}>
												<SelectTrigger className='w-[180px] bg-white'>
													<SelectValue
														{...field}
														placeholder='Нет ассистента'
													/>
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='none'>Нет ассистента</SelectItem>
													{assistants?.map((assistant, i) => {
														return (
															<SelectItem
																key={assistant.name}
																value={assistant.id}
															>
																{assistant.name}
															</SelectItem>
														)
													})}
												</SelectContent>
											</Select>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter className='bg-gray-100 px-6 py-4'>
							<Button variant='primary' disabled={isLoading}>
								Добавить
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
