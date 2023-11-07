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
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
	token: z.string().min(1, {
		message: 'Введите токен',
	}),
	assistant: z.array(
		z.object({
			name: z.string(),
			id: z.string(),
		})
	),
})

export const AddTgBotModal = () => {
	const { isOpen, onClose, type, data } = useModal()

	const router = useRouter()
	const isModalOpen = isOpen && type === 'addTgBot'

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			token: '',
			assistant: [
				{
					name: 'fdsf',
					id: 'fdsf',
				},
			],
		},
	})

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)
		const token = values.token
		try {
			await axios.post(
				`https://web-mindmarket.ru/api_v2/integrations/tgbot/${data.token}`,
				{ token: values.token }
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
									<FormItem className='bg-transparent'>
										<FormLabel>Ассистент</FormLabel>
										<FormControl>
											<Select>
												<SelectTrigger className='w-[180px]'>
													<SelectValue placeholder='ассистент' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='dark'></SelectItem>

													<SelectItem value='light'></SelectItem>

													<SelectItem value='system'>System</SelectItem>
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
