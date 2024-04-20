import { HeadModuleLTR } from '@/components/headings'
import { BlockRTL, BlockLTR } from '@/components/blocks'
import {
	CardQuote,
	CardImage,
	CardBigIcon,
	CardModule,
	CardExtend,
} from '@/components/cards'
import { BtnOutnlineIcon } from '@/components/buttons'

export default function AboutPage() {
	return (
		<>
			<HeadModuleLTR
				h1='Добро пожаловать'
				h2='на страницу о MindMarket!'
			></HeadModuleLTR>
			<BlockRTL>
				<CardQuote text='Мы технологическая компания по разработке решений на основе искусственного интеллекта. Наша цель — помочь компаниям и частным лицам получить доступ к передовым AI-технологиям и решениям, которые помогут улучшить эффективность работы повысить прибыльности бизнеса' />
			</BlockRTL>
			<div className='divider transparent' />
			<h1>Основатели</h1>
			<div className='divider transparent' id='smallest' />
			<BlockLTR>
				<CardImage
					src='/images/Ilya.png'
					text='Кукуев Илья'
					subtext='СЕО'
					alt=''
				/>
				<CardImage
					src='/images/Alexey.png'
					text='Пак Алексей'
					subtext='СМО'
					alt=''
				/>
				<CardImage
					src='/images/Evgeniy.png'
					text='Лукоев Евгений'
					subtext='ССО'
					alt=''
				/>
			</BlockLTR>
			<div className='divider transparent' id='big' />
			<BlockLTR>
				<CardBigIcon
					icon='arrow_insert'
					text='Наша команда специалистов по AI работает над созданием новых продуктов и улучшением существующих, чтобы обеспечить нашим клиентам наилучший результат. Мы гарантируем высокое качество предоставляемых услуг и индивидуальный подход к каждому клиенту.'
				/>
				<CardExtend>
					<CardModule
						label=''
						text='Мы готовы ответить на все ваши вопросы и предложить наилучшее решение для вашей компании.'
					/>
					<BtnOutnlineIcon name='Заказать' icon='trending_flat' />
				</CardExtend>
			</BlockLTR>
		</>
	)
}
