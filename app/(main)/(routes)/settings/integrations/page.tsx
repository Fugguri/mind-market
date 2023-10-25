import ExistIntegrationItem from '@/components/integrations/exist-integration-item'
import IntegrationItem from '@/components/integrations/integration-item'
import IntegrationsHeader from '@/components/integrations/integrations-header'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { profile } from 'console'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const ServicesPage = async () => {
	const user = await currentProfile()

	if (!user) {
		return redirect('/')
	}

	const integrations = db.profile.findMany({
		where: {
			id: user.id,
		},

		include: {
			whatsAppBot: {
				where: {
					profileId: user.id,
				},
			},
			telegramBots: {
				where: {
					profileId: user.id,
				},
			},
			telegramUserBots: {
				where: {
					profileId: user.id,
				},
			},
		},
	})

	if (!integrations) {
		redirect('/')
	}

	console.log(integrations)
	return (
		<div>
			<IntegrationsHeader />
			{/* <div className=' m-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10'>
				{/* {integrations.map((integration) => (<ExistIntegrationItem key={integration.id} data={integration}/>) ,} 
			</div> */}
			<div className=' m-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10'>
				<IntegrationItem
					token={user.token}
					modal='addTgBot'
					title='Телеграм бот'
					description='Инструкция по регистрации-'
					content='Тут вы можете добавить телеграм бота, созданного через-'
					button='Добавить'
					content_link='https://t.me/BotFather'
					content_link_title='BotFather'
					description_link='https://t.me/BotFather'
					description_link_title='Тут будет ссылка на инструкцию'
				/>
				<IntegrationItem
					token={user.token}
					modal='addTgUserBot'
					title='Telegram User-Бот'
					description='Telegram user-bot '
					content='Тут вы можете добавить телеграм бота, созданного через-'
					button='Добавить'
					description_link='https://t.me/BotFather'
					description_link_title='Тут будет ссылка на инструкцию'
					content_link='https://my.telegram.org'
					content_link_title='Telegram'
				/>
				<IntegrationItem
					token={user.token}
					modal='addWaBot'
					title='Whatsapp Бот'
					description='Интеграция с системой '
					content='Тут вы можете добавить whatsapp бота, созданного через-'
					button='Добавить'
					description_link='https://green-api.com/'
					description_link_title='GreenApi'
					content_link='https://green-api.com/'
					content_link_title='GreenApi'
				/>
				<IntegrationItem
					token={user.token}
					modal='addInst'
					title='Instagram Бот'
					description=' Тут будет описание инстаграм бота '
					content='Мы уже работаем над этим...'
					description_link={null}
					description_link_title={null}
					content_link={null}
					content_link_title={null}
					button='Добавить'
				/>
			</div>
		</div>
	)
}

export default ServicesPage
