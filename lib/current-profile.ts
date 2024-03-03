import { Manager } from './../node_modules/.prisma/client/index.d'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { db } from './db'
import { getServerSession } from 'next-auth/next'
import { authConfig } from '@/config/auth'

export const currentProfile = async () => {
	const session = await getServerSession(authConfig)
	console.log(session)
	if (!session) {
		return null
	}

	const profile = await db.user.findUnique({
		where: {
			email: session?.user?.email?.toString(),
		},
		include: {
			Project: true,
		},
	})

	return profile
}
