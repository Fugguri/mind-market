
import { db } from "@/lib/db";

import IntegrationPage from "@/components/integrations/add-integration-button";


export default  async function Page(params:{projectId:string}) {
  console.log(params)
  const projectId = params.projectId
  const assistants = await db.assistant.findMany({where: {
    projectId
  }})

  const telegramBots = await db.telegramBot.findMany({where: {
    projectId:projectId
  }})



  return (
    <>
    <IntegrationPage assistants={assistants} telegramBots={telegramBots}/>
    </>
  );
}
