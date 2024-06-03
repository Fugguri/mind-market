import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

const AssistantsPage = async () => {
	const profile = await currentProfile()

	if (!profile) {
		return redirect('/api/auth/singing')
	}

	return redirect(`settings/profile`)
}

export default AssistantsPage
