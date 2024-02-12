import { NavBar } from '@/components/navigation/navbar'
import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import SettingsSidebar from '@/components/settings/settings-sidebar'

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
			{/* <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
            <SettingsSidebar />
        </div> */}
			<main className='h-full md:pl-60'>{children}</main>
		</div>
	)
}

export default MainLayout
