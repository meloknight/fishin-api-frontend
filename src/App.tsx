import "./app.scss";

import Birds from "./components/Birds";
import Clouds from "./components/Clouds";
import Mountains from "./components/Mountains";
import Bushes from "./components/Bushes";

function App() {
  return (
    <>
      <div className="top-container">
        <div className="sun"></div>
        <Birds />
        <Clouds />
        <Mountains />
        <Bushes />
      </div>
      <div className="next-container"></div>
    </>
  );
}

export default App;
