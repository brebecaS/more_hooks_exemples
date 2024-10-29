import useDonatii from "./useDonatii";

const AsociatiaUNICEF = () => {
  const { doneazaSumaRandom, sumaStransa } = useDonatii();

  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ textAlign: "center", width: "100%" }}>Asociatia UNICEF</h1>
      <p>
        UNICEF este o organizație internațională care are ca scop protejarea
        drepturilor copiilor și asigurarea că aceștia au o copilărie fericită.
      </p>
      <button
        onClick={() => {
          doneazaSumaRandom();
        }}
      >
        Doneaza
      </button>
      <p>
        Suma stransa: <b>{sumaStransa}</b>
      </p>
    </div>
  );
};

export default AsociatiaUNICEF;
