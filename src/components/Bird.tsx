export default function Bird(props: any) {
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
