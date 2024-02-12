
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirectToSignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import noAssistantPage from '@/components/assistant/no-assistant'
import { NavigationAction } from '@/components/navigation/navigation-action'
import EmptyPage from '@/components/mics/empty'
import { ActionTooltip } from '@/components/action-tooltip'
import { Button } from '@/components/ui/button'
import { AddAssistantButton } from '@/components/assistant/add-assistant'

const AssistantsPage = async () => {
	const profile = await currentProfile()

	if (!profile) {
		redirectToSignIn()
	}


	const assistant = await db.assistant.findFirst({
		where: {
			userId: profile?.id,
		},
	})
	if (!assistant) {
		return (
			<div className=' justify-center mr-20 '>
				<div >
					<EmptyPage title='ассистентов'/>
				</div>
				<div className='flex items-center justify-center  m-10'>
					<AddAssistantButton/>
				</div>
			</div>

		)
	}

	return redirect(`assistants/statistic/${assistant?.id}`)
}

export default AssistantsPage
