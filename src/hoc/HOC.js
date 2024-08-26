import { useState } from "react";

const HOC = (Comonent) => {
  function UpdatedComponent() {
    const [sumaStransa, setSumaStransa] = useState(0);

    const doneazaSumaRandom = () => {
      const sumaRandom = Math.floor(Math.random() * 1000);
      setSumaStransa((prevSumaStansa) => prevSumaStansa + sumaRandom);
    };

    return (
      <Comonent
        doneazaSumaRandom={doneazaSumaRandom}
        sumaStransa={sumaStransa}
      />
    );
  }
  return UpdatedComponent;
};

export default HOC;
