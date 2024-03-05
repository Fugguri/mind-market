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

export const AddTgBotModal = () => {
	const { isOpen, onClose, type, data } = useModal()

	const assistants = data.assistants
	const formSchema = z.object({
		token: z.string().min(1, {
			message: 'Введите токен',
		}),
		assistant: z.string().min(1, {
			message: 'Выберите ассистента',
		}),
		startMessage: z.string().min(1, {
			message: 'Сообщение в ответ на команду "/start"',
		}),
	})

	const router = useRouter()
	const isModalOpen = isOpen && type === 'addTgBot'
	const profile = data.profile
	const params = useParams()
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			token: '',
			assistant: '',
			startMessage: 'Привет! Я работаю на MindMarket.',
		},
	})

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.post(`https://web-mindmarket.ru/api_v2/integrations/tgbot`, {
				projectId: params.projectId,
				botToken: values.token,
				assistantId: values.assistant,
				startMessage: values.startMessage,
			})
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
						<p>Telegram bot (BotFather)</p>
					</DialogTitle>
					<DialogDescription className='tetx-center text-zinc-500'>
						Вы всегда сможете удалить интеграцию в разделе настроек.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-8 px-6'>
							<FormField
								control={form.control}
								name='token'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											token
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Введите токен, полученный от BotFather'
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
													<SelectValue {...field} placeholder='Ассистент' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='none'>Нет ассистента</SelectItem>
													{assistants?.map((assistant, i) => {
														return (
															<SelectItem value={assistant.id}>
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
							<FormField
								control={form.control}
								name='startMessage'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Стартовое сообщение
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Введите токен, полученный от BotFather'
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
								Добавить
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
