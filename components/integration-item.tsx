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
import { useParams } from 'next/navigation'
import { parseArgs } from 'util'
import { Assistant } from '@prisma/client'

interface IntegrationItemProps {
	projectId: string
	integration: {
		id: string
		title: string
		modal: ModalType
		imageUrl: string
	}
	assistants?: Assistant[]
}

const IntegrationItem = (props: IntegrationItemProps) => {
	const { onOpen } = useModal()

	return (
		<div>
			<Card
				className='bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 
		transition border-0 w-50 h-50'
			>
				<CardHeader
					className='flex items-center justify-center text-center 
			text-muted-foreground'
				>
					<div className='relative w-25 h-25'>
						{/* <Image
							src={props.integration.imageUrl}
							alt={props.integration.title}
							className='rounded-full object-cover'
							fill
						/> */}
					</div>
					<div className='font-bold'>
						<p>{props.integration.title}</p>
					</div>
				</CardHeader>
				<CardFooter className='flex items-center justify-center'>
					{props.integration.title && (
						<Button
							onClick={() =>
								onOpen(props.integration.modal, {
									projectId: props.projectId,
									assistants: props.assistants,
								})
							}
							variant='primary'
						>
							Добавить
						</Button>
					)}
				</CardFooter>
			</Card>
		</div>
	)
}

export default IntegrationItem
