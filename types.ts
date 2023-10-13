
import {  Profile, TelegramBot, TelegramUserBot, WhatsAppBot } from "@prisma/client"

export type ProfileType = Profile[];

export type ProfileWithIntegrations = Profile & {integrations :(TelegramBot & TelegramUserBot & WhatsAppBot)};