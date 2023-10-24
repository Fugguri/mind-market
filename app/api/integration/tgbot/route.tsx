import { currentProfile } from '@/lib/current-profile'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: Request) {
	try {
		const { token } = await req.json()
		const profile = await currentProfile()
		if (!profile) {
			return new NextResponse('Unauthorize', { status: 401 })
		}
		// const  integration = await db.telegramBot.create({
		//     data: {
		//         token: token,
		//         profileId:profile.id,

		//     }
		// })
		try {
			await axios.post(
				`https://web-mindmarket.ru/api_v2/integrations/tgbot/${profile.token}}`,
				{
					headers: { 'Content-Type': 'application/json' },
					data: {
						token: token,
					},
				}
			)
		} catch (error) {
			console.log(error)
		}
		// return NextResponse.json(integration)
	} catch (error) {
		console.log('[SERVERS_POST]', error)
		return new NextResponse('Enternal error', { status: 500 })
	}
}
