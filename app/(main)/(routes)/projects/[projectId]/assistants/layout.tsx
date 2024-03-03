import { redirect } from 'next/navigation'

import { db } from '@/lib/db'
import { currentProfile } from '@/lib/current-profile'
import AssistantSidebar from '@/components/assistant/assistant-sidebar'
import { signIn } from 'next-auth/react'
import { NavigationAction } from '@/components/navigation/navigation-action'

const AssistantPageLayuot = async ({
	children,
}: {
	children: React.ReactNode
}) => {
	const profile = await currentProfile()

	if (!profile) {
		return signIn
	}

	return (
		<main className='h-full'>
			<div className=' md:pl-60'>{children}</div>
			{/* {assistant ? (
				<div className='h-full'>
					<div>
						<div className='hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0'>
							<AssistantSidebar />
						</div>
					</div>
				</div>
			) : (
				''
			)} */}
		</main>
	)
}

export default AssistantPageLayuot
