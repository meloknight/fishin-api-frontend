import { useContext } from "react";
import { themeContext } from "../App";

export default function Bush(props: any) {
  const theme = useContext(themeContext);

  const bushStyle = `
      bottom: ${props.bushPosition.bushBottom}px;
      ${props.bushPosition.bushSide}: ${props.bushPosition.bushSideAmount}px;
      z-index: ${props.bushPosition.bushZIndex};
      width: ${props.bushPosition.bushWidth}px;
      height: ${props.bushPosition.bushHeight}px
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
