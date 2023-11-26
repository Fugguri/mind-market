import { currentProfile } from '@/lib/current-profile'
import { redirectToSignIn } from '@clerk/nextjs'
import { db } from '@/lib/db'

interface ChatIdPageProps {
	params: {
		chatType: string
		chatId: string
	}
}

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
	const profile = await currentProfile()

	return (
		<div>
			{profile?.email}
			Chat item id: {`${params.chatId}`}
		</div>
	)
}

export default ChatIdPage
