import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'

import { redirect } from 'next/navigation'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Dice1 } from 'lucide-react'

interface AssistantIdStatisticPageProps {
	params: { assistantId: string }
}

const AssistantIdStatisticPage = async ({
	params,
}: AssistantIdStatisticPageProps) => {
	const profile = await currentProfile()

	if (!profile) {
		redirect('api/auth/signin')
	}

	const assistant = await db.assistant.findUnique({
		where: {
			id: params.assistantId,
		},
	})

	if (!assistant) {
		redirect('/')
	}

	return (
		<div className=' w-[80%] h-[80%]'>
			<Card className='bg-gray-400 p-5 text-black rounded-xl cursor-pointer transition border-0 m-10'>
				<CardHeader className='flex items-center text-center bg-'>
					<div className='relative w-32 h-32'>
						<Image
							fill
							alt='Assistant'
							className='rounded-xl object-cover'
							src={
								assistant.imageUrl
									? assistant.imageUrl
									: 'https://cojo.ru/wp-content/uploads/2022/12/avatarki-dlia-vatsapa-50-1.webp'
							}
						/>
					</div>

					<CardTitle>{assistant?.name}</CardTitle>
					<CardDescription>{assistant?.comment}</CardDescription>
				</CardHeader>
				<CardContent className=' m-2 '>
					<div className='rounded-xl bg-gray-300  m-2 p-5'>
						<h1 className='text-xl text-bold text-center'>Промт</h1>
						<br />
						<p>{assistant?.settings}</p>
					</div>

					<h1 className='flex justify-between items-center'>
						<p>Токен:</p>
					</h1>
					<br />
					<h1 className='flex justify-between items-center'>
						<p>Счетчик ответов :</p>
						<p>{assistant?.use_count}</p>
					</h1>
				</CardContent>
				<CardFooter className='flex justify-between items-center font-serif text-xs'>
					<div>
						<p className='p-[5px]'>id:{assistant?.id}</p>
					</div>
					<p className='p-[5px]'>
						Создан:
						{assistant?.createdAt.toLocaleDateString()}
					</p>
					<p className='p-[5px]'>
						Отредактировано: {assistant?.updatedAt.toLocaleDateString()}
					</p>
				</CardFooter>
			</Card>
		</div>
	)
}

export default AssistantIdStatisticPage
