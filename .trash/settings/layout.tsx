import { NavBar } from '@/components/navigation/navbar'
import ProjectsNavigationSidebar from '@/components/navigation/project-navigation-sidebar'

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
			<main className='pl-[72px] h-full'>{children}</main>
		</div>
	)
}

export default MainLayout
