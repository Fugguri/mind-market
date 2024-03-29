'use client'
import ChatsHeader from '@/components/chats/chats-header'
import ChatTypeMenu from '@/components/chats/chats-menu'
import PageTitleItem from '@/components/ui/page_title'
import { usePathname } from 'next/navigation'

const ChatLayout = ({
	children,
	params,
}: {
	children: React.ReactNode
	params: { chatType: string; projectId: string; chatId?: string }
}) => {
	const pathname = usePathname()
	const isEnable = params.chatId
	return (
		<div className=''>
			<div>
				{isEnable && (
					<div>
						<PageTitleItem title='Чаты' />
						<div className='hidden mt-5 md:flex w-full  flex-col ml-l-5   inset-y-0'>
							<ChatsHeader />
							<ChatTypeMenu params={params} />
						</div>
					</div>
				)}
			</div>
			<div className='h-full'>{children}</div>
		</div>
	)
}

export default ChatLayout
