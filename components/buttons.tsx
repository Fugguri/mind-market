"use client";

import Link from "next/link";
import styles from "../styles/components/Btns.module.css";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

type BtnProps = {
  icon?: string;
  text?: string;
  type?: React.ComponentPropsWithoutRef<"button">;
  onClick?: (event: any) => void;
  fontWeight?: string;
  justify?: string;
  [x: string]: any;
  position?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

interface IProps_Square {
  prop: BtnProps;
  message: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function BtnTextIcon({ text, icon, type, onClick, justify, position, fontWeight }: BtnProps) {
  return (
    <button
      type={type}
      className={styles.btn_icon_text}
      id={styles.btn}
      font-w={fontWeight}
      onClick={onClick}
      justify-t={justify}
      pos-t={position}
    >
      <div>{text}</div>
      <div className="material-symbols-outlined">{icon}</div>
    </button>
  );
}

export function BtnFilledIcon({ text, icon, type, onClick, justify, position }: BtnProps) {
  return (
    <button
      type={type}
      className={styles.btn_icon_filled}
      id={styles.btn}
      onClick={onClick}
      justify-t={justify}
      pos-t={position}
    >
      <div>{text}</div>
      <div className="material-symbols-outlined">{icon}</div>
    </button>
  );
}

export function BtnOutlineIcon({ text, icon, type, onClick, justify, position }: BtnProps) {
  return (
    <button
      type={type}
      className={styles.btn_icon_outline}
      id={styles.btn}
      onClick={onClick}
      justify-t={justify}
      pos-t={position}
    >
      <div>{text}</div>
      <div className="material-symbols-outlined">{icon}</div>
    </button>
  );
}

export function BtnUnderlineIcon({ text, icon, type, onClick, justify, position }: BtnProps) {
  return (
    <button
      type={type}
      className={styles.btn_icon_underline}
      id={styles.btn}
      onClick={onClick}
      justify-t={justify}
      pos-t={position}
    >
      <div>{text}</div>
      <div className="material-symbols-outlined">{icon}</div>
    </button>
  );
}

export function ProfileButton(prop: { logged_in: boolean }) {
  if (prop.logged_in) {
    return <div>Your profile</div>;
  }
  return (
    <a tabIndex={-1} href="/platform">
      <BtnTextIcon text="Войти" icon="arrow_outward" type="button" fw="400" />
    </a>
  );
}

export function BtnSwitch(state: {
  enabled: string;
  text: string;
  [x: string]: any;
  onClick?: (event: any) => void;
}) {
  return (
    <button
      type="submit"
      id={styles.btn}
      enabled-btn={state.enabled}
      className={styles.btn_switch}
      onClick={state.onClick}
    >
      {state.text}
    </button>
  );
}

export function BtnIconOnly({ icon, type, onClick }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.iconBtn}
      id={styles.btn}
    >
      <div className="material-symbols-outlined">{icon}</div>
    </button>
  );
}
