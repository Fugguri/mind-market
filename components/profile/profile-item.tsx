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
					{profile?.imageUrl ? (
						<Image
							fill
							alt='profile image'
							className='rounded-xl object-cover'
							src={profile.imageUrl}
						/>
					) : (
						''
					)}
				</div>

				<h1 className='text-center font-bold text-xl'>{profile?.name}</h1>
				<br />

				<p>
					<b>Email:</b> {profile?.email}
				</p>
				<p>
					<b>Телефон:</b> {profile?.phone_number ?? '-'}
				</p>
				<p>
					<b>telegram:</b> {profile?.telegram ?? '-'}
				</p>
				<p>
					<b>Окончание подписки:</b> {profile?.subscription_end?.toUTCString()}
				</p>
				<p>
					<b>email подтвержден:</b> {profile?.emailVerified ? '✅' : '❌'}
				</p>
				<p>
					<b>Компания:</b> {profile?.companyName ?? '-'}
				</p>
				<p>
					<b>Роль в компании:</b> {profile?.job_title ?? '-'}
				</p>
				<br />

				<p>
					<b>Дата регистрации:</b> {profile?.createdAt.toLocaleDateString()}
				</p>
				<br />
				<div className='flex justify-end '>
					<Button
						onClick={() => {
							console.log('editProfile')
							onOpen('editProfile', { profile: profile })
						}}
					>
						<Edit />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProfileItemPage
