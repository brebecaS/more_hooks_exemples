import { useState } from "react";

const HOC = (Component) => {
  function UpdatedComponent() {
    const [sumaStransa, setSumaStransa] = useState(0);

    const doneazaSumaRandom = () => {
      const sumaRandom = Math.ceil(Math.random() * 1000);
      setSumaStransa((prevSumaStransa) => prevSumaStransa + sumaRandom);
    };

    return (
      <Component
        doneazaSumaRandom={doneazaSumaRandom}
        sumaStransa={sumaStransa}
      />
    );
  }

  return UpdatedComponent;
};
export default HOC;
