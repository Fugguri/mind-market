import { initialProfile } from '@/lib/initial-profile'
import MobileHomePage from '@/components/full_size/mobile-home-page'
import FullScreenHomePage from '@/components/full_size/full-screen-home-page'
import { redirect } from 'next/navigation'
import { currentProfile } from '@/lib/current-profile'
import { signIn } from 'next-auth/react'
// import FullScreenHomePage from '@/components/full_sie/full-screen-home-page'
// import MobileHomePage from '@/components/full_sie/mobile-home-page'

const SetupPage = async () => {
	const profile = await currentProfile()
	if (!profile) {
		// signIn()
		return redirect('/api/auth/singing')
	}

	return redirect(`projects`)
	// return (
	// 	<FullScreenHomePage />
	// 	// <MobileHomePage />
	// )
}

export default SetupPage
