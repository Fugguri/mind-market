'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Profile = () => {
	const session = useSession()
	return (
		<div className='h-[48px] rounded-full w-[48px]'>
			<Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
				<Avatar>
					<AvatarImage
						src={session.data?.user?.image ? session.data?.user?.image : ''}
					/>
					<AvatarFallback>{session.data?.user?.name}</AvatarFallback>
				</Avatar>
			</Link>
		</div>
	)
}

export default Profile
