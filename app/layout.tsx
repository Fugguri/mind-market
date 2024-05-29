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
	return (
		<html lang='ru' suppressHydrationWarning>
			<head>
				<meta
					name='facebook-domain-verification'
					content='ritc22cbm7fyzpk62vx0mnfvvmw6xk'
				/>
			</head>
			<body className={cn(font.className, )}>
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
