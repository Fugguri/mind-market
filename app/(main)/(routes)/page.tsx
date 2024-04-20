import { HeadModuleLTR } from '@/components/headings'
import {
	QuestionCard,
	CardOutline,
	CardModuleLabel,
	CardModuleDesc,
	CardExtend,
	CardExtendOutline,
	CardModuleLinkDesk,
	FilledCardRect,
	FilledCardRectR,
	FilledCardCircle,
	CardQuote,
} from '@/components/cards'
import { BtnOutnlineIcon } from '@/components/buttons'
import { BlockLTRTop, BlockLTR, BlockRTL } from '@/components/blocks'
import styles from '../styles/MainPage.module.css'
import YouTubeVideo from '@/components/youtubeVideo'

export default function IndexPage() {
	return (
		<>
			<HeadModuleLTR
				h1='Искусственный интеллект'
				h2='повышает вашу выручку'
			></HeadModuleLTR>
			<br></br>
			<div className='divider transparent'></div>

			<BlockRTL>
				<div className='verticalContainer'>
					<CardQuote text='Рост конверсии в продажи от 50%! Рост эффективности сотрудников в 2 раза! Автоматизация рутинных процессов!' />
					<div className='divider transparent' id='smallest' />
					<BtnOutnlineIcon icon='trending_flat' name='Привкоснуться к ИИ' />
					<div className='divider transparent' id='smallest' />
					<h4>*Протестируйте бесплатно</h4>
				</div>
			</BlockRTL>

			<h1>Мы помогаем клиентам</h1>
			<div className='divider transparent' id='small'></div>
			<BlockLTRTop>
				<div className={styles.verticalContainer}>
					<CardOutline
						label='Обучающие курсы'
						text='Обучаем персонал компаний как пользоваться программами на искусственном интеллекте. Объясняем логику работы ИИ и помогаем внедрять инструменты для автоматизации рутинных задач.'
					/>
					<CardOutline
						label='Инновационные разработки'
						text='Разрабатываем уникальные решения для сложных бизнес-процессов. Создаём программы и платформы, обеспечивающих цифровую трансформацию даже сложных с точки зрения процессов компаний.'
					/>
					<CardOutline
						label='Решения для частных лиц'
						text='Внедряем простые и легко используемые инструменты на основе искусственного интеллекта для физических лиц или малого бизнеса. Поможем без больших вложений снять рутину с вас.'
					/>
				</div>
				<div className={styles.verticalContainer}>
					<CardExtendOutline>
						<CardModuleLabel label='ИИ менеджер по продажам' />
						<CardModuleDesc>
							<ul>
								<li>
									Общаться с клиентами и закрывать на продажу или другую задачу
								</li>
								<li>
									Внедряться в соц сети, мессенджеры, на сайт и везде где идет
									письменное общение с клиентом
								</li>
								<li>ИИ менеджер общается 24/7</li>
								<li>Отвечает в течении 30 секунд</li>
								<li>Ведет общение как живой человек</li>
								<li>Доводит до сделки</li>
								<li>
									Глубокое обучение, обучается под любую компанию и услугу
									индивидуально
								</li>
								<li>
									Анализ клиента (теплый, холодный) и сбор инфы при общении
								</li>
								<li>Подключение к базе даных</li>
								<li>
									ИИ рассылка — самостоятельно напишет по вашей базе контактов
								</li>
							</ul>
						</CardModuleDesc>
					</CardExtendOutline>
					<CardExtend>
						<CardModuleLinkDesk
							link=''
							text='Эти услуги помогут компаниям и частным лицам стать более эффективными, инновационными и успешными при помощи интеллекта и инноваций.'
						/>
					</CardExtend>
				</div>
				<div className={styles.verticalContainer}>
					<CardOutline
						label='CRM на основе ИИ'
						text='Подключаем собственную CRM систему для оптимизации процессов в едином окне. Первая CRM, которая сама заполняет информацию. Вы просто следите за процессами.'
					/>
					<CardOutline
						label='ИИ в бизнес-процессах'
						text='Внедряем рабочие системы или разрабатываем решения индивидуально под каждый бизнес, оптимизируя рабочие процессы компаний с использованием технологий искусственного интеллекта.'
					/>
				</div>
			</BlockLTRTop>
			<div className='divider transparent' id='big'></div>
			<h1>Особенности сервиса</h1>
			{/* <div className="divider transparent" id="smallest"></div>
      <YouTubeVideo
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=n76uyWRG37oz4rrB"
        height="720em"
        width="100%"
      /> */}
			<div className='divider transparent' id='big'></div>
			<h1>Часто задаваемые вопросы</h1>
			<div className='divider transparent' id='smallest'></div>
			<QuestionCard
				num='01'
				label='Что такое искусственный интеллект?'
				ans='ИИ — это математическая или компьютерная модель, которая имитирует человеческое мышление и способна обучаться на основе данных.'
			/>
			<QuestionCard
				num='02'
				label='Как искусственный интеллект может мне помочь?'
				ans='Он способен быстро обрабатывать большие объёмы данных, находить в них закономерности и строить на их основе прогнозы. Это поможет вам принимать взвешенные решения и оптимизировать процессы, что повысит эффективность вашего бизнеса.'
			/>
			<QuestionCard
				num='03'
				label='Что входит в консультацию по искусственному интеллекту?'
				ans='Консультация по искусственному интеллекту может включать в себя:
        анализ бизнес-процессов компании и выявление областей, где внедрение искусственного интеллекта может повысить эффективность;
        подбор подходящих моделей искусственного интеллекта для конкретных задач компании;
        разработку стратегии внедрения искусственного интеллекта;
        обучение сотрудников работе с новыми технологиями.'
			/>
			<QuestionCard
				num='04'
				label='Как проходит обучение сотрудников компаний?'
				ans='Обучение включает в себя теоретические основы искусственного интеллекта, практические занятия по работе с конкретными моделями и инструментами, а также разбор реальных кейсов внедрения искусственного интеллекта в бизнес.'
			/>
			<QuestionCard
				num='05'
				label='Почему компании, которые не используют ИИ останутся в прошлом?'
				ans='Компании, которые не используют искусственный интеллект, могут остаться в прошлом, потому что внедрение ИИ может дать им конкурентное преимущество за счёт оптимизации процессов, улучшения качества продукции и услуг, а также снижения издержек.'
			/>
			<div className='divider transparent' id='big' />
			<h1>Наши технологические инновации</h1>
			<div className='divider transparent' id='small' />
			<div className={styles.middleContainer}>
				<FilledCardRect
					icon='query_stats'
					text='Разработка алгоритмов по быстрому анализу рынка для базового изучения новых направлений для бизнеса'
				/>
				<FilledCardRectR
					icon='smart_toy'
					text='Разработка робота для автоматизации входящих заявок. Повышает эффективность отдела продаж и увеличивает доходимость клиентов.'
				/>
				<FilledCardCircle icon='book' />
			</div>
		</>
	)
}
