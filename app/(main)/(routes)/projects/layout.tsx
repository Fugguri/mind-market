import ChatsHeader from '@/components/chats/chats-header'
import ChatTypeMenu from '@/components/chats/chats-menu'
import { NavBar } from '@/components/navigation/navbar'
import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import PageTitleItem from '@/components/ui/page_title'
import { usePathname } from 'next/navigation'

const ChatLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode
	params: { chatType: string }
}) => {
	return (
		<main className='h-full'>
			<div className='h-full'>
				<div>
					<PageTitleItem title='Проекты' />
					<div className='hidden mt-5 md:flex w-full  flex-col ml-l-5   inset-y-0'></div>

					{children}
				</div>
			</div>
		</main>
	)
}

export default ChatLayout
