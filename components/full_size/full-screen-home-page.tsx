// 'use client'
// import { redirect, useRouter } from 'next/navigation'
// import { Button } from '../ui/button'
// const FullScreenHomePage = () => {
// 	const router = useRouter()
// 	const signIn = () => {
// 		router.push(`chats/inbox`)
// 	}
// 	return (
// 		<div className='bg-[#e0e5f4] flex flex-row justify-center w-full'>
// 			<div className='bg-[#e0e5f4] overflow-hidden w-[1920px] h-[10724px] relative'>
// 				{/* main page */}
// 				<div className='absolute w-[2989px] h-[3192px] top-[-886px] left-[-546px]'>
// 					<div className='absolute w-[2971px] h-[2720px] top-[353px] left-[18px] opacity-60'>
// 						<div className='absolute w-[907px] h-[907px] top-[403px] left-0 rounded-[453.5px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 						<div className='absolute w-[907px] h-[907px] top-[1813px] left-[1667px] rounded-[453.5px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(0,132,255)_0%,rgba(0,132,255,0)_100%)]' />
// 						<div className='absolute w-[1310px] h-[1310px] top-0 left-[1661px] rounded-[655px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 					</div>
// 					<div className='h-[1310px] top-0 left-0 absolute w-[2971px] opacity-60'>
// 						<div className='absolute w-[907px] h-[907px] top-[403px] left-0 rounded-[453.5px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 						<div className='absolute w-[1310px] h-[1310px] top-0 left-[1661px] rounded-[655px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 					</div>
// 					<div className='absolute w-[359px] h-[893px] top-[1335px] left-[1983px]'>
// 						<img
// 							className='absolute w-[359px] h-[893px] top-0 left-0 object-cover'
// 							alt='office  worker'
// 							src='Office worker.png'
// 						/>
// 					</div>
// 					<div className='absolute w-[876px] h-[727px] top-[1215px] left-[796px] rotate-[-15.64deg]'>
// 						<div className='relative w-[878px] h-[731px] top-[-2px]'>
// 							<div className='w-[707px] h-[727px] top-[2px] left-0 [background:linear-gradient(180deg,rgb(23.6,41.78,69.06)_0%,rgb(5,21,47)_15.62%,rgb(7,18,45)_75.86%,rgb(2.91,30.28,77.56)_83.38%,rgb(4,9,24)_91.68%,rgb(4,9,24)_100%)] absolute rounded-[38.21px]' />
// 							<div className='w-[711px] h-[731px] top-0 left-[167px] border-4 border-solid border-transparent [border-img:linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0))_1] [background:linear-gradient(180deg,rgb(19.8,19,59)_0%,rgb(21,48,76)_83.17%,rgb(11,55,97)_100%)] absolute rounded-[38.21px]' />
// 						</div>
// 					</div>
// 					<p className="absolute w-[611px] h-[99px] top-[1271px] left-[970px] rotate-[-15.00deg] [font-family:'Audiowide-Regular',Helvetica] font-normal text-transparent text-[96px] tracking-[-2.88px] leading-[96px] whitespace-nowrap">
// 						<span className='text-[#caff33]'>AI</span>
// 						<span className='text-[#0bd31f]'>&nbsp;</span>
// 						<span className='text-white text-[70px] tracking-[-2.10px] leading-[70px]'>
// 							Syndicate
// 						</span>
// 					</p>
// 					<p className="absolute w-[622px] top-[1416px] left-[1014px] rotate-[-16.00deg] [font-family:'Lexend-Regular',Helvetica] font-normal text-white text-[46px] tracking-[-0.92px] leading-[69px]">
// 						Внедряем искусственный интеллект в отделы продаж и клиентского
// 						сервиса
// 					</p>
// 					<div className='absolute w-[307px] h-[307px] top-[1845px] left-[844px] overflow-hidden rotate-[-46.78deg]'>
// 						<img
// 							className='absolute w-[433px] h-[433px] top-[-63px] left-[-63px] rotate-[46.78deg] object-cover'
// 							alt='img'
// 							src='img-7.png'
// 						/>
// 					</div>
// 					<div className='absolute w-[49px] h-[49px] top-[1171px] left-[1433px] rounded-[24.5px] [background:linear-gradient(180deg,rgb(219.3,0,255)_0%,rgb(83,72,215)_100%)]' />
// 					<div className='absolute w-[49px] h-[49px] top-[1156px] left-[1504px] rounded-[24.5px] [background:linear-gradient(180deg,rgb(103.78,6.14,163.62)_0%,rgb(83,72,215)_100%)]' />
// 					<div className='flex w-[1596px] items-center justify-between px-[34px] py-[20px] absolute top-[958px] left-[729px] bg-[#39639280] rounded-[100px] border border-solid border-grey-15'>
// 						<div className='relative w-[158px] h-[40px]'>
// 							<p className="w-[160px] left-[49px] absolute h-[20px] top-[9px] [font-family:'Audiowide-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[-0.60px] leading-[20px]">
// 								<span className='text-[#caff33]'>AI </span>
// 								<span className='text-white'>Syndicate</span>
// 							</p>
// 						</div>
// 						<div className='inline-flex items-center gap-[30px] relative flex-[0_0_auto]'>
// 							<Button
// 								onClick={() => signIn()}
// 								variant='primary'
// 								className='inline-flex items-center gap-[10px] px-[30px] py-[14px] relative flex-[0_0_auto] bg-green-60 rounded-[82px] all-[unset] box-border'
// 							>
// 								<div className="relative w-fit mt-[-1.00px] [font-family:'Lexend-Regular',Helvetica] font-normal text-grey-11 text-[25px] tracking-[0] leading-[37.5px] whitespace-nowrap">
// 									Вход
// 								</div>
// 							</Button>
// 						</div>
// 						<div className='inline-flex items-center gap-[26px] absolute top-[22px] left-[484px]'>
// 							<div className='inline-flex items-center gap-[10px] px-[24px] py-[12px] relative flex-[0_0_auto] bg-grey-15 rounded-[82px] all-[unset] box-border'>
// 								<button className="relative w-fit mt-[-1.00px] [font-family:'Lexend-Regular',Helvetica] font-normal text-absolutewhite text-[25px] tracking-[0] leading-[37.5px] whitespace-nowrap">
// 									О нас
// 								</button>
// 							</div>
// 							<button className="relative w-fit [font-family:'Lexend-Regular',Helvetica] font-normal text-absolutewhite text-[25px] tracking-[0] leading-[37.5px] whitespace-nowrap">
// 								Преимущества
// 							</button>
// 							<button className="relative w-fit [font-family:'Lexend-Regular',Helvetica] font-normal text-absolutewhite text-[25px] tracking-[0] leading-[37.5px] whitespace-nowrap">
// 								Стоимость
// 							</button>
// 							<button className="relative w-fit [font-family:'Lexend-Regular',Helvetica] font-normal text-absolutewhite text-[25px] tracking-[0] leading-[37.5px] whitespace-nowrap">
// 								Контакты
// 							</button>
// 						</div>
// 					</div>
// 					<div className='absolute w-[518px] h-[610px] top-[2582px] left-[714px]'>
// 						<div className='relative w-[514px] h-[610px] bg-[#0000000d] rounded-[24px] justify-center items-center inline-flex'>
// 							<img
// 								className=' absolute top-[100px] w-32 h-32'
// 								src='1f3c5-sportsmedal-01-02-2.png'
// 								alt='medal'
// 							/>

// 							<div className="absolute top-[212px] left-[38px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[48px] tracking-[-1.44px] leading-[48px] whitespace-nowrap">
// 								Лучший продажник
// 							</div>
// 							<p className='absolute w-[414px] top-[274px] left-[42px] font-body font-[number:var(--body-font-weight)] text-[#00000080] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]'>
// 								Найти хорошего менеджера по продажам сложно. Вырастить своего
// 								лучшего сотрудника задача долгая. Благодаря развитию
// 								интернет-торговли спрос на менеджеров вырос
// 							</p>
// 						</div>
// 					</div>
// 					<div className='absolute w-[514px] h-[610px] top-[2582px] left-[1250px] bg-[#0000000d] rounded-[24px]'>
// 						<div className='flex w-[514px] h-[580px] justify-center gap-[16px] p-[50px] relative top-[8px] bg-[#ffffff05] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] flex-col items-center'>
// 							<div className='absolute w-[514px] h-[610px] top-[2582px] left-[1250px] '>
// 								<div className='relative w-[514px] h-[610px] bg-[#0000000d] rounded-[24px] justify-center items-center inline-flex'>
// 									<img
// 										className=' absolute top-[100px] w-32 h-32'
// 										src='brain.png'
// 										alt='brain img'
// 									/>

// 									<div className="absolute top-[212px] left-[38px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[48px] tracking-[-1.44px] leading-[48px] whitespace-nowrap">
// 										Робот — не человек
// 									</div>
// 									<p className='absolute w-[414px] top-[274px] left-[42px] font-body font-[number:var(--body-font-weight)] text-[#00000080] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]'>
// 										Роботы и чат-боты снизили нагрузку на менеджеров при
// 										первичном касании, но только ухудшили пользовательский опыт.
// 										Клиент хочет решать проблему здесь и сейчас с индивидуальным
// 										подходом
// 									</p>
// 								</div>
// 							</div>
// 							<div className='absolute w-[518px] h-[610px] top-[2582px] left-[1786px]'>
// 								<div className='relative w-[514px] h-[610px] bg-[#0000000d] rounded-[24px] justify-center items-center inline-flex'>
// 									<img
// 										className=' absolute top-[100px] w-32 h-32'
// 										src='calendar.png'
// 									/>

// 									<p className='absolute w-[414px] top-[274px] left-[42px] font-body font-[number:var(--body-font-weight)] text-[#00000080] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]'>
// 										Чат-боты не всегда понимают сложные запросы, клиенты часто
// 										требуют вмешательства и обработки со стороны живого
// 										сотрудника. Такая ситуация в итоге приводит к расходу
// 										дополнительных временных и денежных ресурсов, а не их
// 										экономии
// 									</p>
// 									<div className="absolute top-[212px] left-[68px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[48px] tracking-[-1.44px] leading-[48px] whitespace-nowrap">
// 										Время и деньги
// 									</div>
// 								</div>
// 							</div>
// 							<div className='flex flex-col w-[1640px] items-center gap-[15px] absolute top-[2345px] left-[683px]'>
// 								<p className="relative w-[1493px] mt-[-1.00px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[60px] text-center tracking-[-1.80px] leading-[60px]">
// 									Проблемы, с которыми сталкивается каждый
// 								</p>
// 								<p className='relative w-[1715px] ml-[-37.50px] mr-[-37.50px] opacity-[0.66] font-subheading font-[number:var(--subheading-font-weight)] text-black text-[length:var(--subheading-font-size)] text-center tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]'>
// 									Живой менеджер дорогой. Роботы раздражают пользователей
// 								</p>
// 							</div>
// 							<img
// 								className='absolute w-[51px] h-[62px] top-[980px] left-[750px]'
// 								alt='Group'
// 								src='logo.png'
// 							/>
// 							<Button className='absolute w-[349px] h-[104px] top-[1706px] left-[1176px] bg-[#caff33] rounded-[32px] overflow-hidden rotate-[-15.00deg] all-[unset] box-border'>
// 								<div className="absolute w-[285px] h-[10px] top-[46px] left-[32px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[10px]">
// 									Подключить
// 								</div>
// 							</Button>
// 						</div>
// 						{/*  */}
// 						<div className='absolute w-[2976px] h-[6431px] top-[2352px] left-[-509px]'>
// 							<div className='absolute w-[2976px] h-[6431px] top-0 left-0'>
// 								<div className='h-[2438px] top-0 left-[5px] absolute w-[2971px] opacity-60'>
// 									<div className='absolute w-[907px] h-[907px] top-[403px] left-0 rounded-[453.5px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 									<div className='absolute w-[907px] h-[907px] top-[1531px] left-[1208px] rounded-[453.5px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(0,132,255)_0%,rgba(0,132,255,0)_100%)]' />
// 									<div className='absolute w-[1310px] h-[1310px] top-0 left-[1661px] rounded-[655px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 								</div>
// 								<div className='h-[2438px] top-[2908px] left-0 absolute w-[2971px] opacity-60'>
// 									<div className='absolute w-[907px] h-[907px] top-[403px] left-0 rounded-[453.5px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 									<div className='absolute w-[907px] h-[907px] top-[1531px] left-[1208px] rounded-[453.5px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(0,132,255)_0%,rgba(0,132,255,0)_100%)]' />
// 									<div className='absolute w-[1310px] h-[1310px] top-0 left-[1661px] rounded-[655px] blur-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(83,72,215)_0%,rgba(83,72,215,0)_100%)]' />
// 								</div>
// 								<div className='inline-flex gap-[25px] absolute top-[142px] left-[697px] flex-col items-center'>
// 									<p className="relative w-[1538px] mt-[-1.00px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[80px] text-center tracking-[-2.40px] leading-[80px]">
// 										Искусственный интеллект в отделах продаж и клиентского
// 										сервиса
// 									</p>

// 									<p className="relative w-[1126px] [font-family:'Hind-SemiBold',Helvetica] font-semibold text-[#000000a8] text-[48px] text-center tracking-[-1.44px] leading-[60px]">
// 										не требует сна, не жалуется и не ошибается,&nbsp;&nbsp;как
// 										это делают живые люди
// 									</p>
// 									<div className='HealthWorker w-96 h-96 left-[1279px] top-[240px] absolute justify-center items-center inline-flex'>
// 										<img
// 											className='img w-96 h-96'
// 											src='doctor.png'
// 											alt='doc img'
// 										/>
// 									</div>
// 								</div>

// 								<p className="absolute w-[1082px] top-[1021px] left-[628px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[120px] tracking-[-3.60px] leading-[120px]">
// 									Рост конверсии и рост продаж
// 								</p>
// 								<p className="absolute w-[1714px] top-[1316px] left-[628px] [font-family:'Lexend-SemiBold',Helvetica] font-normal text-black text-[42px] tracking-[0] leading-[67.2px]">
// 									<span className='font-semibold'>AI MindMarket</span>
// 									<span className="[font-family:'Lexend-Regular',Helvetica]">
// 										{' '}
// 										интегрируется во все системы по воронке продаж и
// 										обрабатывает заявки лучше живого продавца
// 									</span>
// 								</p>
// 								<div className='inline-flex flex-col items-start gap-[75px] absolute top-[1534px] left-[628px]'>
// 									<div className='inline-flex items-start gap-[24px] relative flex-[0_0_auto]'>
// 										<div className='flex flex-col w-[564px] items-center justify-center gap-[25px] px-[50px] py-0 relative'>
// 											<div className="relative w-fit [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[48px] tracking-[-1.44px] leading-[48px] whitespace-nowrap">
// 												Мессенджеры
// 											</div>
// 											<p className="relative self-stretch opacity-[0.66] [font-family:'Hind-Regular',Helvetica] font-normal text-black text-[30px] text-center tracking-[-0.60px] leading-[45px]">
// 												Интеграция во все основные мессенджеры:
// 												<br />
// 												Whatsapp, Telegram, Viber
// 											</p>
// 										</div>
// 										<div className='flex flex-col w-[564px] items-center justify-center gap-[25px] px-[50px] py-0 relative'>
// 											<img
// 												className='relative w-[128px] h-[128px] object-cover'
// 												alt='img'
// 												src='img-5.png'
// 											/>
// 											<div className="relative w-fit [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[48px] tracking-[-1.44px] leading-[48px] whitespace-nowrap">
// 												Социальные сети
// 											</div>
// 											<p className="relative self-stretch opacity-[0.66] [font-family:'Hind-Regular',Helvetica] font-normal text-black text-[30px] text-center tracking-[-0.60px] leading-[45px]">
// 												Интеграция во все основные социальные сети и площадки:
// 												<br />
// 												Instagram, VK, Avito
// 											</p>
// 										</div>
// 										<div className='flex flex-col w-[564px] items-center justify-center gap-[25px] px-[50px] py-0 relative'>
// 											<div className="relative w-fit [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[48px] tracking-[-1.44px] leading-[48px] whitespace-nowrap">
// 												CRM
// 											</div>
// 											<p className="relative self-stretch opacity-[0.66] [font-family:'Hind-Regular',Helvetica] font-normal text-black text-[30px] text-center tracking-[-0.60px] leading-[45px]">
// 												Интеграция во все основные системы:
// 												<br />
// 												AMO, Bitrix, Jivo
// 											</p>
// 										</div>
// 									</div>
// 								</div>
// 								<div className='absolute w-[564px] h-[960px] top-[2271px] left-[1779px]'>
// 									<div className='inline-flex flex-col h-[960px] items-start gap-[120px] relative'>
// 										<div className='relative w-[564px] h-[186.25px]'>
// 											<div className='flex flex-col w-[564px] h-[186px] items-start justify-center gap-[16px] pl-[50px] pr-0 py-[50px] relative'>
// 												<div className='flex w-[56px] items-start gap-[16px] relative flex-[0_0_auto] mt-[-16.88px] mb-[-16.88px]'>
// 													<div className="relative w-fit mt-[-1.00px] [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-black text-[40px] tracking-[6.00px] leading-[60px] whitespace-nowrap">
// 														⮉
// 													</div>
// 													<div className="relative w-[445px] mt-[-1.00px] mr-[-445.00px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[40px] tracking-[6.00px] leading-[60px]">
// 														РОСТ NPS
// 														<br />
// 														ДО 30%
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 										<div className='flex w-[564px] h-[187px] justify-center gap-[16px] p-[50px] relative flex-col items-start'>
// 											<div className='w-[616px] mt-[-46.50px] mb-[-46.50px] mr-[-152.00px] flex items-start gap-[16px] relative flex-[0_0_auto]'>
// 												<div className="relative w-fit mt-[-1.00px] [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-black text-[40px] tracking-[6.00px] leading-[60px] whitespace-nowrap">
// 													⮉
// 												</div>
// 												<div className="relative flex-1 mt-[-1.00px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[40px] tracking-[6.00px] leading-[60px]">
// 													ПОВЫШЕНИЕ КОНВЕРСИИ
// 													<br />
// 													ДО 50%
// 												</div>
// 											</div>
// 										</div>
// 										<div className='relative w-[564px] h-[186.25px]'>
// 											<div className='flex w-[564px] h-[186px] justify-center gap-[16px] p-[50px] relative flex-col items-start'>
// 												<div className='w-[564px] mt-[-16.88px] mb-[-16.88px] mr-[-100.00px] flex items-start gap-[16px] relative flex-[0_0_auto]'>
// 													<div className="relative w-fit mt-[-1.00px] [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-black text-[40px] tracking-[6.00px] leading-[60px] whitespace-nowrap">
// 														⮉
// 													</div>
// 													<div className="relative flex-1 mt-[-1.00px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[40px] tracking-[6.00px] leading-[60px]">
// 														РОСТ ВЫРУЧКИ
// 														<br />
// 														ДО 30%
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="absolute w-[565px] top-[2270px] left-[628px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[96px] tracking-[-2.88px] leading-[96px]">
// 									Пример работы
// 								</div>
// 								<p className="absolute w-[565px] top-[2570px] left-[633px] [font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[36px] tracking-[0] leading-[57.6px]">
// 									ИИ менеджер отвечает на вопросы клиента по выбору автомобиля
// 									для себя
// 								</p>
// 								<div className='apple-iphone-x-space'>
// 									<div className='overlap-group'>
// 										<div />
// 										<img
// 											className='img'
// 											alt='Apple iphone x space'
// 											src='iphone.png'
// 										/>
// 									</div>
// 								</div>
// 								<img className='img' alt='img' src='screenshot.jpeg' />

// 								<div className='absolute w-[180px] h-[180px] top-[2368px] left-[1638px] overflow-hidden rotate-[14.87deg]'>
// 									<img
// 										className='absolute w-[220px] h-[220px] top-[-20px] left-[-20px] rotate-[-14.87deg] object-cover'
// 										alt='Element fire still'
// 										src='fire.png'
// 									/>
// 								</div>
// 								<div className='absolute w-[180px] h-[180px] top-[2841px] left-[1106px] overflow-hidden rotate-[-15.00deg]'>
// 									<img
// 										className='absolute w-[220px] h-[220px] top-[-20px] left-[-20px] rotate-[15.00deg] object-cover'
// 										alt='img'
// 										src='hands.png'
// 									/>
// 								</div>
// 								<p className="w-[509px] top-[2858px] left-[639px] opacity-[0.66] [font-family:'Hind-Regular',Helvetica] font-normal text-[25px] tracking-[-0.75px] leading-[31.2px] absolute text-black">
// 									Согласно исследованию, проведенному Harvard Business Review,
// 									компании, использующие нейросети в продажах, смогли увеличить
// 									количество лидов более чем на 50%, сократить время звонков на
// 									60-70% и добиться снижения затрат на 40-60%.
// 								</p>
// 								<div className='absolute w-[972px] h-[1080px] top-[3878px] left-[543px] rotate-180 [background:linear-gradient(180deg,rgb(0,132.08,255)_0%,rgb(83,72,215)_100%)]' />
// 								<div className='inline-flex gap-[25px] absolute top-[4096px] left-[633px] flex-col items-start'>
// 									<div className="relative w-[538px] mt-[-1.00px] [font-family:'Lexend-Bold',Helvetica] font-bold text-white text-[70px] tracking-[-2.10px] leading-[70px]">
// 										Преимущества ИИ менеджера
// 									</div>
// 									<p className='relative w-[489px] opacity-[0.66] font-subheading font-[number:var(--subheading-font-weight)] text-white text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]'>
// 										Он не спит, не кушает. Всегда все помнит о вашем продукте
// 										<br />
// 										<br />И главное - никогда не уведет вашего клиента :)
// 									</p>
// 								</div>
// 								<div className='flex flex-col w-[1152px] items-start gap-[25px] absolute top-[3968px] left-[1221px]'>
// 									<div className='relative w-[1152px] h-[270px]'>
// 										<div className='relative h-[270px]'>
// 											<div className='absolute w-[270px] h-[1152px] top-[-441px] left-[441px] bg-[#f6fbe9] rounded-[24px] rotate-[90.00deg] mix-blend-luminosity' />
// 											<div className='inline-flex items-center gap-[24px] absolute top-[50px] left-[72px]'>
// 												<div className='flex flex-col w-[297px] items-start justify-center gap-[10px] relative'>
// 													<p className="relative w-[297px] mt-[-1.00px] [font-family:'Lexend-Medium',Helvetica] font-normal text-black text-[35px] tracking-[-1.05px] leading-[35px]">
// 														<span className='font-medium'>
// 															Улучшение качества сервиса до{' '}
// 														</span>
// 														<span className="[font-family:'Lexend-Bold',Helvetica] font-bold">
// 															30%
// 														</span>
// 													</p>
// 												</div>
// 												<img
// 													className='relative w-px h-[171px] object-cover'
// 													alt='Line'
// 													src='line-15.svg'
// 												/>
// 												<p className="relative w-[655px] [font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														Наш менеджер{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-SemiBold',Helvetica] font-semibold">
// 														всегда вежлив
// 													</span>
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														{' '}
// 														и готов беспрерывно отвечать на вопросы клиента. Он
// 														не умеет материться и не хамит даже случайно.
// 														Система на основе ИИ,{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-SemiBold',Helvetica] font-semibold">
// 														не умеет обманывать клиентов
// 													</span>
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														. Как{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-SemiBold',Helvetica] font-semibold">
// 														настоящий человек
// 													</span>
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														, может ответить на все вопросы по продукту в живом
// 														формате и{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-SemiBold',Helvetica] font-semibold">
// 														дожать до продажи
// 													</span>
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 									<div className='relative w-[1152px] h-[270px]'>
// 										<div className='relative h-[270px]'>
// 											<div className='absolute w-[270px] h-[1152px] top-[-441px] left-[441px] bg-[#f6fbe9] rounded-[24px] rotate-[90.00deg] mix-blend-luminosity' />
// 											<div className='inline-flex items-center gap-[24px] absolute top-[50px] left-[72px]'>
// 												<div className='flex flex-col w-[297px] items-start justify-center gap-[10px] relative'>
// 													<p className="relative w-[297px] mt-[-1.00px] [font-family:'Lexend-Medium',Helvetica] font-normal text-black text-[35px] tracking-[-1.05px] leading-[35px]">
// 														<span className='font-medium'>
// 															Повышение продуктивности
// 															<br />
// 															до{' '}
// 														</span>
// 														<span className="[font-family:'Lexend-Bold',Helvetica] font-bold">
// 															40%
// 														</span>
// 													</p>
// 												</div>
// 												<img
// 													className='relative w-px h-[171px] object-cover'
// 													alt='Line'
// 													src='img.svg'
// 												/>
// 												<p className="relative w-[674px] [font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														Система может обрабатывать{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-SemiBold',Helvetica] font-semibold">
// 														до 10.000 диалогов{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														одновременно. Не нужно нанимать дополнительных
// 														сотрудников - робот справляется с тысячами запросов{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-SemiBold',Helvetica] font-semibold">
// 														в минуту 24/7, 365 дней в году
// 													</span>
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 									<div className='relative w-[1152px] h-[270px]'>
// 										<div className='relative h-[270px]'>
// 											<div className='absolute w-[270px] h-[1152px] top-[-441px] left-[441px] bg-[#f6fbe9] rounded-[24px] rotate-[90.00deg] mix-blend-luminosity' />
// 											<div className='inline-flex items-center gap-[24px] absolute top-[50px] left-[72px]'>
// 												<div className='flex flex-col w-[297px] items-start justify-center gap-[10px] relative'>
// 													<p className="relative w-[297px] mt-[-1.00px] [font-family:'Lexend-Medium',Helvetica] font-normal text-black text-[35px] tracking-[-1.05px] leading-[35px]">
// 														<span className='font-medium'>
// 															Время обработки клиентов быстрее
// 														</span>
// 														<span className="[font-family:'Lexend-Bold',Helvetica] font-bold">
// 															&nbsp;
// 														</span>
// 														<span className='font-medium'>до </span>
// 														<span className="[font-family:'Lexend-Bold',Helvetica] font-bold">
// 															60%
// 														</span>
// 													</p>
// 												</div>
// 												<img
// 													className='relative w-px h-[171px] object-cover'
// 													alt='Line'
// 													src='line-15-2.svg'
// 												/>
// 												<p className="relative w-[668px] [font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														Менеджер повышает конверсию отдела продаж за счет
// 														скорости обработки заявок меньше чем за{' '}
// 													</span>
// 													<span className="[font-family:'Lexend-SemiBold',Helvetica] font-semibold">
// 														1 минуту
// 													</span>
// 													<span className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black text-[21px] tracking-[-0.42px] leading-[26.2px]">
// 														, таким образом уменьшаем вероятность ухода клиентов
// 														в молчание или к конкурентам
// 													</span>
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className='absolute w-[257px] h-[257px] top-[3855px] left-[543px] rotate-180'>
// 									<img
// 										className='absolute w-[257px] h-[257px] top-0 left-0 -rotate-180 object-cover'
// 										alt='img'
// 										src='img-13.png'
// 									/>
// 								</div>
// 								<div className='absolute w-[495px] h-[1150px] top-[5276px] left-[574px] bg-[#f6fbe9] rounded-[40px]' />
// 								<div className='absolute w-[495px] h-[1150px] top-[5281px] left-[1174px] bg-[#f6fbe9] rounded-[40px]' />
// 								<div className='absolute w-[326px] h-[73px] top-[5324px] left-[655px] bg-[#4c4dda] rounded-[40px]' />
// 								<div className='absolute w-[325px] h-[110px] top-[5303px] left-[1255px] bg-[#4c4dda] rounded-[40px]' />
// 								<div className='absolute w-[413px] h-[136px] top-[6260px] left-[618px] rounded-[40px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgba(222.06,86.05,200.3,0.9)_100%)]' />
// 								<div className='absolute w-[412px] h-[136px] top-[6265px] left-[1218px] rounded-[40px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgba(222.06,86.05,200.3,0.9)_100%)]' />
// 								<div className='absolute w-[495px] h-[1153px] top-[5273px] left-[1853px] rounded-[40px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgba(222.06,86.05,200.3,0.9)_100%)]' />
// 								<img
// 									className='absolute w-[413px] h-[131px] top-[5554px] left-[618px]'
// 									alt='Rectangle'
// 									src='rectangle-28419.svg'
// 								/>
// 								<img
// 									className='absolute w-[414px] h-[156px] top-[5560px] left-[1218px]'
// 									alt='Rectangle'
// 									src='rectangle-28424.svg'
// 								/>
// 								<img
// 									className='absolute w-[414px] h-[133px] top-[5742px] left-[1218px]'
// 									alt='Rectangle'
// 									src='rectangle-28425.svg'
// 								/>
// 								<img
// 									className='absolute w-[413px] h-[133px] top-[5736px] left-[618px]'
// 									alt='Rectangle'
// 									src='rectangle-28420.svg'
// 								/>
// 								<div className="absolute w-[186px] top-[5340px] left-[729px] [font-family:'Hind-Bold',Helvetica] font-bold text-white text-[38px] tracking-[-1.14px] leading-[38px] whitespace-nowrap">
// 									1-й месяц
// 								</div>
// 								<div className='absolute w-[325px] h-[73px] top-[5321px] left-[1936px] bg-[#f6fbe9] rounded-[40px]' />
// 								<div className="absolute w-[191px] top-[5338px] left-[2010px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#4c4dda] text-[38px] tracking-[-1.14px] leading-[38px] whitespace-nowrap">
// 									Ежегодно
// 								</div>
// 								<div className="absolute w-[190px] top-[5320px] left-[1326px] [font-family:'Hind-Bold',Helvetica] font-bold text-white text-[38px] tracking-[-1.14px] leading-[38px]">
// 									2-й месяц
// 									<br />и далее
// 								</div>
// 								<p className="absolute top-[6297px] left-[721px] [font-family:'Hind-Bold',Helvetica] font-normal text-white text-[60px] text-center tracking-[-1.80px] leading-[60px] whitespace-nowrap">
// 									<span className='font-bold'>₽75 000</span>
// 								</p>
// 								<p className="absolute w-[331px] top-[6294px] left-[1262px] [font-family:'Hind-Bold',Helvetica] font-normal text-white text-[60px] text-center tracking-[-1.80px] leading-[60px] whitespace-nowrap">
// 									<span className='font-bold'>₽60 000</span>
// 									<span className='font-bold text-[70px] tracking-[-2.10px] leading-[70px]'>
// 										&nbsp;
// 									</span>
// 									<span className='font-bold text-[30px] tracking-[-0.90px] leading-[30px]'>
// 										/ мес.
// 									</span>
// 								</p>
// 								<div className='absolute w-[413px] h-[136px] top-[6264px] left-[1898px] bg-[#f6fbe9] rounded-[40px]' />
// 								<p className="absolute w-[315px] top-[6276px] left-[1949px] [font-family:'Hind-Bold',Helvetica] font-normal text-[#4c4dda] text-[44px] tracking-[-1.32px] leading-[44px]">
// 									<span className='font-bold'>&nbsp;</span>
// 									<span className='font-bold text-[38px] tracking-[-1.14px] leading-[38px]'>
// 										₽735 000
// 										<br />
// 									</span>
// 									<span className='font-bold text-[60px] tracking-[-1.80px] leading-[60px]'>
// 										₽685 000{' '}
// 									</span>
// 									<span className='font-bold text-[30px] tracking-[-0.90px] leading-[30px]'>
// 										/ год
// 									</span>
// 								</p>
// 								<div className="absolute w-[328px] top-[5446px] left-[658px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgb(224,103,204)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hind-Bold',Helvetica] font-bold text-transparent text-[38px] text-center tracking-[-1.14px] leading-[38px]">
// 									Внедрение
// 									<br />
// 									________________
// 								</div>
// 								<div className="absolute w-[328px] top-[5460px] left-[1941px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#f6fbe9] text-[38px] text-center tracking-[-1.14px] leading-[38px]">
// 									Внедрение
// 									<br />
// 									________________
// 								</div>
// 								<div className="absolute w-[327px] top-[6090px] left-[666px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgb(224,103,204)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hind-Bold',Helvetica] font-bold text-transparent text-[38px] text-center tracking-[-1.14px] leading-[38px]">
// 									<br />
// 									Сопровождение
// 									<br />
// 									________________
// 								</div>
// 								<div className="absolute w-[335px] top-[5949px] left-[1254px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgb(224,103,204)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hind-Bold',Helvetica] font-bold text-transparent text-[44px] text-center tracking-[-1.32px] leading-[44px]">
// 									2 000
// 									<br />
// 									диалогов включительно
// 								</div>
// 								<div className="absolute w-[327px] top-[5411px] left-[1258px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgb(224,103,204)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hind-Bold',Helvetica] font-bold text-transparent text-[38px] text-center tracking-[-1.14px] leading-[38px]">
// 									<br />
// 									Сопровождение
// 									<br />
// 									________________
// 								</div>
// 								<div className="absolute w-[63px] top-[6016px] left-[798px] [background:linear-gradient(180deg,rgb(76,77,218)_0%,rgb(224,103,204)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hind-Bold',Helvetica] font-bold text-transparent text-[100px] text-center tracking-[-3.00px] leading-[100px] whitespace-nowrap">
// 									+
// 								</div>
// 								<div className="absolute w-[328px] top-[5622px] left-[1935px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#f6fbe9] text-[38px] text-center tracking-[-1.14px] leading-[38px]">
// 									<br />
// 									Сопровождение
// 									<br />
// 									________________
// 								</div>
// 								<div className="absolute w-[64px] top-[5547px] left-[2067px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#f6fbe9] text-[100px] text-center tracking-[-3.00px] leading-[100px] whitespace-nowrap">
// 									+
// 								</div>
// 								<div className="absolute w-[434px] top-[5796px] left-[1882px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#f6fbe9] text-[38px] text-center tracking-[-1.14px] leading-[38px]">
// 									<br />
// 									500
// 									<br />
// 									Бесплатных диалогов
// 								</div>
// 								<div className="absolute w-[64px] top-[5748px] left-[2067px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#f6fbe9] text-[100px] text-center tracking-[-3.00px] leading-[100px] whitespace-nowrap">
// 									+
// 								</div>
// 								<p className="absolute w-[478px] top-[6021px] left-[1867px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#f6fbe9] text-[38px] text-center tracking-[-1.14px] leading-[38px]">
// 									<br />
// 									Эксклюзивные условия на новые продукты
// 								</p>
// 								<div className="absolute w-[59px] top-[5949px] left-[2076px] [font-family:'Hind-Bold',Helvetica] font-bold text-[#f6fbe9] text-[100px] text-center tracking-[-3.00px] leading-[100px] whitespace-nowrap">
// 									+
// 								</div>
// 								<p className="w-[347px] top-[5579px] left-[655px] [font-family:'Hind-Bold',Helvetica] font-bold text-[27px] text-center tracking-[-0.81px] leading-[27px] absolute text-black">
// 									Подключение аккаунтов: Telegram, Instagram, WhatsApp, Avito
// 								</p>
// 								<p className="absolute w-[345px] top-[5582px] left-[1255px] [font-family:'Hind-Bold',Helvetica] font-bold text-black text-[27px] text-center tracking-[-0.81px] leading-[27px]">
// 									Сопровождение и постоянная проработка системы, исходя из
// 									обновляющихся данных
// 								</p>
// 								<div className="absolute w-[345px] top-[5781px] left-[1255px] [font-family:'Hind-Bold',Helvetica] font-bold text-black text-[27px] text-center tracking-[-0.81px] leading-[27px]">
// 									Постоянное техническое обслуживание
// 								</div>
// 								<p className="w-[328px] top-[5759px] left-[661px] [font-family:'Hind-Bold',Helvetica] font-bold text-[27px] text-center tracking-[-0.81px] leading-[27px] absolute text-black">
// 									Возможно подключение к CRM: Bitrix, Jivo, AMO
// 								</p>
// 								<p className="absolute w-[337px] top-[5911px] left-[661px] [font-family:'Hind-Regular',Helvetica] font-normal text-[#00000080] text-[20px] tracking-[-0.40px] leading-[30px]">
// 									На дополнительной договорной основе возможно подключение иных
// 									площадок
// 								</p>
// 								<p className="absolute w-[375px] top-[6107px] left-[1255px] [font-family:'Hind-Regular',Helvetica] font-normal text-[#00000080] text-[24px] tracking-[-0.48px] leading-[36px]">
// 									На дополнительной договорной основе возможно подключение более
// 									2 000 диалогов
// 								</p>
// 								<div className='absolute w-[119px] h-[119px] top-[5308px] left-[2201px] overflow-hidden rotate-[20.45deg]'>
// 									<img
// 										className='absolute w-[154px] h-[154px] top-[-17px] left-[-17px] rotate-[-20.45deg] object-cover'
// 										alt='Element fire still'
// 										src='1f525-fire-v13-still-1-2.png'
// 									/>
// 								</div>
// 								<div className="absolute top-[5134px] left-[572px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[70px] tracking-[-2.10px] leading-[70px] whitespace-nowrap">
// 									Ежемесячный тариф
// 								</div>
// 								<div className="absolute top-[5137px] left-[1853px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[70px] tracking-[-2.10px] leading-[70px] whitespace-nowrap">
// 									Годовой тариф
// 								</div>
// 								<div className='absolute w-[115px] h-[115px] top-[5329px] left-[1515px] overflow-hidden rotate-[24.25deg]'>
// 									<img
// 										className='absolute w-[152px] h-[152px] top-[-19px] left-[-19px] rotate-[-24.25deg] object-cover'
// 										alt='img'
// 										src='img-1.png'
// 									/>
// 								</div>
// 								<img
// 									className='absolute w-[163px] h-[5px] top-[6301px] left-[1952px]'
// 									alt='Line'
// 									src='line-16.svg'
// 								/>
// 								<div className='absolute w-[155px] h-[127px] top-[5293px] left-[896px] overflow-hidden rotate-[15.63deg]'>
// 									<img
// 										className='absolute w-[184px] h-[164px] top-[-19px] left-[-14px] rotate-[-15.63deg] object-cover'
// 										alt='Element highvoltage'
// 										src='26a1-highvoltage-2.png'
// 									/>
// 								</div>
// 								<Button className='absolute w-[462px] h-[137px] top-[616px] left-[1238px] bg-[#e0e5f4] rounded-[32px] overflow-hidden shadow-[-10px_-10px_20px_#ffffff,10px_10px_20px_#aaaacc80,5px_5px_10px_#aaaacc40,-5px_-5px_10px_#ffffff80]'>
// 									<div className="absolute w-[398px] h-[10px] top-[63px] left-[32px] [font-family:'Lexend-Bold',Helvetica] font-bold text-[#7878aa] text-[40px] text-center tracking-[0] leading-[10px]">
// 										Подключить
// 									</div>
// 								</Button>
// 								<Button className='absolute w-[462px] h-[137px] top-[3512px] left-[1238px] bg-[#e0e5f4] rounded-[32px] overflow-hidden shadow-[-10px_-10px_20px_#ffffff,10px_10px_20px_#aaaacc80,5px_5px_10px_#aaaacc40,-5px_-5px_10px_#ffffff80]'>
// 									<div className="absolute w-[398px] h-[10px] top-[63px] left-[32px] [font-family:'Lexend-Bold',Helvetica] font-bold text-[#7878aa] text-[40px] text-center tracking-[0] leading-[10px]">
// 										Подключить
// 									</div>
// 								</Button>
// 							</div>
// 							<img
// 								className='absolute w-[80px] h-[66px] top-[5802px] left-[1086px]'
// 								alt='Arrow'
// 								src='arrow-8.svg'
// 							/>
// 						</div>
// 						{/* footer */}
// 						<div className='absolute w-[1920px] h-[451px] top-[10273px] left-[-3px]'>
// 							<div className='flex flex-col w-[1920px] items-center gap-[50px] pt-[100px] pb-[50px] px-[162px] absolute top-0 left-0 [background:linear-gradient(180deg,rgba(83,72,215,0)_0%,rgba(83,72,215,0)_30.73%,rgba(83,72,215,0.24)_90.1%)]'>
// 								<div className='flex flex-col items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]'>
// 									<div className='relative w-[155.83px] h-[40px]'>
// 										<p className="w-[136px] left-[47px] absolute h-[20px] top-[9px] [font-family:'Audiowide-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[-0.60px] leading-[20px]">
// 											<span className='text-[#caff33]'>AI </span>
// 											<span className='text-white'>Syndicate</span>
// 										</p>
// 									</div>
// 									<div className='inline-flex items-center gap-[26px] relative flex-[0_0_auto]'>
// 										<div className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black relative w-fit mt-[-1.00px] text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
// 											О нас
// 										</div>
// 										<div className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black relative w-fit mt-[-1.00px] text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
// 											Преимущества
// 										</div>
// 										<div className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black relative w-fit mt-[-1.00px] text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
// 											Стоимость
// 										</div>
// 										<div className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black relative w-fit mt-[-1.00px] text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
// 											Контакты
// 										</div>
// 									</div>
// 								</div>
// 								<img
// 									className='relative self-stretch w-full h-px object-cover'
// 									alt='Line'
// 									src='line.svg'
// 								/>
// 								<div className='flex items-center justify-between pl-[16px] pr-[30px] py-[16px] relative self-stretch w-full flex-[0_0_auto] bg-grey-10 rounded-[100px] border border-solid border-grey-15'>
// 									<div className='inline-flex items-start gap-[14px] relative flex-[0_0_auto]'></div>
// 									<p className="relative w-fit [font-family:'Lexend-Light',Helvetica] font-light text-grey-shades70 text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
// 										AI Syndicate All Rights Reserved
// 									</p>
// 									<div className='inline-flex items-center gap-[12px] relative flex-[0_0_auto]'>
// 										<div className="[font-family:'Lexend-Light',Helvetica] font-light text-grey-shades70 relative w-fit mt-[-1.00px] text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
// 											Privacy Policy
// 										</div>
// 										<img
// 											className='relative self-stretch w-px object-cover'
// 											alt='Line'
// 											src='line-2.svg'
// 										/>
// 										<div className="[font-family:'Lexend-Light',Helvetica] font-light text-grey-shades70 relative w-fit mt-[-1.00px] text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
// 											Terms of Service
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<img
// 								className='absolute w-[51px] h-[62px] top-[89px] left-[868px]'
// 								alt='Group'
// 								src='logo.png'
// 							/>
// 						</div>
// 						{/* contact form */}
// 						<div className='absolute w-[1921px] h-[1060px] top-[9213px] left-0 bg-[#e0e5f4] overflow-hidden'>
// 							<p className="absolute w-[1631px] top-[56px] left-[120px] [font-family:'Lexend-Bold',Helvetica] font-bold text-black text-[70px] tracking-[-2.10px] leading-[70px]">
// 								Предлагаем провести созвон и разработать демо-версию на данных
// 								вашего бизнеса
// 							</p>
// 							<div className='absolute w-[597px] h-[724px] top-[266px] left-[-60px]'>
// 								<img
// 									className='absolute w-[472px] h-[472px] top-0 left-[125px] object-cover'
// 									alt='img'
// 									src='img-28.png'
// 								/>
// 								<div className='absolute w-[371px] h-[371px] top-[315px] left-[37px] overflow-hidden rotate-[-13.10deg]'>
// 									<img
// 										className='absolute w-[386px] h-[446px] top-[-30px] left-[22px] rotate-[13.10deg] object-cover'
// 										alt='Palmuphand'
// 										src='palmuphand-1024px-01-06-yellow.png'
// 									/>
// 								</div>
// 							</div>
// 							<Button className='absolute w-[303px] h-[89px] top-[901px] left-[907px] bg-[#e0e5f4] rounded-[32px] overflow-hidden shadow-[-10px_-10px_20px_#ffffff,10px_10px_20px_#aaaacc80,5px_5px_10px_#aaaacc40,-5px_-5px_10px_#ffffff80] all-[unset] box-border'>
// 								<div className="absolute w-[239px] h-[15px] top-[37px] left-[32px] [font-family:'Lexend-Bold',Helvetica] font-bold text-[#7878aa] text-[40px] text-center tracking-[0] leading-[15px]">
// 									Отправить
// 								</div>
// 							</Button>
// 							<div className='absolute w-[921px] h-[107px] top-[276px] left-[586px] bg-[#f5f5fa] rounded-[40px] overflow-hidden shadow-inner-shadow-2'>
// 								<div className="absolute w-[825px] h-[40px] top-[33px] left-[32px] opacity-60 [font-family:'Lexend-Regular',Helvetica] font-normal text-[#7878aa] text-[40px] tracking-[0] leading-[40px]">
// 									Имя
// 								</div>
// 							</div>
// 							<div className='top-[415px] absolute w-[921px] h-[107px] left-[586px] bg-[#f5f5fa] rounded-[40px] overflow-hidden shadow-inner-shadow-2'>
// 								<div className="absolute w-[825px] h-[40px] top-[33px] left-[32px] opacity-60 [font-family:'Lexend-Regular',Helvetica] font-normal text-[#7878aa] text-[15px] tracking-[0] leading-[40px]">
// 									Фамилия
// 								</div>
// 							</div>
// 							<div className='top-[554px] absolute w-[921px] h-[107px] left-[586px] bg-[#f5f5fa] rounded-[40px] overflow-hidden shadow-inner-shadow-2'>
// 								<div className="absolute w-[825px] h-[40px] top-[33px] left-[32px] opacity-60 [font-family:'Lexend-Regular',Helvetica] font-normal text-[#7878aa] text-[15px] tracking-[0] leading-[40px]">
// 									Почта
// 								</div>
// 							</div>
// 							<div className='top-[693px] absolute w-[921px] h-[107px] left-[586px] bg-[#f5f5fa] rounded-[40px] overflow-hidden shadow-inner-shadow-2'>
// 								<p className="absolute w-[825px] h-[40px] top-[33px] left-[32px] opacity-60 [font-family:'Lexend-Regular',Helvetica] font-normal text-[#7878aa] text-[40px] tracking-[0] leading-[40px]">
// 									+7 (999) 999 99 99
// 								</p>
// 							</div>
// 						</div>
// 						<Button className='absolute w-[462px] h-[137px] top-[8979px] left-[725px] bg-[#e0e5f4] rounded-[32px] overflow-hidden shadow-[-10px_-10px_20px_#ffffff,10px_10px_20px_#aaaacc80,5px_5px_10px_#aaaacc40,-5px_-5px_10px_#ffffff80]'>
// 							<div className="absolute w-[398px] h-[10px] top-[63px] left-[32px] [font-family:'Lexend-Bold',Helvetica] font-bold text-[#7878aa] text-[40px] text-center tracking-[0] leading-[10px]">
// 								Подключить
// 							</div>
// 						</Button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default FullScreenHomePage
