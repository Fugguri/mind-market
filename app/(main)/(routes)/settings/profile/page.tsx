import { currentProfile } from '@/lib/current-profile'
import { redirect } from 'next/navigation'
import PageTitleItem from '@/components/ui/page_title'
import ProfileItemPage from '@/components/profile/profile-item'

const ProfilePage = async () => {
	const profile = await currentProfile()
	if (!profile) {
		redirect('/')
	}
	return (
		<div className='m-5 '>
			<PageTitleItem title='Профиль' />
			<ProfileItemPage profile={profile} />
		</div>
	)
}

export default ProfilePage
