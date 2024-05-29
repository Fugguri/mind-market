// import styles from "../../styles/components/Panes.module.css";
import type { Property } from "csstype";
import { Children } from "react";

export function Pane(prop: {
  children: React.ReactNode;
  width: string;
  height: string;
  direction: Property.FlexDirection;
  justify: Property.JustifyContent;
}) {
  return (
    <div
      className="paneContainer"
      style={{
        width: prop.width,
        display: "flex",
        flexDirection: prop.direction,
        gap: "1.5rem",
        justifyContent: prop.justify,
        padding: "2rem",
        backgroundColor: "var(--gray)",
        height: prop.height,
      }}
    >
      {prop.children}
    </div>
  );
}

export function PanesContainer(prop: {
  children: React.ReactNode;
  width: string;
  height: string;
  direction: Property.FlexDirection;
  justify: Property.JustifyContent;
}) {
  return (
    <div
      className="panes"
      style={{
        width: prop.width,
        display: "flex",
        flexDirection: prop.direction,
        gap: "1.5rem",
        justifyContent: prop.justify,
        height: prop.height,
      }}
    >
      {prop.children}
    </div>
  );
}
