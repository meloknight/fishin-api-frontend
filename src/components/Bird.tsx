type BirdProps = {
  birdBottom: number;
  birdSide: string;
  birdSideAmount: number;
  birdZIndex: number;
};

export default function Bird({
  birdBottom,
  birdSide,
  birdSideAmount,
  birdZIndex,
}: BirdProps) {
  const birdStyle = `
    bottom: ${birdBottom}px;
    ${birdSide}: ${birdSideAmount}px;
    z-index: ${birdZIndex}
  `;

  return (
    <>
      <div style={{ cssText: birdStyle }} className="bird-container">
        <img src="src/assets/bird.svg" alt="bird" />
      </div>
    </>
  );
}
