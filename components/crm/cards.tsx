'use client'
import { BtnUnderlineIcon, BtnOutlineIcon, BtnFilledIcon } from "../buttons";
import styles from "@/styles/components/CardsCRM.module.css";
import { Platforms, ProjectTypes } from "../hooks/enums";
import { useModal } from "@/hooks/use-modal-store";
import { Assistant } from "@prisma/client";

export function DealCard(prop: {
  title: string;
  text: string;
  price: number;
  link: string;
}) {
  return (
    <div
      className="flex flex-col p-[2rem] gap-[1rem]"
      style={{ color: "var(--black)", background: "var(--white)" }}
    >
      <div>
        <h2 className="m-0 mt-[-1rem]">{prop.title}</h2>
        <h3 className="m-0">{prop.text}</h3>
      </div>
      <h1 className="m-0">{prop.price}₽</h1>
      <div style={{ filter: "invert(1)" }}>
        <BtnUnderlineIcon
          icon="arrow_outward"
          href={prop.link}
          text="Связаться с менеждером"
        />
      </div>
    </div>
  );
}

export function ProjectCard(prop: {
  status: ProjectTypes;
  date: string;
  name: string;
}) {
  return (
    <div
      className="flex flex-row justify-between align-middle items-center w-[100%] p-[1.8rem] border-solid border-1 bg-transparent"
      style={{ borderColor: "var(--white)", color: "var(--white)" }}
    >
      <h2 className="m-0 mt-[-.5rem]">{prop.name}</h2>
      <div className="flex flex-col items-end gap-[.5rem]">
        <h3 className="text-[1.3rem]">{prop.status}</h3>
        <h4>{prop.date}</h4>
      </div>
    </div>
  );
}

export function AssistantCard(prop: {
  name: string;
  platform: string | string[];
  id?: string;
  assistant?: Assistant,
  projectId?:string
}) {

  
  
  const { onOpen } = useModal()
  

  return (
    <div
    
      className="flex flex-col p-[2rem] gap-[3rem] min-h-[13rem] h-min max-h-[16rem] max-w-[22%] w-[100%]"
      style={{ color: "var(--black)", background: "var(--white)" }}
    >
      <div>
        <h3 className="mt-[-.5rem] flex flex-row justify-between items-center">
          <label>{prop.name}</label>
          <button   onClick={()=>onOpen('deleteAssistant',{assistant:prop.assistant})}className="material-symbols-outlined">close</button>
        </h3>
       <h4>Внедрён: {prop.platform??'нет'}</h4>
       <h4>Тип: {prop.assistant?.type}</h4>
      </div>
      <div
        className="flex flex-row flex-wrap gap-[.5rem]"
        style={{ filter: "invert(1)" }}
      >
        <div className="w-[100%]">
          <BtnFilledIcon onClick={()=>onOpen('deleteAssistant',{assistant_id:prop.id,projectId:prop.projectId})} text="Подробнее" />
        </div>
        <div className="w-[100%]">
          <BtnOutlineIcon onClick={()=>onOpen('editAssistant',{assistant_id:prop.id,projectId:prop.projectId})} text="Редактировать" />
        </div>
      </div>
    </div>
  );
  
  
}