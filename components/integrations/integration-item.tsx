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

interface IntegrationItemProps {
	token: string
	modal: ModalType
	title: string
	description: string | null
	description_link: string | null
	description_link_title: string | null
	content: string | null
	content_link: string | null
	content_link_title: string | null
	button: string | null
}

const IntegrationItem = (props: IntegrationItemProps) => {
	const { onOpen } = useModal()

	const token = props.token

	return (
		<Card className='mb-5 bg-slate-700/50 '>
			<CardHeader>
				<CardTitle>{props.title}</CardTitle>
				<CardDescription>
					{' '}
					{props.description}
					{props.description_link ? (
						<a
							href={props.description_link}
							className='hover:text-green-700 underline'
						>
							{' '}
							{props.description_link_title}{' '}
						</a>
					) : (
						<></>
					)}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					{props.content_link ? (
						<a
							href={props.content_link}
							className='hover:text-green-700 underline'
						>
							{props.content_link_title}
						</a>
					) : (
						<></>
					)}
				</p>
			</CardContent>
			<CardFooter className='items-center'>
				{props.button ? (
					<Button
						onClick={() => onOpen(props.modal, { token })}
						variant='primary'
					>
						{props.button}
					</Button>
				) : (
					<></>
				)}
			</CardFooter>
		</Card>
	)
}

export default IntegrationItem
