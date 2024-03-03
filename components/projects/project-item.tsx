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

interface IntegrationItemProps {
	project: {
		id: string
		title: string
	}
}

const ProjectItem = async (props: IntegrationItemProps) => {
	const { onOpen } = useModal()
	// const profile = await currentProfile()

	// const assistants = await db.assistant.findMany({
	// 	where: { projectId:  },
	// })
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
					<div className='font-bold'>
						<p>{props.integration.title}</p>
					</div>
				</CardHeader>
				{/* <CardFooter className='flex items-center justify-center'>
					{props.integration.title ? (
						<Button
							onClick={() =>
								onOpen(props.integration.modal, {
									// profile: profile,
									// assistants: assistants,
								})
							}
							variant='primary'
						>
							Добавить
						</Button>
					) : (
						<div></div>
					)}
				</CardFooter> */}
			</Card>
		</div>
	)
}

export default ProjectItem
