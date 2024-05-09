import "./app.scss";

function App() {
  function Mountains() {
    return (
      <>
        {/* distant mountains */}
        <div className={`mountain distant-mountain md1`}></div>
        <div className={`mountain distant-mountain md2`}></div>
        <div className={`mountain distant-mountain md3`}></div>
        <div className={`mountain distant-mountain md4`}></div>
        <div className={`mountain distant-mountain md5`}></div>
        <div className={`mountain distant-mountain md6`}></div>
        <div className={`mountain distant-mountain md7`}></div>
        {/* middle mountains */}
        <div className={`mountain middle-mountain mm1`}></div>
        <div className={`mountain middle-mountain mm2`}></div>
        <div className={`mountain middle-mountain mm3`}></div>
        <div className={`mountain middle-mountain mm4`}></div>
        <div className={`mountain middle-mountain mm5`}></div>
        <div className={`mountain middle-mountain mm6`}></div>
        {/* close mountains */}
        <div className={`mountain close-mountain mc0`}></div>
        <div className={`mountain close-mountain mc1`}></div>
        <div className={`mountain close-mountain mc2`}></div>
        <div className={`mountain close-mountain mc3`}></div>
        <div className={`mountain close-mountain mc4`}></div>
        <div className={`mountain close-mountain mc5`}></div>
        <div className={`mountain close-mountain mc6`}></div>
        <div className={`mountain close-mountain mc7`}></div>
      </>
    );
  }

  function Cloud(props: any) {
    const cloudStyle = `
      bottom: ${props.cloudPosition.cloudBottom}px;
      ${props.cloudPosition.cloudSide}: ${props.cloudPosition.cloudSideAmount}px;
      z-index: ${props.cloudPosition.cloudZIndex}
    `;
    return (
      <>
        <div style={{ cssText: cloudStyle }} className="cloud-container">
          <div className="cloud-part-1"></div>
          <div className="cloud-part-2"></div>
          <div className="cloud-part-3"></div>
          <div className="cloud-part-4"></div>
        </div>
      </>
    );
  }

  function Bird(props: any) {
    const birdStyle = `
    bottom: ${props.birdPosition.birdBottom}px;
    ${props.birdPosition.birdSide}: ${props.birdPosition.birdSideAmount}px;
    z-index: ${props.birdPosition.birdZIndex}
  `;

    return (
      <>
        <div style={{ cssText: birdStyle }} className="bird-container">
          <img src="src/assets/bird.svg" alt="bird" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="top-container">
        <div className="sun"></div>
        <Bird
          birdPosition={{
            birdBottom: 400,
            birdSide: "left",
            birdSideAmount: 100,
            birdZIndex: 200,
          }}
        />
        <Cloud
          cloudPosition={{
            cloudBottom: 710,
            cloudSide: "left",
            cloudSideAmount: -20,
            cloudZIndex: 6,
          }}
        />
        <Cloud
          cloudPosition={{
            cloudBottom: 500,
            cloudSide: "left",
            cloudSideAmount: -60,
            cloudZIndex: 6,
          }}
        />
        <Cloud
          cloudPosition={{
            cloudBottom: 540,
            cloudSide: "right",
            cloudSideAmount: 120,
            cloudZIndex: 4,
          }}
        />
        <Cloud
          cloudPosition={{
            cloudBottom: 480,
            cloudSide: "right",
            cloudSideAmount: 365,
            cloudZIndex: 6,
          }}
        />
        <Mountains />
      </div>
      <div className="next-container"></div>
    </>
  );
}

export default App;
