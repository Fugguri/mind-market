import { BtnIconOnly } from "../buttons";
import * as React from "react";
import { Popper } from "@mui/base/Popper";
import { Avatar } from '@/components/ui/avatar';
import { LogOutButton } from "@/components/auth";

export function DropdownIcon(prop: { icon: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <BtnIconOnly
        icon={prop.icon}
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      />
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <div className="flex flex-col p-[1rem] bg-white text-black mt-[1rem]">
          <LogOutButton/>
        </div>
      </Popper>
    </div>
  );
}

export function DropdownAvatar(prop: { src: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      {/* <Avatar res={prop.src}  onClick={handleClick} /> */}
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <div className="flex flex-col p-[1rem] bg-white text-black mt-[1rem]">
          The content of the Dropdown.
        </div>
      </Popper>
    </div>
  );
}
