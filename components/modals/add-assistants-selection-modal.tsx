import { useModal } from "@/hooks/use-modal-store"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "../ui/dialog"
import { Button } from "../ui/button"
import { BtnFilledIcon } from "../buttons"

const AddASsistantsSelectionModal = () => {
	const params = useParams()

	const { isOpen, onClose, type, data ,onOpen} = useModal()
	const isModalOpen = isOpen && type === 'addAssistansSelection'

    
    return ( 
        <Dialog  open={isModalOpen} onOpenChange={()=> onClose()}>

		<DialogContent className='bg-white text-black  overflow-hidden'>
					<DialogHeader className=''>
						<DialogTitle className='text-2xl text-center font-bold'>
							<h1>Выберите тип ассистента </h1>
						</DialogTitle>
						<DialogDescription className='tetx-center text-zinc-500'>
						<div  className=' items-center align-middle font-roboto ml-15'>
							<div className=' m-10 p-10 align-middle items-center '>
							                          
								<BtnFilledIcon variant='edit' onClick={()=> onOpen("addSmartAssistant")} text='SmartAssistant'/>
                                <BtnFilledIcon variant='edit' onClick={()=> onOpen("addWebPageAssistant")} text='WebPageAssistantBtnFilledIcon'/>
								<BtnFilledIcon variant='edit' onClick={()=> onOpen('addAssistant')} text='BaseAssistantBtnFilledIcon'/>
                                <BtnFilledIcon variant='edit' onClick={()=> onOpen("addWebPageAssistant")} text='DocumentsAssistantBtnFilledIcon'/>
							</div>
							</div>
						</DialogDescription>
					</DialogHeader>
					</DialogContent>

        </Dialog>

        

     );
}
 
export default AddASsistantsSelectionModal;