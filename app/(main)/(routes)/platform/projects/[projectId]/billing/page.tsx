"use client";

import {
  Autocomplete,
  AutocompleteItem,
  Input,
  TimeInput,
} from "@nextui-org/react";
import { PaneTitle } from "@/components/crm/pane-content";
import { Pane } from "@/components/crm/panes";
import React from "react";
import { useMask } from "@react-input/mask";
import { Time } from "@internationalized/date";

export default function Page() {
  const inputRefExp = useMask({ mask: "__/__", replacement: { _: /\d/ } });
  const inputRefCard = useMask({
    mask: "____ ____ ____ ____",
    replacement: { _: /\d/ },
  });
  const inputRefPhone = useMask({
    mask: "+_ ___ ___-__-__",
    replacement: { _: /\d/ },
  });
  return (
    <>
      <Pane height="100%" width="100%" direction="row" justify="unset">
        <div className="flex flex-col gap-[6rem] w-[50%]">
          <PaneTitle>Оплата и конфиденциальность</PaneTitle>
          <div>
            <div
              // style={{
              //   color: "color-mix(in srgb, var(--white), transparent 35%)",
              // }}
            >
              <PaneTitle>Персональные данные</PaneTitle>
              <div>
                Ваши данные нам нужны для обработки данных и последующего
                улучшения вашего пользовательского опыта и для развития нашего
                продукта.
              </div>
            </div>

            <div className="flex flex-row gap-[1rem]">
              <Input
                size="md"
                radius="none"
                variant="underlined"
                type="text"
                color="default"
                id="fname"
                name="fname"
                placeholder="Имя"
                className="w-[12rem]"
              />
              <Input
                size="md"
                radius="none"
                variant="underlined"
                type="text"
                color="default"
                id="lname"
                name="lname"
                placeholder="Фамилия"
                className="w-[12rem]"
              />
            </div>

            <div className="flex flex-row gap-[1rem]">
              <Autocomplete
                type="text"
                id="country"
                name="country"
                className="w-[12rem]"
                label="Страна"
                radius="none"
                variant="underlined"
              >
                <AutocompleteItem key="ru">Россия</AutocompleteItem>
                <AutocompleteItem key="by">Беларусь</AutocompleteItem>
                <AutocompleteItem key="kz">Казахстан</AutocompleteItem>
              </Autocomplete>

              <Autocomplete
                type="text"
                id="city"
                name="city"
                className="w-[12rem]"
                label="Город"
                radius="none"
                variant="underlined"
              >
                <AutocompleteItem key="saratov">Саратов</AutocompleteItem>
              </Autocomplete>
            </div>
          </div>

          <div>
            <div
              style={{
                color: "color-mix(in srgb, var(--white), transparent 35%)",
              }}
            >
              <PaneTitle>Данные для оплаты</PaneTitle>
              <div>
                Будьте внимательны при вводе данных с карты и помните, что ваши
                данные могут быть использованы злоумышленниками. Будьте
                бдительны и не сообщайте данные вашей карты незнакомым вам людям
              </div>
            </div>
            <Input
              size="md"
              radius="none"
              variant="underlined"
              type="text"
              color="default"
              id="name"
              name="name"
              placeholder="Ivan Ivanov"
              className="w-[12rem]"
              endContent={
                <div className="material-symbols-outlined">arrow_outward</div>
              }
            />
            <Input
              ref={inputRefExp}
              size="md"
              radius="none"
              variant="underlined"
              type="text"
              color="default"
              id="exp"
              name="exp"
              placeholder="01/28"
              className="w-[12rem]"
              endContent={
                <div className="material-symbols-outlined">arrow_outward</div>
              }
            />
            <Input
              ref={inputRefCard}
              size="md"
              radius="none"
              variant="underlined"
              type="text"
              color="default"
              id="card"
              name="card"
              placeholder="0000 0000 0000 0000"
              className="w-[12rem]"
              startContent={
                <div className="material-symbols-outlined">credit_card</div>
              }
              endContent={
                <div className="material-symbols-outlined">arrow_outward</div>
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-[6rem] w-[50%]">
          <div>
            <div
              style={{
                color: "color-mix(in srgb, var(--white), transparent 35%)",
              }}
            >
              <PaneTitle>Контактные данные</PaneTitle>
              <div>
                Ваши данные нам нужны для обработки данных и последующего
                улучшения вашего пользовательского опыта и для развития нашего
                продукта.
              </div>
            </div>
            <Input
              size="md"
              radius="none"
              variant="underlined"
              type="email"
              color="default"
              id="mail"
              name="mail"
              placeholder="ivanov_ivan2001@gmail.com"
              className="w-[12rem]"
            />
            <Input
              ref={inputRefPhone}
              size="md"
              radius="none"
              variant="underlined"
              type="phone"
              color="default"
              id="phone"
              name="phone"
              placeholder="+7 925 322-44-55"
              className="w-[12rem]"
            />
          </div>
          <div>
            <div
              style={{
                color: "color-mix(in srgb, var(--white), transparent 35%)",
              }}
            >
              <PaneTitle>Настройки приватности</PaneTitle>
              <div>
                Ваши данные нам нужны для обработки данных и последующего
                улучшения вашего пользовательского опыта и для развития нашего
                продукта.
              </div>
            </div>
            <Autocomplete
              type="text"
              id="setting1"
              name="setting1"
              className="w-[12rem]"
              label="Кто может видеть данные моего профиля"
              radius="none"
              variant="underlined"
            >
              <AutocompleteItem key="ru">Никто</AutocompleteItem>
            </Autocomplete>
            <Autocomplete
              type="text"
              id="setting1"
              name="setting1"
              className="w-[12rem]"
              label="Кто может интегрировать мои площадки"
              radius="none"
              variant="underlined"
            >
              <AutocompleteItem key="ru">Никто</AutocompleteItem>
            </Autocomplete>
            <Autocomplete
              type="text"
              id="setting1"
              name="setting1"
              className="w-[12rem]"
              label="Кто может интегрировать мои площадки"
              radius="none"
              variant="underlined"
            >
              <AutocompleteItem key="ru">Никто</AutocompleteItem>
            </Autocomplete>
            <TimeInput
              radius="none"
              variant="underlined"
              hourCycle={24}
              label="До какого времени мне могут приходить уведомления"
              defaultValue={new Time(22, 0)}
            />
          </div>
        </div>
        {/* <h1 className="text-red-500">я устал, продолжу с утра</h1> */}
      </Pane>
    </>
  );
}
