import HOC from "./HOC";

const AsociatiaUNICEF = ({ doneazaSumaRandom, sumaStransa }) => {
  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ textAlign: "center" }}>UNICEF</h1>
      <p>
        UNICEF este o organizație internațională care are ca scop protejarea
        drepturilor copiilor și asigurarea că aceștia au o copilărie fericită.
      </p>
      <button onClick={doneazaSumaRandom}>Doneaza</button>
      <p>Suma stransa: {sumaStransa}</p>
    </div>
  );
};

export default HOC(AsociatiaUNICEF);
