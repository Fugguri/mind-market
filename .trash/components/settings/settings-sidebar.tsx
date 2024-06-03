
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect, useRouter } from "next/navigation";
import AssistantHeader from "./settings-header";
import SettingsHeader from "./settings-header";


const SettingsSidebar = async () => {
    const profile = await currentProfile()

    if(!profile) {
        return redirect('/')
    }

    const SettingsItems = [
        {
            name:"Ассистенты",
            href: "assistants",
        },
        {
            name:"Интеграции",
            href: "integrations",
        },
        {
            name:"Чаты",
            href: "chats",
        },
        {
            name:"CRM",
            href: "crm",
        },
        {
            name:"Сотрудники",
            href: "worker",
        },
        {
            name:"Профиль",
            href: "profile",
        },
    ]

    return ( 
    <div className="flex flex-col h-full text-primary w-fill dark:bg-[#2B2D31] db-[#F2F3F5]">
        <p className="m-3 font-bold dark:text-neutral-500">Настройки</p>
        {SettingsItems.map((item) =>

        ( 
        <SettingsHeader
        key={item.href}
        name={item.name}
        href={item.href}
        />
        )) }
    </div> 
    )
    
}
 
export default SettingsSidebar;