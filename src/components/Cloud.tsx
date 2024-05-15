import { useContext } from "react";
import { themeContext } from "../App";

export default function Cloud(props: any) {
  const cloudStyle = `
      bottom: calc(${props.cloudPosition.cloudBottom}vh + 90px);
      ${props.cloudPosition.cloudSide}: ${props.cloudPosition.cloudSideAmount}px;
      z-index: ${props.cloudPosition.cloudZIndex}
    `;
  const theme = useContext(themeContext);
  return (
    <>
      <div style={{ cssText: cloudStyle }} className="cloud-container">
        <div
          className={`cloud-part-1 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
        <div
          className={`cloud-part-2 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
        <div
          className={`cloud-part-3 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
        <div
          className={`cloud-part-4 ${theme === "night" ? "night-cloud" : ""}`}
        ></div>
      </div>
    </>
  );
}
