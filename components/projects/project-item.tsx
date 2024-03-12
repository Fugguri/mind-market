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
import { Trash2 } from 'lucide-react'

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
	
	function handleClick() {
		router.push(`projects/${props.project?.id}/chats`)
	}
	
	return (
<Card className="w-full h-full p-4 bg-gray-500 shadow-md rounded-lg text-gray-800 flex flex-col justify-between border-gray-700">
  <CardHeader className=''>
    <button onClick={handleClick} className="text-sm font-semibold ">
		<p className="text-gray-100 mb-4 text-left">{props.project?.name}</p>
	</button>
  </CardHeader>
		<CardContent>
    <p className="text-gray-300 mb-4 text-sm">Роль в проекте</p>
		</CardContent>
  <div className="flex justify-end">
    <Button className=" font-bold py-2 px-2 rounded ">
      <Trash2  className='stroke-red-500 hover:stroke-black transition ease-in-out delay-150 duration-300 w-5 h-5'/>
    </Button>
  </div>
</Card>
	)
}

export default ProjectItem
