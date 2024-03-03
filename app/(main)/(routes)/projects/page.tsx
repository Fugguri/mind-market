import { currentProfile } from '@/lib/current-profile'
import { redirectToSignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import ChatItem from '@/components/chats/chat-item'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
const ProjectsPage = async () => {
	const profile = await currentProfile()

	// if(!profile) {
	//     redirectToSignIn()
	// }
	const chats = [
		{
			id: '54523',
			text: 'some ',
			title: 'some d',
			time: 'some da',
			channel: 'some da',
		},
		{
			id: '5452rew3',
			text: 'some ',
			title: 'some d',
			time: 'some da',
			channel: 'some da',
		},
	]

	return (
		<div>
			<Separator orientation='horizontal' />
			<div className='grid grid-cols-3 m-5 h-3 align-top '>
				<div className='col-span-1 flex align-top font-size-12'>Сообщение</div>
				<div className='col-span-1 flex items-center font-size-12'>Время </div>
				<div className='col-span-1 flex items-center font-size-12'>Канал </div>
			</div>
		</div>
	)
}
export default ProjectsPage
