import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'

const font = Open_Sans({ subsets: ['cyrillic','latin'] })

export const metadata: Metadata = {
  title: 'mind-market',
  description: 'AI for your sales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider  publishableKey='pk_test_dG9waWNhbC1hbGJhY29yZS03My5jbGVyay5hY2NvdW50cy5kZXYk'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                >
      <html lang="ru" suppressHydrationWarning>
        <body className={cn(
          font.className,                                                                                                         
          "bg-white dark:bg-[#313338]"
          )}>
          <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
          >
          <ModalProvider/>
          {children}

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>

  )
}
