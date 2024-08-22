import AsociatiaMereuAproape from "./AsociatiaMereuAproap";
import AsociatiaUNICEF from "./AsociatiaUNICEF";

const EvenimentCaritabil = () => {
  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ textAlign: "center" }}>Eveniment Caritabil</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AsociatiaMereuAproape />
        <AsociatiaUNICEF />
      </div>
    </div>
  );
};
export default EvenimentCaritabil;
