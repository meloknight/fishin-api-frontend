import { useContext } from "react";
import { themeContext } from "../App";

type CloudProps = {
  cloudBottom: number;
  cloudSide: string;
  cloudSideAmount: number;
  cloudZIndex: number;
};

export default function Cloud({
  cloudBottom,
  cloudSide,
  cloudSideAmount,
  cloudZIndex,
}: CloudProps) {
  const cloudStyle = `
      bottom: calc(${cloudBottom}vh + 90px);
      ${cloudSide}: ${cloudSideAmount}px;
      z-index: ${cloudZIndex}
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
