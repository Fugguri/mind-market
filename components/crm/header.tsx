"use client";

import { DropdownAvatar, DropdownIcon } from "./dropdown";
import React from "react";
import { Search } from "./input";
import { UserPicture } from "../hooks/userInfo";
import { BtnIconOnly } from "../buttons";

import styles from "../../styles/components/Btns.module.css";

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem 0 2rem 0",
        // height: "5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Search />
      <div className="flex flex-row gap-[1rem] align-middle">
        <DropdownIcon icon="notifications" />
        <DropdownIcon icon="settings" />
        <DropdownAvatar src={UserPicture} />
      </div>
    </header>
  );
}
