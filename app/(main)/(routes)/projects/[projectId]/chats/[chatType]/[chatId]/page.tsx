// 'use client'
import { currentProfile } from '@/lib/current-profile'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { redirect } from 'next/navigation'

interface ChatIdPageProps {
	params: { projectId: string; chatType: string; chatId: string }
}

const ChatIdPage = async (params: ChatIdPageProps) => {
	const profile = await currentProfile()
	if (!profile) {
		return redirect('/')
	}

	return (
		<div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
			<ResizablePanelGroup direction='vertical'>
				<ResizablePanel>client data</ResizablePanel>
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
