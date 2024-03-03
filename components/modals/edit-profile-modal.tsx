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
import { useModal } from '@/hooks/use-modal-store'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { db } from '@/lib/db'

const formSchema = z.object({
	name: z.string().min(1, {
		message: 'name',
	}),
	email: z.string().min(1, {
		message: 'Email',
	}),

	phone_number: z.string().min(1, {
		message: 'Номер телефона',
	}),
	telegram: z.string().min(1, {
		message: 'Телеграм',
	}),
	companyName: z.string().min(1, {
		message: 'Компания',
	}),
	job_title: z.string().min(1, {
		message: 'Роль в компании',
	}),
})

export const EditProfileModal = () => {
	const { isOpen, onClose, type, data } = useModal()
	console.log('edit')
	const router = useRouter()

	const isModalOpen = isOpen && type === 'editProfile'

	const { profile } = data

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone_number: '',
			imageUrl: ' ',
			telegram: '',
			email: '',
			companyName: '',
			job_title: '',
		},
	})
	useEffect(() => {
		if (profile) {
			form.setValue('name', profile.name ?? '')
			form.setValue('phone_number', profile.phone_number ?? '')
			form.setValue('imageUrl', profile.imageUrl ?? '')
			form.setValue('telegram', profile.telegram ?? '')
			form.setValue('email', profile.email ?? '')
			form.setValue('companyName', profile.companyName ?? '')
			form.setValue('job_title', profile.job_title ?? '')
		}
	}, [profile, form])

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)
		try {
			console.log(`api/profile/${profile?.id}`)

			// const user = await db.user.update({
			// 	where: {
			// 		id: profile?.id,
			// 	},
			// 	data: {
			// 		name: values.name,
			// 		phone_number: values.phone_number,
			// 		// imageUrl: values.imageUrl,
			// 		telegram: values.telegram,
			// 		email: values.email,
			// 		companyName: values.companyName,
			// 		job_title: values.job_title,
			// 	},
			// })

			await axios.patch(
				`https://web-mindmarket.ru/api_v2/profile/${profile?.id}`,
				values
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
						Редактирование профиля
					</DialogTitle>
					<DialogDescription className='tetx-center text-zinc-500'>
						Отредактируйте профиль
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
											Ваше ФИО
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Введите ваше ФИО'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone_number'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Номер телефона
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Контактный номер телефона'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='telegram'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Ваш телеграм
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Телеграм для связи'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='job_title'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Роль в компании
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Ваша роль в компании'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='companyName'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Название компании
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Название вашей компании'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											className='uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70'
										>
											Email
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className='bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0'
												placeholder='Ваш email'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter className='bg-gray-100 px-6 py-4'>
							{/* <p>Дата регистрации:{profile.createdAt}</p>
							<p>Отредактировано:{profile.updatedAt}</p> */}
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
