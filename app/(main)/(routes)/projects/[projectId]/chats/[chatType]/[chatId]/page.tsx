// 'use client'
import { currentProfile } from '@/lib/current-profile'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { ChatInput } from '@/components/chat/chat-input'

interface ChatIdPageProps {
	params: {
		projectId: string
		chatType: string
		chatId: string
	}
}

const ChatIdPage = async (params: ChatIdPageProps) => {
	const profile = await currentProfile()
	if (!profile) {
		return redirect('/')
	}

	const messages = await db.message.findMany({
		where: {
			chat_id: params.params.chatId,
		},
	})

	return (
		<div className='bg-white dark:bg-[#313338] '>
			<ResizablePanelGroup
				className='pt-10 rounded-lg border'
				direction='horizontal'
			>
				<div>
					<ResizablePanelGroup
						className='pt-10 rounded-lg border'
						direction='vertical'
					>
						<ResizablePanel defaultSize={70}>
							<div>
								{messages.map(message => (
									<div key={message.id}>{message.text}</div>
								))}
							</div>
						</ResizablePanel>
						<ResizablePanel defaultSize={30}>
							Тут будет окно клиента
							<ChatInput apiUrl='/' />
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>

				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={30}>Тут будет окно клиента</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}

export default ChatIdPage
