import { useContext } from "react";
import { themeContext } from "../App";

import { GiFishingHook, GiCirclingFish } from "react-icons/gi";

export default function FishInfoCard(props: any) {
  const theme = useContext(themeContext);
  return (
    <section
      className={`fish-info-card ${
        props.fishCardDown ? "fish-info-card-away" : "fish-info-card-animation"
      } ${theme === "night" ? "night-fish-info-card" : ""}`}
    >
      {/* <section className="fish-info-card fish-info-card-away"> */}
      <h4 className={`nice-catch`}>Nice Catch!</h4>
      <button
        onClick={() => props.setFishCardDown(true)}
        className={`info-card-close-button ${
          theme === "night" ? "night-info-card-close-button" : ""
        }`}
      >
        X
      </button>
      <div className="info-card-section">
        <GiFishingHook className="fishing-icon" />
        <h1 className="info-card-fish-name">
          {props.goFishinCardInfo.fish_name}
        </h1>
        <GiCirclingFish className="fishing-icon" />
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Weight:</p>
        <p>{props.goFishinCardInfo.fish_weight_kgs} kg</p>
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Length:</p>
        <p>{props.goFishinCardInfo.fish_length_cms} cm</p>
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Location:</p>
        <p className="location-fish-info-card">Southern Termina Swamps</p>
      </div>
      <div
        className={`info-card-divider-line ${
          theme === "night" ? "night-info-card-divider-line" : ""
        }`}
      ></div>
      <div
        className={`info-card-section ${
          theme === "night" ? "night-info-card-section" : ""
        }`}
      >
        <p>Origin:</p>
        <p className="origin-fish-info-card">Legend of Zelda: Majora's Mask</p>
      </div>
    </section>
  );
}
