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

interface IntegrationItemProps {integration:{

	id:string
	title: string
	modal: ModalType
	imageUrl:string
},
}


const IntegrationItem = (props: IntegrationItemProps) => {
	const { onOpen } = useModal()
	
	return (

		<Card className='bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 
		transition border-0 w-50 h-50'>
			
			<CardHeader className='flex items-center justify-center text-center 
			text-muted-foreground'>
				<div className='relative w-32 h-32'>
					<Image src={props.integration.imageUrl}  
					alt={props.integration.title}
					className='rounded-full object-cover'
					fill
					
					/>

				</div>
				 <div className='font-bold'>

				 <p>{props.integration.title}</p>
				 </div>
			</CardHeader>
			<CardFooter className='flex items-center justify-center'>
				{props.integration.title ? (
					<Button
					onClick={() => onOpen(props.integration.modal)}
						variant='primary'
						>
						Добавить
					</Button>
				) : (
					<></>
					)}
			</CardFooter>
		</Card>

	)
}

export default IntegrationItem
