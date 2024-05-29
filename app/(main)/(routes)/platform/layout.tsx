// import * as React from "react";
import { SideNav } from "@/components/crm/sidenav/sidenav";
import SideBtn from "@/components/crm/sidenav/sidenav-btn";
import "./globals.css";
import "@/styles/global.css";
import { PanesContainer } from "@/components/crm/panes";
import Header from "@/components/crm/header";
import {
  CardShellDefaultLink,
  CardModuleDescription,
} from "@/components/cards";

export const metadata = {
  title: "CRM",
};

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="screenWrapper">
        <SideNav>
          <div className="flex flex-col gap-[1rem]">
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
            <CardShellDefaultLink link="" maxWidth="10rem">
              <CardModuleDescription>
                Динамическое планирование
              </CardModuleDescription>
            </CardShellDefaultLink>
            <div className="divider transparent" id="smallest" />
            <SideBtn icon="account_circle" text="Профиль" link="/crm/profile" />
            <SideBtn icon="mail" text="Сообщения" link="/crm/chat" />
            <SideBtn
              icon="leaderboard"
              text="Статистика"
              link="/crm/dashboard"
            />
            <SideBtn icon="group" text="Ассистенты" link="/crm/assist" />
            <SideBtn icon="credit_card" text="Оплата" link="/crm/payment" />
            <SideBtn icon="call" text="Звонки" link="/crm/call" />
            <SideBtn icon="stacks" text="Интеграции" link="/crm/integrations" />
            <SideBtn icon="description" text="CRM" link="/crm" />
          </div>
          <div className="opacity-50 mb-[2rem]">
            <CardShellDefaultLink link="/" maxWidth="10rem">
              <CardModuleDescription>На главную</CardModuleDescription>
            </CardShellDefaultLink>
          </div>
        </SideNav>
        <div className="sideWrapper">
          <Header />
          <div className="contentWrapper">
            <main className="main">
              <div className="main-div">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
