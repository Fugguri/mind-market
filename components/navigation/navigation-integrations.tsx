'use client'

import {
	BarChartHorizontalBigIcon,
	Blocks,
	MessageSquareIcon,
	Plus,
} from 'lucide-react'
import { ActionTooltip } from '@/components/action-tooltip'
import { useParams, useRouter } from 'next/navigation'
import { currentProfile } from '@/lib/current-profile'

export const NavigationIntegrations = () => {
	const router = useRouter()
	const params = useParams()
	const onClick = () => {
		router.push(`/projects/${params.projectId}/integrations`)
	}

	return (
		<div>
			<ActionTooltip side='right' align='center' label='Интеграции'>
				<button onClick={onClick} className='group flex items-center'>
					<div
						className='flex mx-3 h-[48px] w-[48px] 
                rounded-24px group-hover:rounded-[16px] transition-all
                overflow-hidden items-center justify-center bg-background
                dark:bg-neutral-700
                group-hover:bg-emerald-500'
					>
						<Blocks
							className='group-hover:text-white transition 
                    text-emerald-500 rounden-full'
							size={25}
						/>
					</div>
				</button>
			</ActionTooltip>
		</div>
	)
}
