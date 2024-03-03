import { NextResponse } from 'next/server'

import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import axios from 'axios'

export async function POST(req: Request) {
	const { token } = await req.json()
	const profile = await currentProfile()
	if (!profile) {
		return new NextResponse('Unauthorize', { status: 401 })
	}
	try {
		await axios.post(
			`https://web-mindmarket/api_v2/integrations/tgbot/${profile.token}}`,
			{
				token: token,
			}
		)
	} catch (error) {
		console.log('[ASSISTANTS_POST]', error)
		return new NextResponse('Enternal error', { status: 500 })
	}
	// return NextResponse.json(integration)
}

export async function DELETE(
	req: Request,
	{ params }: { params: { assistantId: string } }
) {
	try {
		const profile = await currentProfile()

		if (!profile) {
			return new NextResponse('Unauthorized', { status: 401 })
		}

		const server = await db.assistant.delete({
			where: {
				id: params.assistantId,
				// profileId: profile.id,
			},
		})

		return NextResponse.json(server)
	} catch (error) {
		console.log('[SERVER_ID_DELETE]', error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { profileId: string } }
) {
	try {
		const profile = await currentProfile()
		const {
			name,
			phone_number,
			imageUrl,
			telegram,
			email,
			companyName,
			job_title,
		} = await req.json()

		if (!profile) {
			return new NextResponse('Unauthorized', { status: 401 })
		}

		const user = await db.user.update({
			where: {
				id: params.profileId,
			},
			data: {
				name,
				phone_number,
				imageUrl,
				telegram,
				email,
				companyName,
				job_title,
			},
		})

		return NextResponse.json(user)
	} catch (error) {
		console.log('[SERVER_ID_PATCH]', error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}
