import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

import { getServerSession } from 'next-auth'
import './globals.css'
import { cn } from '@/lib/utils'
import SessionProvider from '@/components/providers/session-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'

const font = Roboto_Mono({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
	title: 'MindMarket',
	description: 'AI for your sales',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession()
	console.log(session)
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
				<div id='fb-root'></div>
				<script
					async
					defer
					crossOrigin='anonymous'
					src='https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v18.0&appId=993271218405281'
					nonce='OfzZRZxq'
				></script>
				<SessionProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
					>
						<ModalProvider />
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	)
}
