import { db } from "@/lib/db";
import IntegrationPage from "@/components/integrations/add-integration-button";

interface PageProps {
  params: {
    projectId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const projectId = params.projectId;

  const assistants = await db.assistant.findMany({
    where: { projectId }
  });

  const telegramBots = await db.telegramBot.findMany({
    where: { projectId }
  });

  return (
    <>
      <IntegrationPage 
        assistants={assistants} 
        telegramBots={telegramBots} 
        integrations={[]} 
        telegramUserBots={[]} 
      />
    </>
  );
}