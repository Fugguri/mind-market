import { initialProfile } from '@/lib/initial-profile'

import { redirect } from 'next/navigation'
import { currentProfile } from '@/lib/current-profile'
import { signIn } from 'next-auth/react'
import { LogOutButton } from '@/components/auth'
// import FullScreenHomePage from '@/components/full_sie/full-screen-home-page'
// import MobileHomePage from '@/components/full_sie/mobile-home-page'

const SetupPage = async () => {
	const profile = await currentProfile()
	if (!profile) {
		return redirect('welcome')
	}

	return redirect(`platform`)

}

export default SetupPage
