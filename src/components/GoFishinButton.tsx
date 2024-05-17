import { useContext } from "react";
import { themeContext } from "../App";
import { getGoFishin } from "../helpers";

export default function GoFishinButton(props: any) {
  const theme = useContext(themeContext);

  function fishInfoButtonClick() {
    if (props.fishCardDown === "initial" || props.fishCardDown === "down") {
      getGoFishin(props.setGoFishinCardInfo, props.setFishCardDown);
      // props.setFishCardDown("up");
    } else {
      props.setFishCardDown("down");
    }
  }
  return (
    <>
      <button
        onClick={() => fishInfoButtonClick()}
        className={`go-fishin-button ${
          theme === "night" ? "night-go-fishin-button" : ""
        }`}
      >
        {props.fishCardDown === "initial" || props.fishCardDown === "down"
          ? "Go Fishin!"
          : "Release!"}
      </button>
    </>
  );
}
