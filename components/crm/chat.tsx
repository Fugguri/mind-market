// TODO BUTTONS

import { Avatar } from "@nextui-org/react";
import { BtnIconOnly } from "../../components/buttons";
import Link from "next/link";

interface ChatListItemProps {

  prop: {
  name: string;
  messenger: string;
  img: string;
  id: string;
}
}
interface ChatListItemParams {

params: {
  projectId: string,
  chatId: string
},}
export function ChatListItem(  prop: {
  name: string;
  messenger: string;
  projectId:string;
  img: string;
  id: string;
}) {
  const Href = `/platform/${prop.projectId}/chat/${prop.id}`;
  return (
    <Link
      className="flex flex-row w-[100%] items-center justify-between"
      href={Href}
    >
      <div className="flex flex-row gap-[.9rem] items-center">
        <Avatar showFallback src={prop.img} name={prop.name} size="lg" />
        <div className="flex flex-col">
          <label className="text-base">{prop.name}</label>
          <label className="text-sm">{prop.messenger}</label>
        </div>
      </div>
      <div className="flex flex-row gap-[.5rem] mr-[.1rem] text-sm">
        <BtnIconOnly icon="mail" />
        <BtnIconOnly icon="close" />
      </div>
    </Link>
  );
}

export function ChatHeaderModule(prop: {
  img: string;
  name: string;
  messenger: string;
}) {
  return (
    <div className="flex items-center">
      <Avatar showFallback src={prop.img} name={prop.name} />
      <div className="ml-3">
        <div className="font-bold">{prop.name}</div>
        <div className="text-xs text-gray-400">{prop.messenger}</div>
      </div>
    </div>
  );
}

export enum Type {
  in = "self-start",
  out = "self-end",
}
interface Props {
  text: string;
  time: string;
  type: Type;
}
export function Message(prop: Props) {
  return (
    <div className={prop.type}>
      <div
        className="p-3 max-w-xs text-sm"
        style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
      >
        {prop.text}
        <br />
        <div
          className="text-end text-xs"
          style={{ color: "color-mix(in srgb, var(--black), transparent 30%" }}
        >
          {prop.time}
        </div>
      </div>
    </div>
  );
}
