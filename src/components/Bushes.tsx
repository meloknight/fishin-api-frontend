import Bush from "./Bush";

export default function Bushes() {
  return (
    <>
      {/* LEFT SIDE */}
      <Bush
        bushPosition={{
          bushBottom: -80,
          bushSide: "left",
          bushSideAmount: -120,
          bushZIndex: 30,
          bushWidth: 300,
          bushHeight: 150,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -120,
          bushSide: "left",
          bushSideAmount: 80,
          bushZIndex: 30,
          bushWidth: 300,
          bushHeight: 150,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: 40,
          bushSide: "left",
          bushSideAmount: -30,
          bushZIndex: 30,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: 0,
          bushSide: "left",
          bushSideAmount: 130,
          bushZIndex: 30,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -10,
          bushSide: "left",
          bushSideAmount: 170,
          bushZIndex: 30,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -40,
          bushSide: "left",
          bushSideAmount: 370,
          bushZIndex: 30,
          bushWidth: 320,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -20,
          bushSide: "left",
          bushSideAmount: 470,
          bushZIndex: 30,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -30,
          bushSide: "left",
          bushSideAmount: 440,
          bushZIndex: 30,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      {/* RIGHT SIDE */}
      <Bush
        bushPosition={{
          bushBottom: -80,
          bushSide: "right",
          bushSideAmount: -40,
          bushZIndex: 20,
          bushWidth: 400,
          bushHeight: 160,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -20,
          bushSide: "right",
          bushSideAmount: 340,
          bushZIndex: 20,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -35,
          bushSide: "right",
          bushSideAmount: 370,
          bushZIndex: 20,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -48,
          bushSide: "right",
          bushSideAmount: 440,
          bushZIndex: 20,
          bushWidth: 60,
          bushHeight: 60,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: 35,
          bushSide: "right",
          bushSideAmount: -80,
          bushZIndex: 20,
          bushWidth: 180,
          bushHeight: 80,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -70,
          bushSide: "right",
          bushSideAmount: 470,
          bushZIndex: 20,
          bushWidth: 260,
          bushHeight: 100,
        }}
      />
      <Bush
        bushPosition={{
          bushBottom: -70,
          bushSide: "right",
          bushSideAmount: 470,
          bushZIndex: 20,
          bushWidth: 260,
          bushHeight: 100,
        }}
      />
    </>
  );
}
