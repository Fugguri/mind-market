'use client'

import { ActionTooltip } from '@/components/action-tooltip'
import { useModal } from '@/hooks/use-modal-store'
import { Button } from '../ui/button'
import { BtnFilledIcon, BtnOutlineIcon } from '../buttons'


export const AddAssistantButton = (props:{projectId:string}) => {
	const { onOpen } = useModal()

	return (
		<div>
        <div className="flex flex-row content-end h-[3rem] w-1/2 gap-[1rem]">
          {/* API */}
          <BtnFilledIcon onClick={() => onOpen('addAssistansSelection',{projectId:props.projectId})} text="Добавить ассистента"/>
          <BtnOutlineIcon  text="Экспорт данных"/>
        </div>
		</div>
	)
}
