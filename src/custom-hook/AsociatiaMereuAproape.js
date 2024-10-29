import useDonatii from "./useDonatii";

const AsociatiaMereuAproape = () => {
  const { doneazaSumaRandom, sumaStransa } = useDonatii();

  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ textAlign: "center", width: "100%" }}>
        Asociatia Mereu Aproape
      </h1>
      <p>
        Asociatia Mereu Aproape este o asociatie non-guvernamentala care ofera
        sprijin copiilor cu dizabilitati si familiilor acestora.
      </p>
      <button onClick={() => doneazaSumaRandom()}>Doneaza</button>
      <p>
        Suma stransa: <b>{sumaStransa}</b>
      </p>
    </div>
  );
};
export default AsociatiaMereuAproape;
