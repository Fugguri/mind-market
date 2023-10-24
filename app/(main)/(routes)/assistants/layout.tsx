import { redirect } from 'next/navigation'

import { db } from '@/lib/db'
import { currentProfile } from '@/lib/current-profile'
import AssistantSidebar from '@/components/assistant/assistant-sidebar'
import { signIn } from 'next-auth/react'

const AssistantPageLayuot = async ({
	children,
}: {
	children: React.ReactNode
}) => {
	const profile = await currentProfile()

	if (!profile) {
		return signIn
	}
	const assistant = await db.assistant.findMany({
		where: {
			profileId: profile.id,
		},
	})
	if (!assistant) {
		return redirect('/')
	}
	return (
		<main className='h-full'>
			<div className='h-full'>
				<div className='hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0'>
					<AssistantSidebar />
				</div>
				<div className=' md:pl-60'>{children}</div>
			</div>
		</main>
	)
}

export default AssistantPageLayuot
