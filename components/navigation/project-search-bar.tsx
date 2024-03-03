'use client'

import { Plus } from 'lucide-react'
import { ActionTooltip } from '@/components/action-tooltip'
import { useModal } from '@/hooks/use-modal-store'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const CreateProjectButton = () => {
	const { onOpen } = useModal()

	const onClick = () => {
		console.log('createProject')
		onOpen('createProject')
		console.log('Project')
	}

	return (
		<div>
			<Button onClick={() => onClick()} variant={'chat'}>
				Создать проект
			</Button>
		</div>
	)
}
