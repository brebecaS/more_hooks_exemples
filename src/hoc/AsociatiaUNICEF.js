import HigherOrderComponent from "./HigherOrderComponent";

const AsociatiaUNICEF = ({ doneaza, donation }) => {
  return (
    <div>
      <h1>UNICEF</h1>

      <button onClick={doneaza}>DONEAZA</button>
      <h2>Suma stransa: {donation}</h2>
    </div>
  );
};

export default HigherOrderComponent(AsociatiaUNICEF);
