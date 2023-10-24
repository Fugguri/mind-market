'use client'

import { Plus } from 'lucide-react'
import { ActionTooltip } from '../action-tooltip'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import PageTitleItem from '../ui/page_title'

const IntegrationsHeader = () => {
	const router = useRouter()

	const onClick = (integrationType: string) => {
		router.push(`/integrations/${integrationType}`)
	}

	return <div className=' w-full flex m-5 '></div>
}

export default IntegrationsHeader
