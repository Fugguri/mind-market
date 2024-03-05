'use client'
import { currentProfile } from '@/lib/current-profile'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'

import { db } from '@/lib/db'
import { ChatInput } from '@/components/chat/chat-input'
import { redirect } from 'next/navigation'
import ClientChatItem from '@/components/client/client-chat-item'

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
	})
	if (!chat) {
		return redirect('chats')
	}
	if (!chat.client) {
		return redirect('chats')
	}
	return (
		<div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
			<ResizablePanelGroup direction='vertical'>
				<ResizablePanel>
					One
					<div>Future messages</div>
					<ChatInput
						name={chat.client?.name}
						apiUrl='api/messages/'
						query={{ projectId: params, managerId: profile.id }}
					/>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel>
					Two
					{/* <ClientChatItem client={chat?.client} /> */}
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}

export default ChatIdPage
