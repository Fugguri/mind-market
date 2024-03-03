import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { ModeToggle } from '../mode-toggle'
import { Separator } from '@/components/ui/separator'
import { currentProfile } from '@/lib/current-profile'
import { ScrollArea } from '@/components/ui/scroll-area'

import { NavigationItem } from './navigation-item'
import { NavigationAction } from './navigation-action'
import { NavigationChat } from './navigation-chat'
import { NavigationCrm } from './navigation-crm'
import { NavigationAssistants } from './navigation-assistant'
import { NavigationIntegrations } from './navigation-integrations'
import NavigationSettings from './navigations-settings'

import { getServerSession } from 'next-auth'
import Profile from './navigation-profile'
import { NavigationHome } from './navigation-home'

const ProjectsNavigationSidebar = async () => {
	const session = await getServerSession()
	if (session) {
		return (
			<div
				className='space-y-4 flex flex-col items-center 
        h-full text-primary w-full dark:bg-[#1e1f22]
        py-3'
			>
				<NavigationHome />
				<ScrollArea className='flex-1 w-full'></ScrollArea>
				<div className='pb-3 mt-auto flex items-center flex-col gap-y-4'>
					<NavigationSettings />
					<ModeToggle />
					<Profile />
				</div>
			</div>
		)
	}

	return redirect('api/auth/singin')
}

export default ProjectsNavigationSidebar
