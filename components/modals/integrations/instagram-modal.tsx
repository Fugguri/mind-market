// 'use client'

import axios from 'axios'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
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
import { FacebookLoginButton } from 'react-facebook-login'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { useModal } from '@/hooks/use-modal-store'
import { Facebook } from 'lucide-react'

const formSchema = z.object({
	token: z.string().min(1, {
		message: 'Введите токен',
	}),
})

export const AddInstModal = () => {
	const { isOpen, onClose, type, data } = useModal()

	const router = useRouter()

	const isModalOpen = isOpen && type === 'addInst'

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			token: '',
		},
	})

	const responseFacebook = (response: Response) => {
		console.log(response)
		// Обработайте ответ от Facebook Login
	}

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)

		try {
			await axios.post('https://web-mindmarket.ru/api_v2/integrations', values)
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
						<p>Подключение инстаграм аккаунта</p>
					</DialogTitle>
					<DialogDescription className='text-center text-zinc-500'>
						Тут будет информация о том как работает подключение инстаграма
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className='bg-gray-100 px-6 py-4'>
					<FacebookLoginButton
						appId={}
						autoLoad={false}
						fields='name,email,picture'
						callback={responseFacebook}
					/>
					<div
						className='fb-login-button'
						data-width=''
						data-size=''
						data-button-type=''
						data-layout=''
						data-auto-logout-link='false'
						data-use-continue-as='false'
					></div>
					<Button variant='primary' disabled={isLoading}>
						<a href='https://www.facebook.com/oauth/authorize?client_id=993271218405281&redirect_uri=​web-mindmarket.ru/api/callback/facebook&scope=user_profile,user_media&response_type=code'>
							<Image
								className='opacity-75`'
								src='/instagram-icon.png'
								width={25}
								height={25}
								alt='Login with Instagram'
							/>
						</a>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
