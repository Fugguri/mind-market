import { currentProfile } from '@/lib/current-profile'
import { redirectToSignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

interface ProjectIdPageProps {
	params: {
		projectId: string
	}
}

const ChatPage = async (props: ProjectIdPageProps) => {
	const profile = await currentProfile()

	if (!profile) {
		redirectToSignIn()
	}

	return redirect(`projects/${props.params.projectId}/chats`)
}

export default ChatPage
