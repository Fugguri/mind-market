import Image from 'next/image'
import { Button } from '../ui/button'
import { PersonStanding, PersonStandingIcon, User } from 'lucide-react'
import { redirect, usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ChatMenuItemProps {
	title: string
	chatType: string
	path: string
}

const ChatMenuItem = ({ title, chatType, path }: ChatMenuItemProps) => {
	const pathname = usePathname()
	const router = useRouter()

	const isActive =
		(pathname === '/' && path === '/') ||
		pathname === path ||
		pathname.startsWith(`${path}`)

	const onClick = () => {
		router.push(path)
	}

	return (
		<div>
			<Link href={path}>
				<button className='bg-transparent h-[90px]'>
					{/* <Button className={cn("flex items-center gap-x-2 hover:bg-transparent",
                        isActive&& "text-green-500",
                        )}
                        onClick={onClick}
                        variant='chat'>
            </Button> */}
					<p
						className={cn(
							'flex items-center gap-x-2 hover:bg-transparent',
							isActive && 'text-green-500'
						)}
					>
						{title}
					</p>
					<div
						className={cn(
							'ml-auto opacity-0 botder-2 h-1 border-sky-700 w-full translition-all',
							isActive && ' bg-slate-600 opacity-100'
						)}
					/>
				</button>
			</Link>
		</div>
	)
}

export default ChatMenuItem
