import { currentProfile } from '@/lib/current-profile'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	try {
		const { name } = await req.json()

		const profile = await currentProfile()
		console.log(profile)
		if (!profile) {
			return new NextResponse('Unauthorize', { status: 401 })
		}
		const assistant = await db.project.create({
			data: {
				ownerId: profile.id,
				name,
			},
		})

		return NextResponse.json(assistant)
	} catch (error) {
		console.log('[SERVERS_POST]', error)
		return new NextResponse('Enternal error', { status: 500 })
	}
}
