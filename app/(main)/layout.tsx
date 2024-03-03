import { NavBar } from '@/components/navigation/navbar'
import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import ProjectsNavigationSidebar from '@/components/navigation/project-navigation-sidebar'

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
			<div className='md:hidden sm:h-[20px] fixed bg inset-y-0 '>
				<NavBar />
			</div>
			<div className=' hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
				<ProjectsNavigationSidebar />
			</div>
			<main className='pl-[72px] h-full'>{children}</main>
		</div>
	)
}

export default MainLayout
