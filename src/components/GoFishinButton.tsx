import { useContext } from "react";
import { themeContext } from "../App";
import { getGoFishin } from "../helpers";

export default function GoFishinButton(props: any) {
  const theme = useContext(themeContext);

  function fishInfoButtonClick() {
    if (props.fishCardDown) {
      getGoFishin(props.setFishCardDown, props.setGoFishinCardInfo);
      props.setFishCardDown(false);
    } else {
      props.setFishCardDown(true);
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
        {props.fishCardDown ? "Go Fishin!" : "Release!"}
      </button>
    </>
  );
}
