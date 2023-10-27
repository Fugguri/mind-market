import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

import { getServerSession } from 'next-auth'
import './globals.css'
import { cn } from '@/lib/utils'
import SessionProvider from '@/components/providers/session-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import Script from 'next/script'

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
				<script
					async
					defer
					crossOrigin='anonymous'
					src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=ВАШ_APP_ID&autoLogAppEvents=1'
					nonce='ВАШ_NONCE'
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
