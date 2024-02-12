import IntegrationItem from "@/components/integrations/integration-item";
import EmptyPage from "@/components/mics/empty";
import { ModalProvider } from "@/components/providers/modal-provider";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ModalType, useModal } from '@/hooks/use-modal-store'

const IntegrationsPage = async () => {
    const profile = await currentProfile()

	if (!profile) {
		return "/"
	}
	const user_integrations = await db.integration.findMany({
		where: {
			userId: profile.id,
		},
	})

    const integrations = [
        {
            id:'1',
            imageUrl:"/telegram_img.png",
            title:"Telegram Bot",
            modal:"addTgBot" as ModalType
            
        },
        {
            id:'2',

            imageUrl:"/telegram_img.png",
            title:"Telegram Личный",
            modal:'addTgUserBot' as ModalType
        },
        
        {
            id:'3',

            imageUrl:"/whatsapp_img.png",
            title:"WhatsApp (GreenApi)",
            modal:'addWaBot' as ModalType
        },
        {
            id:'4',

            imageUrl:"/instagram_img.jpg",
            title:"Instagram",
            modal:'addInst' as ModalType
        },
        {
            id:'5',
            imageUrl:"/vk_img.png",
            title:"ВКонтакте",
            modal:"addVK" as ModalType
        },
        {
            id:'5',
            imageUrl:"/avito_img.jpg",
            title:"Авито",
            modal:"addAvito" as ModalType
        },

    ]


    return ( <div className=" items-center align-middle font-roboto ml-15">
        <div className="m-10 p-10 bg-gray-600 rounded-[30px]">
            {user_integrations.length? <p>
                Тут список интеграций
            </p>:
            <p>
                <EmptyPage title="интеграций"/>
            </p>
            }
        </div>
        <div className="flex m-10 p-10 align-middle items-center ">

        <br></br>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-10">

        {integrations.map((integration) => (
				<div key={integration.title}>
					<IntegrationItem integration={integration} />
				</div>
			))}
        </div>
        </div>
    </div> );
}
 
export default IntegrationsPage;