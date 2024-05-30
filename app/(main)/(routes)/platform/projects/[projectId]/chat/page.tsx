import { Textarea } from "@nextui-org/react";
import { Pane } from "@/components/crm/panes";
import { PaneTitle } from "@/components/crm/pane-content";
import { BtnIconOnly } from "@/components/buttons";
import {
  ChatHeaderModule,
  ChatListItem,
  Message,
  Type,
} from "@/components/crm/chat";

export default function Page() {
  return (
    <>
      <Pane height="100%" width="30%" direction="column" justify="unset">
        <PaneTitle>Чаты</PaneTitle>
        <div className="flex flex-col gap-[1rem] overflow-y-scroll h-[100%]">
          {/* API */}
          <ChatListItem id="" img="" name="Иван" messenger="Telegram" />
        </div>
      </Pane>
      <Pane height="100%" width="70%" direction="column" justify="unset">
        <PaneTitle>Общение</PaneTitle>
        <div className="flex flex-col w-[100%] h-[100%]">
          <div className="flex flex-col min-h-[75%] h-[85%]">
            <div className="flex items-center justify-between pb-4">
              {/* API */}
              <ChatHeaderModule img="" name="Иван" messenger="Telegram" />
              <div className="flex flex-row gap-[1rem] text-base">
                <BtnIconOnly icon="phone" />
                <BtnIconOnly icon="bottom_panel_open" />
                <BtnIconOnly icon="menu" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 overflow-y-scroll h-[100%] border-b-2 border-[#fefefe52] border-solid">
              {/* API */}
              <Message
                text="Здравствуйте! В каком вы городе и какой автомобиль вас интересует?"
                time="13:30"
                type={Type.out}
              />
              <Message text="Питер, Хавал 5" time="13:30" type={Type.in} />
              <Message
                text="Отлично! Haval H5 — прекрасный выбор. Вы хотите приобрести автомобиль в наличии или на заказ"
                time="13:30"
                type={Type.out}
              />
              <Message text="в наличии" time="13:30" type={Type.in} />
            </div>
          </div>
          <div className="flex gap-[1rem] items-start mt-4 min-h-[10%] h-auto max-h-[25%]">
            {/* API */}
            <BtnIconOnly icon="mood" />
            <Textarea radius="none" placeholder="Ваше сообщение" />
            <BtnIconOnly icon="send" />
          </div>
        </div>
      </Pane>
    </>
  );
}
