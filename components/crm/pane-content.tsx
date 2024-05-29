"use client";

import { useState } from "react";

export function PaneTitle(prop: { children: React.ReactNode }) {
  return (
    <h2
      className="m-0 mt-[-.5rem] text-[1.5rem]"
      style={{ color: "color-mix(in srgb, var(--white), transparent 35%)" }}
    >
      {prop.children}
    </h2>
  );
}

export function Budget(prop: {
  text: string;
  month: number;
  year: number;
  budget: number;
}) {
  var isMonth = true;
  const [spend, setSpend] = useState(prop.month);
  const [text, setText] = useState("месяц");
  function chSpend() {
    isMonth ? setSpend(prop.year) : setSpend(prop.month);
    isMonth ? setText("год") : setText("месяц");
    isMonth = !isMonth;
  }
  return (
    <div className="flex flex-col">
      <PaneTitle>{prop.text}</PaneTitle>
      <h1 className="m-0 mt-[1rem]">—{spend}₽</h1>
      <div className="flex flex-row text-base gap-[1rem] w-[10rem] justify-between">
        Траты за {text}
        <button onClick={() => chSpend()}>
          <div className="material-symbols-outlined">expand_more</div>
        </button>
      </div>
      <div className="divider transparent" id="small" />
      <h3 className="m-0">Выделенный бюджет:</h3>
      <h2 className="m-0">{prop.budget}₽</h2>
    </div>
  );
}

export function VFlex(prop: { children: React.ReactNode; width: string }) {
  return (
    <div
      className="flex flex-col gap-[1rem] items-center"
      style={{ width: prop.width }}
    >
      {prop.children}
    </div>
  );
}
