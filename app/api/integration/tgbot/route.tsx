import { currentProfile } from '@/lib/current-profile'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: Request) {
	try {
		const data = await req.json()
		const profile = await currentProfile()
		if (!profile) {
			return new NextResponse('Unauthorize', { status: 401 })
		}
		console.log('create integration')

		return NextResponse.json('dsa')
	} catch (error) {
		console.log('[SERVERS_POST]', error)
		return new NextResponse('Enternal error', { status: 500 })
	}
}
