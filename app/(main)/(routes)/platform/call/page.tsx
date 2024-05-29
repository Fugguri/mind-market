import { Pane } from "@/components/crm/panes";
import { Input } from "@nextui-org/react";
import { BtnFilledIcon } from "@/components/buttons";

export default function Page() {
  return (
    <>
      <Pane height="100%" width="100%" direction="column" justify="center">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <label className=" align-middle text-center text-base font-semibold">
              Вы можете позвонить пользователю на телефон <br />
              или присоединиться к его конференции в Google Meet, Discord,
              Skype, Telegram
            </label>
            <form className="flex flex-col gap-[1rem] w-[25rem]">
              <Input
                size="lg"
                key="flat"
                radius="none"
                variant="underlined"
                type="phone"
                color="default"
                id="phone"
                name="phone"
                placeholder="+7 999 999-99-99"
                className="w-[25rem]"
                endContent={
                  <div className="mr-[1rem] material-symbols-outlined">
                    arrow_outward
                  </div>
                }
              />
              <Input
                size="lg"
                key="flat"
                radius="none"
                variant="underlined"
                type="text"
                color="default"
                id="link"
                name="link"
                placeholder="Ссылка на конференцию"
                className="w-[25rem]"
                endContent={
                  <div className="mr-[1rem] material-symbols-outlined">
                    arrow_outward
                  </div>
                }
              />
              <BtnFilledIcon type="submit" text="Совершить звонок" />
            </form>
          </div>
        </div>
      </Pane>
    </>
  );
}
