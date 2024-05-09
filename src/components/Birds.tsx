import Bird from "./Bird";

export default function Birds() {
  return (
    <>
      <Bird
        birdPosition={{
          birdBottom: 530,
          birdSide: "right",
          birdSideAmount: 230,
          birdZIndex: 0,
        }}
      />
      <Bird
        birdPosition={{
          birdBottom: 540,
          birdSide: "right",
          birdSideAmount: 252,
          birdZIndex: 0,
        }}
      />
      <Bird
        birdPosition={{
          birdBottom: 510,
          birdSide: "right",
          birdSideAmount: 240,
          birdZIndex: 0,
        }}
      />
      <Bird
        birdPosition={{
          birdBottom: 380,
          birdSide: "right",
          birdSideAmount: 400,
          birdZIndex: 9,
        }}
      />
      <Bird
        birdPosition={{
          birdBottom: 370,
          birdSide: "right",
          birdSideAmount: 410,
          birdZIndex: 9,
        }}
      />
      <Bird
        birdPosition={{
          birdBottom: 300,
          birdSide: "left",
          birdSideAmount: 110,
          birdZIndex: 11,
        }}
      />
      <Bird
        birdPosition={{
          birdBottom: 305,
          birdSide: "left",
          birdSideAmount: 90,
          birdZIndex: 11,
        }}
      />
    </>
  );
}
