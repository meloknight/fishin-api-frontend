import Cloud from "./Cloud";

export default function Clouds() {
  return (
    <>
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
          cloudBottom: 400,
          cloudSide: "right",
          cloudSideAmount: 450,
          cloudZIndex: 11,
        }}
      />
    </>
  );
}
