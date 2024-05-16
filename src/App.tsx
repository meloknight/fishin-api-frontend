import "./app.scss";

import Birds from "./components/Birds";
import Clouds from "./components/Clouds";
import Mountains from "./components/Mountains";
import Bushes from "./components/Bushes";
import InfoContainer from "./components/InfoContainer";
import { useState, createContext } from "react";

import { GiFishingHook, GiCirclingFish } from "react-icons/gi";

export const themeContext = createContext("day");

function App() {
  const [fishCardDown, setFishCardDown] = useState(true);
  // themes available - day, night, sunset(maybe later)
  const [theme, setTheme] = useState("day");

  const [goFishinCardInfo, setGoFishinCardInfo] = useState({
    fish_name: "No fish yet",
    fish_length_cms: 0,
    fish_weight_kgs: 0,
  });

  // function themeProvider(props: any) {}

  function FishInfoCard() {
    return (
      <section
        className={`fish-info-card ${
          fishCardDown ? "fish-info-card-away" : "fish-info-card-animation"
        } ${theme === "night" ? "night-fish-info-card" : ""}`}
      >
        {/* <section className="fish-info-card fish-info-card-away"> */}
        <h4 className={`nice-catch`}>Nice Catch!</h4>
        <button
          onClick={() => setFishCardDown(true)}
          className={`info-card-close-button ${
            theme === "night" ? "night-info-card-close-button" : ""
          }`}
        >
          X
        </button>
        <div className="info-card-section">
          <GiFishingHook className="fishing-icon" />
          <h1 className="info-card-fish-name">{goFishinCardInfo.fish_name}</h1>
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
          <p>{goFishinCardInfo.fish_weight_kgs} kg</p>
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
          <p>{goFishinCardInfo.fish_length_cms} cm</p>
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
          <p className="origin-fish-info-card">
            Legend of Zelda: Majora's Mask
          </p>
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
      <themeContext.Provider value={theme}>
        <div
          className={`top-container ${theme === "night" ? "night-sky" : ""}`}
        >
          <div className={`title ${theme === "night" ? "night-title" : ""}`}>
            Fishin API
          </div>
          <div className="sun-container">
            <button
              onClick={() => {
                if (theme === "night") setTheme("day");
                else setTheme("night");
              }}
              className={`sun ${theme === "night" ? "moon" : ""}`}
            ></button>
            <div
              className={`${theme === "night" ? "moon-flare" : "sun-flare"}`}
            ></div>
            {theme === "night" ? <div className={`moon-circle`}></div> : ""}
          </div>
          <Birds />
          <Clouds />
          <Mountains />
          {/* THE BOAT SECTION */}
          <img
            className={`boats boat-1 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-2 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-3 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-4 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-5 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-6 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-7 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-8 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-9 ${theme === "night" ? "night-boats" : ""}`}
            src="src/assets/boat.svg"
            alt="boat"
          />
          <img
            className={`boats boat-10 ${
              theme === "night" ? "night-boats" : ""
            }`}
            src="src/assets/boat.svg"
            alt="boat"
          />

          <Bushes />
          <FishInfoCard />
          <button
            onClick={() => getGoFishin()}
            className={`go-fishin-button ${
              theme === "night" ? "night-go-fishin-button" : ""
            }`}
          >
            Go Fishin!
          </button>
        </div>
        <div
          className={`next-container ${
            theme === "night" ? "night-next-container" : ""
          }`}
        >
          <InfoContainer />
          <img
            className="fish-1"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-2"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-3"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-4"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-5"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-6"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-7"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-8"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-9"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-10"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="fish-11"
            src="src/assets/fish-face-left.svg"
            alt="fish-facing-left"
          />
          <img
            className="seaweed-1"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-2"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-3"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-4"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-5"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-6"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-7"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-8"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
          <img
            className="seaweed-9"
            src="src/assets/seaweed.svg"
            alt="seaweed"
          />
        </div>
      </themeContext.Provider>
    </>
  );
}

export default App;
