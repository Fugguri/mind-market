import { User, TelegramBot, TelegramUserBot, WhatsAppBot } from '@prisma/client'

export type ProfileType = User[]

export type ProfileWithIntegrations = User & {
	integrations: TelegramBot & TelegramUserBot & WhatsAppBot
}
