'use client'

import { ActionTooltip } from '@/components/action-tooltip'
import { useModal } from '@/hooks/use-modal-store'
import { Button } from '../ui/button'

export const AddAssistantButton = () => {
	const { onOpen } = useModal()

	return (
		<div>
			<ActionTooltip side='right' align='center' label='Добавить ассистента'>
				<Button
					onClick={() => onOpen('createServer')}
					className='group flex items-center'
					variant='primary'
				>
					Добавить
				</Button>
			</ActionTooltip>
		</div>
	)
}
