import AsociatiaMereuAproape from "./AsociatiaMereuAproape";
import AsociatiaUNICEF from "./AsociatiaUNICEF";

const EvenimenintCaritabil = () => {
  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ textAlign: "center", width: "100%" }}>
        Eveniment Caritabil
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <AsociatiaMereuAproape />
        <AsociatiaUNICEF />
      </div>
    </div>
  );
};

export default EvenimenintCaritabil;
