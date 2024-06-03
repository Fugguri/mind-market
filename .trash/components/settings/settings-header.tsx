'use client'

import { Assistant } from '@prisma/client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	BarChart,
	ChevronDown,
	Plus,
	Settings,
	Settings2,
	Trash,
} from 'lucide-react'
import { useModal } from '@/hooks/use-modal-store'
import { useRouter } from 'next/navigation'

interface SettingsHeaderProps {
	name: string
	href: string
}

const SettingsHeader = ({ name, href }: SettingsHeaderProps) => {
	const { onOpen } = useModal()

	const isAdmin = true
	const isModerator = true

	const router = useRouter()

	const onClick = (href: string) => {
		router.push(href)
	}

	return (
		<div>
			<button
				key={name}
				onClick={() => onClick(href)}
				className='w-full text-md font-semibold px-3 flex 
               items-center h-12 border-neutral-200 
               dark:border-neutral-800 border-b-2 
               hover:bg-zinc-700/10 dark:hover:bg-zinc-800/50 transition'
			>
				{name}
			</button>
		</div>
	)
}

export default SettingsHeader
