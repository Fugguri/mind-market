import { redirect } from 'next/navigation'

import { db } from '@/lib/db'
import { currentProfile } from '@/lib/current-profile'
import AssistantSidebar from '@/components/assistant/assistant-sidebar'
import { signIn } from 'next-auth/react'
import { NavigationAction } from '@/components/navigation/navigation-action'

const AssistantPageLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode
	params: { projectId: string }
}) => {
	const profile = await currentProfile()

	if (!profile) {
		return signIn
	}
	const assistants = await db.assistant.findMany({
		where: {
			projectId: params.projectId,
		},
	})

	return (
		<main className='h-full'>
			{assistants ? (
				<div className='h-full'>
					<div>
						<div className='hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0'>
							<AssistantSidebar assistants={assistants} />
						</div>
						<div className=' md:pl-60'>{children}</div>
					</div>
				</div>
			) : (
				''
			)}
		</main>
	)
}

export default AssistantPageLayout
