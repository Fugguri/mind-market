import { useModal } from "@/hooks/use-modal-store"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "../../ui/dialog"
import { Button } from "../../ui/button"
import { BtnFilledIcon } from "../../buttons"

const AddASsistantsSelectionModal = () => {
	const params = useParams()
	const router = useRouter() 
	const { isOpen, onClose, type, data ,onOpen} = useModal()
	const isModalOpen = isOpen && type === 'addAssistansSelection'

	const projectId = data.projectId
	
    return ( 
		<div>

        <Dialog  open={isModalOpen} onOpenChange={()=> onClose()}>

		<DialogContent className='bg-white text-black w-80vw h-80hw overflow-hidden'>
					<DialogHeader className=''>
						<DialogTitle className='text-2xl text-center font-bold'>
							
								Выберите тип ассистента 
							
						</DialogTitle>
						<DialogDescription className='tetx-center text-zinc-500'>
						<div  className=' items-center align-middle font-roboto ml-15'>
							<div className=' m-10 p-10 align-middle items-center '>
								<BtnFilledIcon variant='edit'  
								onClick={()=> router.push(`/platform/${params.projectId}/assistants/smart-assistant/`)
									// onOpen("addSmartAssistant",{projectId:projectId})
									
								} 
								text='Умный ассистент'/>
                                <BtnFilledIcon variant='edit' onClick={()=> onOpen("addWebPageAssistant",{projectId:projectId})} text='Асситент для работы со страницами сайта'/>
								<BtnFilledIcon variant='edit' onClick={()=> onOpen('addAssistant',{projectId:projectId})} text='Базовый ассистент'/>
                                <BtnFilledIcon variant='edit' onClick={()=> onOpen('addDocumentsAssistant',{projectId:projectId})} text='Ассистент для работы с документами'/>
							</div>
							</div>
						</DialogDescription>
					</DialogHeader>
					</DialogContent>

        </Dialog>

		</div>
        

     );
}
 
export default AddASsistantsSelectionModal;