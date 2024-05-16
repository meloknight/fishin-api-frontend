import { useContext } from "react";
import { themeContext } from "../App";
import { getGoFishin } from "../helpers";

export default function GoFishinButton(props: any) {
  const theme = useContext(themeContext);
  return (
    <>
      <button
        onClick={() =>
          getGoFishin(props.setFishCardDown, props.setGoFishinCardInfo)
        }
        className={`go-fishin-button ${
          theme === "night" ? "night-go-fishin-button" : ""
        }`}
      >
        Go Fishin!
      </button>
    </>
  );
}
