import { useContext } from "react";
import { themeContext } from "../App";

type BushProps = {
  bushBottom: number;
  bushSide: string;
  bushSideAmount: number;
  bushZIndex: number;
  bushWidth: number;
  bushHeight: number;
};

export default function Bush({
  bushBottom,
  bushSide,
  bushSideAmount,
  bushZIndex,
  bushWidth,
  bushHeight,
}: BushProps) {
  const theme = useContext(themeContext);

  const bushStyle = `
      bottom: ${bushBottom}px;
      ${bushSide}: ${bushSideAmount}px;
      z-index: ${bushZIndex};
      width: ${bushWidth}px;
      height: ${bushHeight}px
    `;
  return (
    <>
      <div
        style={{ cssText: bushStyle }}
        className={`bush ${theme === "night" ? "night-bush" : ""}`}
      ></div>
    </>
  );
}
