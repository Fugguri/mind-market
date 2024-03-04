'use client'
import { currentProfile } from '@/lib/current-profile'

import { db } from '@/lib/db'
import { ChatInput } from '@/components/chat/chat-input'
import { redirect } from 'next/navigation'

interface ChatIdPageProps {
	params: {
		chatType: string
		chatId: string
	}
}

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
	const profile = await currentProfile()
	if (!profile) {
		return redirect('/')
	}
	const chat = await db.chat.findFirst({
		where: {
			id: params.chatId,
		},
		include: {
			client: true,
			Messages: true,
		},
		orderBy:{
			Messages:
		}
	})
	if (!chat) {
		return redirect('chats')
	}
	return (
		<div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
			<div>Future messages</div>
			<ChatInput
				name={chat.client?.name}
				apiUrl='api/messages/'
				query={{ projectId: params, managerId: profile.id }}
			/>
		</div>
	)
}

export default ChatIdPage
