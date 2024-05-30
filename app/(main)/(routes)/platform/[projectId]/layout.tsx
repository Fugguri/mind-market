// import * as React from "react";
import { SideNav } from "@/components/crm/sidenav/sidenav";
import "./globals.css";
import "@/styles/global.css";

import Header from "@/components/crm/header";
import {
  CardShellDefaultLink,
  CardModuleDescription,
} from "@/components/cards";
import SidebarButtons from "@/components/mics/sidebar-buttons";

export const metadata = {
  title: "CRM",
};

export default function CRMLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="screenWrapper">
        <SideNav>

        <SidebarButtons/>

          <div className="opacity-50 mb-[2rem]">
            <CardShellDefaultLink link="/platform" maxWidth="10rem">
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
