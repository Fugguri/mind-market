import AsistantItem from '@/components/assistant/assistant-item'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirectToSignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { useModal } from '@/hooks/use-modal-store'
import PageTitleItem from '@/components/ui/page_title'

const AssistantsPage = async () => {
	const profile = await currentProfile()

	if (!profile) {
		redirectToSignIn()
	}

	const assistants = await db.assistant.findMany({
		where: {
			profileId: profile?.id,
		},
	})

	if (!assistants) {
		redirect('/')
	}
	return (
		<div className='m-5'>
			<PageTitleItem title='Ассистенты' />
			<div
				className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-2 pb-10'
			>
				{assistants.map(assistant => (
					<AsistantItem key={assistant.id} assistant={assistant} />
				))}
			</div>
		</div>
	)
}

export default AssistantsPage
