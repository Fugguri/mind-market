import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { initialProfile } from '@/lib/initial-profile'
import { InitialModal } from '@/components/modals/initial-modal'

const SetupPage = async () => {
	const profile = await initialProfile()
	return redirect(`chats/inbox`)
}

export default SetupPage
