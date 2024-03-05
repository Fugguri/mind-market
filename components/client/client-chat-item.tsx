import { Client } from '@prisma/client'

interface ClientChatItemProps {
	client: Client
}

const ClientChatItem = async (props: ClientChatItemProps) => {
	return <div>client data</div>
}

export default ClientChatItem
