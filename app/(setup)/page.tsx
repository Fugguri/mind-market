import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { initialProfile } from '@/lib/initial-profile'
import { InitialModal } from '@/components/modals/initial-modal'
// import FullScreenHomePage from '@/components/full_sie/full-screen-home-page'
// import MobileHomePage from '@/components/full_sie/mobile-home-page'

const SetupPage = async () => {
	const profile = await initialProfile()
	return redirect(`chats/inbox`)
	// return (
	// 	// <FullScreenHomePage />
	// 	<MobileHomePage />
	// )
}

export default SetupPage
