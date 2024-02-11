import { currentProfile } from '@/lib/current-profile'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	try {
		const { name, settings, comment, imageUrl } = await req.json()

		const profile = await currentProfile()

		if (!profile) {
			return new NextResponse('Unauthorize', { status: 401 })
		}
		console.log('assistant post')
		const assistant = await db.assistant.create({
			data: {
				userId: profile.id,
				name,
				imageUrl,
				settings,
				comment,
			},
		})

		return NextResponse.json(assistant)
	} catch (error) {
		console.log('[SERVERS_POST]', error)
		return new NextResponse('Enternal error', { status: 500 })
	}
}
