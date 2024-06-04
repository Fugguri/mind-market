// "use client"
import { Pane, PanesContainer } from '@/components/crm/panes'
import { PaneTitle } from '@/components/crm/pane-content'
import  * as p from '@/components/hooks/userInfo'
// import { Avatar } from '@nextui-org/react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { BtnOutlineIcon } from '@/components/buttons'
import { useModal } from '@/hooks/use-modal-store'
import { redirect } from 'next/navigation'
import { currentProfile } from '@/lib/current-profile'

export default async function Page() {
	const profile = await currentProfile()
	if (!profile) {
		return redirect('/api/auth/signin')
	}
	// const {onOpen} = useModal()

	return (
		<>
			<Pane width='45%' height='unset' direction='column' justify='unset'>
				<PaneTitle>Основная информация</PaneTitle>
				<div className='flex flex-col gap-[2rem] items-center  h-[100%]'>
					<div className='flex justify-center'>
					<Avatar className='w-[12rem] h-[12rem] border-white border-[6px]'>
						<AvatarImage  src={p.UserPicture} />
						<AvatarFallback>Image</AvatarFallback>
					</Avatar>

					</div>

					{/* <div className='w-[20rem]'>
						<BtnOutlineIcon onClick={()=> onOpen("editProfile")} text='Редактировать профиль' type='button' />
					</div> */}
					{/* TODO FIX THIS LOL */}
					<div className='w-[100%] text-xl'>
						<p
							className='flex flex-row justify-between border-b-2 py-[.8rem]'
							style={{
								borderColor: 'color-mix(in srgb, white, transparent 60%)',
							}}
						>
							ФИО <span>{profile.name}</span>
						</p>
						<p
							className='flex flex-row justify-between border-b-2 py-[.8rem]'
							style={{
								borderColor: 'color-mix(in srgb, white, transparent 60%)',
							}}
						>
							Телефон <span>{profile.phone_number}</span>
						</p>
						<p
							className='flex flex-row justify-between border-b-2 py-[.8rem]'
							style={{
								borderColor: 'color-mix(in srgb, white, transparent 60%)',
							}}
						>
							Почта <span>{profile.email}</span>
						</p>
						<p
							className='flex flex-row justify-between border-b-2 py-[.8rem]'
							style={{
								borderColor: 'color-mix(in srgb, white, transparent 60%)',
							}}
						>
							Адрес <span>Адрес</span>
						</p>
						<p
							className='flex flex-row justify-between border-b-2 py-[.8rem]'
							style={{
								borderColor: 'color-mix(in srgb, white, transparent 60%)',
							}}
						>
							Статус <span>{profile.job_title}</span>
						</p>
						<p
							className='flex flex-row justify-between border-b-2 py-[.8rem]'
							style={{
								borderColor: 'color-mix(in srgb, white, transparent 60%)',
							}}
						>
							Название компании <span>{profile.companyName}</span>
						</p>
					</div>
					{/* <div className='w-[20rem]'>
						<BtnOutlineIcon text='Удалить профиль' type='button' />
					</div> */}
				</div>
			</Pane>

			<PanesContainer
				width='55%'
				height='unset'
				direction='column'
				justify='unset'
			>
				<Pane width='unset' height='100%' direction='column' justify='unset'>
					<div className='flex flex-row gap-[4rem]'>
						<div className='w-[50%]'>
							<PaneTitle>Тариф</PaneTitle>
							<h3>Аврора</h3>
							<span>активен</span>
							<p>
								Этот тариф предназначен для предпринимателей, желающих внедрить
								высокотехнологичные решения и оптимизировать бизнес-процессы с
								помощью искусственного интеллекта. Пакет включает в себя
								персонализированное консультирование, разработку индивидуальных
								AI-решений, и техническую поддержку.
							</p>
							<form action='' target='_self'>
								<button type='submit'>Посмотреть другие тарифы</button>
							</form>
						</div>
						<div className='w-[50%]'>
							<h4>
								Годовая подписка <span className='skidka'>25%</span>
							</h4>
							<div>
								<p>
									45.000,00 ₽ <span>60.000,00 ₽</span>
								</p>
								<p>спишутся 17 ноября, 2025 года</p>
							</div>
							<form action='' target='_self'>
								<button type='submit'>Продлить подписку</button>
							</form>
							<form action='' target='_self'>
								<button type='submit'>Приостановить</button>
							</form>
						</div>
					</div>
				</Pane>

				<Pane width='unset' height='100%' direction='column' justify='unset'>
					<div className='flex flex-row gap-[4rem]'>
						<div className='w-[50%]'>
							<PaneTitle>Ассистенты</PaneTitle>
							<p>
								Благодаря ИИ на основе машинного обучения и анализа данных
								компании могут прогнозировать тренды, оптимизировать процессы,
								улучшать услуги и делать предиктивные решения.
							</p>
						</div>
						<div className='w-[50%]'>
							<h4>
								Количество<span>16</span>
							</h4>
							<form action='' target='_self'>
								<button type='submit'>Продлить подписку</button>
							</form>
						</div>
					</div>
				</Pane>

				<Pane width='unset' height='100%' direction='column' justify='unset'>
					<div className='flex flex-row gap-[4rem]'>
						<div className='w-[50%]'>
							<PaneTitle>Интеграции</PaneTitle>
							<input type='text' placeholder='API KEY' required />
							<label>
								<br />
								Введите API_KEY для интеграции по API
							</label>
							<p>
								ИИ в работе позволяет создавать персонализированные продукты для
								клиентов.
							</p>
						</div>
						<div className='w-[50%]'>
							<h4>
								Количество<span>16</span>
							</h4>
							<form action='' target='_self'>
								<button type='submit'>Перейте к интеграции</button>
							</form>
						</div>
					</div>
				</Pane>
			</PanesContainer>
		</>
	)
}
