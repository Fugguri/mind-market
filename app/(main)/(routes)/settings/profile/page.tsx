import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

import { useModal } from '@/hooks/use-modal-store'
import PageTitleItem from '@/components/ui/page_title'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'
import ProfileItemPage from '@/components/profile/profile-item'

const ProfilePage = async () => {
	const profile = await currentProfile()
	if (!profile) {
		// redirectToSignIn()
	}
	return (
		<div className='m-5 '>
			<PageTitleItem title='Профиль' />
			<ProfileItemPage profile={profile} />
		</div>
	)
}

export default ProfilePage
