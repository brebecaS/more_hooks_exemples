import HOC from "./HOC";
const AsociatiaMereuAproape = ({ doneazaSumaRandom, sumaStransa }) => {
  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ textAlign: "center" }}>Asociatia Mereu Aproape</h1>
      <p>
        Asociatia Mereu Aproape este o asociatie non-guvernamentala care ofera
        sprijin copiilor cu dizabilitati si familiilor acestora.
      </p>
      <button onClick={doneazaSumaRandom}>Doneaza</button>
      <p>Suma stransa: {sumaStransa}</p>
    </div>
  );
};
export default HOC(AsociatiaMereuAproape);
