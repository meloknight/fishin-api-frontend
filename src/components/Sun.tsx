import { useContext } from "react";
import { themeContext } from "../App";

export default function Sun(props: any) {
  const theme = useContext(themeContext);
  return (
    <>
      <div className="sun-container">
        <button
          onClick={() => {
            if (theme === "night") props.setTheme("day");
            else props.setTheme("night");
          }}
          className={`sun ${theme === "night" ? "moon" : ""}`}
        ></button>
        <div
          className={`${theme === "night" ? "moon-flare" : "sun-flare"}`}
        ></div>
        {theme === "night" ? <div className={`moon-circle`}></div> : ""}
      </div>
    </>
  );
}
