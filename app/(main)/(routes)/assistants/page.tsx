import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirectToSignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

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
	}
	console.log(assistant)
	return redirect(`assistants/statistic/${assistant?.id}`)
}

export default AssistantsPage
