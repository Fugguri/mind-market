import { NavBar } from '@/components/navigation/navbar'
import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import ProjectsNavigationSidebar from '@/components/navigation/project-navigation-sidebar'
import { string } from 'zod'

interface LayoutProps {
	projectId: string
}

const MainLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode
	params: { projectId: string }
}) => {
	return (
		<div className='h-full'>
			<div className='md:hidden sm:h-[20px] fixed bg inset-y-0 '>
				<NavBar />
			</div>
			<div className=' hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
				<NavigationSidebar projectId={params.projectId} />
			</div>
			<main className='pl-[72px] h-full'>{children}</main>
		</div>
	)
}

export default MainLayout
