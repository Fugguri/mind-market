import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'

import { redirect, useParams } from 'next/navigation'

const StatisticPage = async ({ params }: { params: { projectId: string } }) => {
	const profile = await currentProfile()

	if (!profile) {
		return redirect('/api/auth/signin')
	}

	const assistant = await db.assistant.findFirst({
		where: {
			projectId: params?.projectId,
		},
	})

	return redirect(`assistant/statistic/${assistant?.id}`)
}

export default StatisticPage
