import MODERN_BROWSERSLIST_TARGET from 'next/dist/shared/lib/modern-browserslist-target'
import MobileSidebar from './mobile-sidebar'

export const NavBar = ({ params }: { params: { projectId: string } }) => {
	return (
		<div className='p-4 border-b w-full frel items-center bg-transparent shadow-sm'>
			<MobileSidebar params={params} />
		</div>
	)
}
