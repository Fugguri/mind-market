import IntegrationItem from '@/components/integrations/integration-item'
import EmptyPage from '@/components/mics/empty'
import { ModalProvider } from '@/components/providers/modal-provider'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { ModalType, useModal } from '@/hooks/use-modal-store'

const IntegrationsPage = async ({
	params,
}: {
	params: { projectId: string }
}) => {
	const profile = await currentProfile()

	if (!profile) {
		return '/'
	}
	const project = await db.project.findFirst({
		where: {
			id: params?.projectId,
		},
		include: {
			TelegramBot: true,
			TelegramUserBot: true,
			WhatsAppBot: true,
		},
	})
	const assistants = await db.assistant.findMany({
		where: {
			projectId: params?.projectId,
		},
	})
	const integrationsList = [
		{
			id: '1',
			imageUrl: '/telegram_img.png',
			title: 'Telegram Bot',
			modal: 'addTgBot' as ModalType,
		},
		{
			id: '2',

			imageUrl: '/telegram_img.png',
			title: 'Telegram Личный',
			modal: 'addTgUserBot' as ModalType,
		},

		{
			id: '3',

			imageUrl: '/whatsapp_img.png',
			title: 'WhatsApp (GreenApi)',
			modal: 'addWaBot' as ModalType,
		},
		{
			id: '4',

			imageUrl: '/instagram_img.jpg',
			title: 'Instagram',
			modal: 'addInst' as ModalType,
		},
		{
			id: '5',
			imageUrl: '/vk_img.png',
			title: 'ВКонтакте',
			modal: 'addVK' as ModalType,
		},
		{
			id: '6',
			imageUrl: '/avito_img.jpg',
			title: 'Авито',
			modal: 'addAvito' as ModalType,
		},
	]

	return (
		<div className=' items-center align-middle font-roboto ml-15'>
			<div className='m-10 p-10 bg-gray-600 rounded-[30px]'>
				<div>
					<EmptyPage title='интеграций' />
				</div>
				{/* {integrations.length ? (
					integrations.map(integration => (
						<div key={integration.id}>
							<p>{integration.id}</p>
						</div>
					))
				) : (
				)} */}
			</div>
			<div className='flex m-10 p-10 align-middle items-center '>
				<br></br>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-10'>
					{integrationsList.map(integration => (
						<div key={integration.title}>
							<IntegrationItem
								projectId={params?.projectId}
								integration={integration}
								assistants={assistants}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default IntegrationsPage
