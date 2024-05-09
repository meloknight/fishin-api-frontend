import "./app.scss";

import Birds from "./components/Birds";
import Clouds from "./components/Clouds";
import Mountains from "./components/Mountains";
import Bush from "./components/Bush";

function App() {
  return (
    <>
      <div className="top-container">
        <div className="sun"></div>
        <Birds />
        <Clouds />
        <Mountains />
        <Bush
          bushPosition={{
            bushBottom: -80,
            bushSide: "left",
            bushSideAmount: -90,
            bushZIndex: 1000,
            bushWidth: 300,
            bushHeight: 150,
          }}
        />
      </div>
      <div className="next-container"></div>
    </>
  );
}

export default App;
