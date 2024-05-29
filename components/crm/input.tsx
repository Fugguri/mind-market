"use client";

import React from "react";
import { Input } from "@nextui-org/react";

export function Search() {
  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      <Input
        isClearable
        size="lg"
        key="flat"
        radius="none"
        type="unset"
        color="default"
        placeholder="Поиск"
        className="max-w-[50%]"
        startContent={<div className="mr-[1rem] material-symbols-outlined">search</div>}
      />
    </div>
  );
}
