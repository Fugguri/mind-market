import {
	User,
	TelegramBot,
	TelegramUserBot,
	WhatsAppBot,
	Chat,
	Client,
} from '@prisma/client'
import { Server as NetServer, Socket } from 'net'
import { NextApiResponse } from 'next'
import { Server as SockerIOServer } from 'socket.io'
export type ProfileType = User[]

export type ProfileWithIntegrations = User & {
	integrations: TelegramBot & TelegramUserBot & WhatsAppBot
}

export type ChatWithClient = Chat & {
	Client: Client
}

export type NextApiResponseServerIo = NextApiResponse & {
	socket: Socket & {
		server: NetServer & {
			io: SockerIOServer
		}
	}
}
