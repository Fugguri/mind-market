import { initialProfile } from '@/lib/initial-profile'
import MobileHomePage from '@/components/full_size/mobile-home-page'
import FullScreenHomePage from '@/components/full_size/full-screen-home-page'
import { redirect } from 'next/navigation'
// import FullScreenHomePage from '@/components/full_sie/full-screen-home-page'
// import MobileHomePage from '@/components/full_sie/mobile-home-page'

const SetupPage = async () => {
	const profile = await initialProfile()
	return redirect(`projects`)
	// return (
	// 	<FullScreenHomePage />
	// 	// <MobileHomePage />
	// )
}

export default SetupPage
