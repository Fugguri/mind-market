import { useModal } from "@/hooks/use-modal-store"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "../ui/dialog"

const AddASsistantsSelectionModal = () => {
    const router = useRouter()
	const params = useParams()

	const { isOpen, onClose, type, data } = useModal()
	const isModalOpen = isOpen && type === 'addAssistansSelection'

    
    return ( 
        <Dialog  open={isModalOpen} onOpenChange={()=> onClose()}>

		<DialogContent className='bg-white text-black  overflow-hidden'>
					<DialogHeader className=''>
						<DialogTitle className='text-2xl text-center font-bold'>
							<h1>Выберите тип ассистента который вам нужен</h1>
						</DialogTitle>
						<DialogDescription className='tetx-center text-zinc-500'>
						<div  className=' items-center align-middle font-roboto ml-15'>
							<div className='flex m-10 p-10 align-middle items-center '>
								<br></br>
								<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-10'>
                                тут 4 типа ассистентов
								</div>
							</div>
							</div>
						</DialogDescription>
					</DialogHeader>
					</DialogContent>

        </Dialog>

        

     );
}
 
export default AddASsistantsSelectionModal;