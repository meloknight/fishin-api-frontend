import Cloud from "./Cloud";

export default function Clouds() {
  return (
    <>
      <Cloud
        cloudPosition={{
          // cloudBottom: 710,
          cloudBottom: 85,
          cloudSide: "left",
          cloudSideAmount: -20,
          cloudZIndex: 1,
        }}
      />
      <Cloud
        cloudPosition={{
          // cloudBottom: 500,
          cloudBottom: 55,
          cloudSide: "left",
          cloudSideAmount: -60,
          cloudZIndex: 6,
        }}
      />
      <Cloud
        cloudPosition={{
          // cloudBottom: 540,
          cloudBottom: 59,
          cloudSide: "right",
          cloudSideAmount: 120,
          cloudZIndex: 4,
        }}
      />
      <Cloud
        cloudPosition={{
          cloudBottom: 40,
          cloudSide: "right",
          cloudSideAmount: 450,
          cloudZIndex: 11,
        }}
      />
    </>
  );
}
