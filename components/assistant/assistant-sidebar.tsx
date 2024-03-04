import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import AssistantHeader from './assistant-header'
import { Assistant } from '@prisma/client'

interface SidebarProps {
	assistants?: Assistant[]
}

const AssistantSidebar = async (props: SidebarProps) => {
	const profile = await currentProfile()

	if (!profile) {
		return redirect('/')
	}
	const assistants = props?.assistants
	if (!assistants) {
		return redirect('/')
	}
	return (
		<div className='flex flex-col h-full text-primary w-fill dark:bg-[#2B2D31] db-[#F2F3F5]'>
			<p className='m-3 font-bold dark:text-neutral-500'>Ассистенты</p>

			{assistants.map(assistant => (
				<div key={assistant.id} className='mb-4'>
					<AssistantHeader key={assistant.id} assistant={assistant} />
				</div>
			))}
		</div>
	)
}

export default AssistantSidebar
