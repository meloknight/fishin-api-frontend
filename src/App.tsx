import "./app.scss";

import Birds from "./components/Birds";
import Clouds from "./components/Clouds";
import Mountains from "./components/Mountains";
import Bushes from "./components/Bushes";
import InfoContainer from "./components/InfoContainer";
import { useState } from "react";

import { GiFishingHook, GiCirclingFish } from "react-icons/gi";

function App() {
  const [fishCardDown, setFishCardDown] = useState(true);
  const [dayMode, setDayMode] = useState(true);
  const [goFishinCardInfo, setGoFishinCardInfo] = useState({
    fish_name: "No fish yet",
    fish_length_cms: 0,
    fish_weight_kgs: 0,
  });

  function FishInfoCard() {
    return (
      <section
        className={`fish-info-card ${
          fishCardDown ? "fish-info-card-away" : "fish-info-card-animation"
        }`}
      >
        {/* <section className="fish-info-card fish-info-card-away"> */}
        <h4 className="nice-catch">Nice Catch!</h4>
        <button
          onClick={() => setFishCardDown(true)}
          className="info-card-close-button"
        >
          X
        </button>
        <div className="info-card-section">
          <GiFishingHook className="fishing-icon" />
          <h1 className="info-card-fish-name">{goFishinCardInfo.fish_name}</h1>
          <GiCirclingFish className="fishing-icon" />
        </div>
        <div className="info-card-divider-line"></div>
        <div className="info-card-section">
          <p>Weight:</p>
          <p>{goFishinCardInfo.fish_weight_kgs} kg</p>
        </div>
        <div className="info-card-divider-line"></div>
        <div className="info-card-section">
          <p>Length:</p>
          <p>{goFishinCardInfo.fish_length_cms} cm</p>
        </div>
        <div className="info-card-divider-line"></div>
        <div className="info-card-section">
          <p>Location:</p>
          <p>Southern Termina Swamps</p>
        </div>
        <div className="info-card-divider-line"></div>
        <div className="info-card-section">
          <p>Origin:</p>
          <p>Legend of Zelda: Majora's Mask</p>
        </div>
      </section>
    );
  }

  async function getGoFishin() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/fish/gofishin"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFishCardDown(false);
      console.log(data);

      setGoFishinCardInfo((prevInfo) => ({
        ...prevInfo,
        fish_name: data.fish_name,
        fish_length_cms: data.fish_length_cms,
        fish_weight_kgs: data.fish_weight_kgs,
      }));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="top-container">
        <div className="title">Fishin API</div>
        <div className="sun"></div>
        <Birds />
        <Clouds />
        <Mountains />
        <Bushes />
        <FishInfoCard />
        <button onClick={() => getGoFishin()} className="go-fishin-button">
          Go Fishin!
        </button>
      </div>
      <div className="next-container">
        <InfoContainer />
      </div>
    </>
  );
}

export default App;
