import { NavBar } from '@/components/navigation/navbar'
import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import ProjectsNavigationSidebar from '@/components/navigation/project-navigation-sidebar'

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full bg-transparent'>
			<main> {children}</main>
		</div>
	)
}

export default MainLayout
