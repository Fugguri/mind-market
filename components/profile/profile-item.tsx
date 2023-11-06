'use client'
import { User } from '@prisma/client'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Edit } from 'lucide-react'
import { useModal } from '@/hooks/use-modal-store'

interface ProfileItemPageProps {
	profile: User
}

const ProfileItemPage = ({ profile }: ProfileItemPageProps) => {
	const { onOpen } = useModal()

	return (
		<div className='rounded-[30px] m-10 p-10 items-center h-[80%] w-[80%] bg-gray-400 dark:text-black'>
			<div className='bg-gray'>
				<div className='relative w-32 h-32'>
					<Image
						fill
						alt='profile image'
						className='rounded-xl object-cover'
						src={profile?.imageUrl ? profile.imageUrl : ''}
					/>
				</div>

				<h1 className='text-center font-bold text-xl'>{profile?.name}</h1>
				<br />

				<p>
					<b>email:</b> {profile?.email}
				</p>

				<p>
					<b>Окончание подписки:</b> {profile?.expires.toLocaleDateString()}
				</p>
				<p>{/* {profile?.password} */}</p>
				<br />
				<p>
					<b>Дата регистрации:</b> {profile?.createdAt.toLocaleDateString()}
				</p>
				<p>
					<b>Отредактировано:</b> {profile?.updatedAt.toLocaleDateString()}
				</p>
				<br />
				<div className='flex justify-end '>
					<button
						onClick={() => {
							onOpen('editProfile', profile), console.log('fdf')
						}}
					>
						<Edit />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProfileItemPage
