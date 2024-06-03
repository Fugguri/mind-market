"use client"
import SideBtn from "@/components/crm/sidenav/sidenav-btn";
import Link from "next/link";
import { PanesContainer } from "@/components/crm/panes";
import { useParams } from "next/navigation";
import {
    CardShellDefaultLink,
    CardModuleDescription,
  } from "@/components/cards";

const SidebarButtons = () => {

	const params = useParams()

    return ( 
        <div className="flex flex-col gap-[1rem]">
        <Link href="/platform">
  
          <div
            className="logo"
            style={{
                display: "block",
                height: "3rem",
                width: "12rem",
              margin: "1rem 0",
              backgroundSize: "12rem",
              backgroundClip: "content-box",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: "var(--fullLogo)",
          }}
          />
          </Link>
          <CardShellDefaultLink link="/platform" maxWidth="10rem">
            <CardModuleDescription>
              Динамическое планирование
            </CardModuleDescription>
          </CardShellDefaultLink>
        <div className="divider transparent" id="smallest" />
        <SideBtn icon="account_circle" text="Профиль" link={`/platform/${params.projectId}/profile`} />
        <SideBtn icon="mail" text="Сообщения" link={`/platform/${params.projectId}/chat`} />
        <SideBtn
          icon="leaderboard"
          text="Статистика" 
          link={`/platform/${params.projectId}/dashboard`}
        />
        <SideBtn icon="group" text="Ассистенты" link={`/platform/${params.projectId}/assistants`} />
        <SideBtn icon="credit_card" text="Оплата" link={`/platform/${params.projectId}/billing`} />
        <SideBtn icon="call" text="Звонки" link={`/platform/${params.projectId}/call`} />
        <SideBtn icon="stacks" text="Интеграции" link={`/platform/${params.projectId}/integrations`} />
        <SideBtn icon="description" text="CRM" link={`/platform/${params.projectId}/crm`} />
      </div>
     );
}
 
export default SidebarButtons;