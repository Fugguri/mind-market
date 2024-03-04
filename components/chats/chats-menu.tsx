'use client'

import { redirect, useParams, usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { currentProfile } from '@/lib/current-profile'
import ChatMenuItem from './chat-menu-item'

interface ChatTypeProps {
	params: { projectId: string; chatType: string }
}

const ChatTypeMenu = ({ params }: ChatTypeProps) => {
	const menuItems = [
		{
			title: 'Входящие',
			chatType: 'inbox',
			path: `inbox`,
		},
		{
			title: 'Мои',
			chatType: 'my',
			path: `my`,
		},
		{
			title: 'Все',
			chatType: 'archive',
			path: `archive`,
		},
	]

	return (
		<div>
			<div className='grid grid-cols-3 ml-5'>
				{menuItems.map(item => (
					<ChatMenuItem
						key={item.path}
						title={item.title}
						path={item.path}
						chatType={item.chatType}
					/>
				))}
			</div>
		</div>
	)
}

export default ChatTypeMenu
