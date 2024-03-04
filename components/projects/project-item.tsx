'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ModalType, useModal } from '@/hooks/use-modal-store'
import Image from 'next/image'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { Manager } from '@prisma/client'
import { useRouter } from 'next/navigation'

interface IntegrationItemProps {
	project: {
		id: string
		name: string
		managers?: Manager
		ownerId: string
	}
}

const ProjectItem = (props: IntegrationItemProps) => {
	const router = useRouter()

	return (
		<div>
			<Button
				onClick={() => router.push(`projects/${props.project?.id}/chats`)}
			>
				<Card
					className='bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 
				transition border-0 w-50 h-50'
				>
					<CardHeader
						className='flex items-center justify-center text-center 
					text-muted-foreground'
					>
						<div className='font-bold'>
							<p>{props.project?.name}</p>
							<p>{props.project?.id}</p>
						</div>
					</CardHeader>
					<CardContent>Роль в проекте</CardContent>
					<CardFooter className='flex items-center justify-center'>
						{props.project?.name ? (
							<Button variant='primary'>Добавить</Button>
						) : (
							<div></div>
						)}
					</CardFooter>
				</Card>
			</Button>
		</div>
	)
}

export default ProjectItem
