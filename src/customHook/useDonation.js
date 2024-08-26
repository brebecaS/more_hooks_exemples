import { useState } from "react";

const useDonation = () => {
  const [sumaStransa, setSumaStransa] = useState(0);

  const doneazaSumaRandom = () => {
    const sumaRandom = Math.floor(Math.random() * 1000);
    setSumaStransa((prevSumaStansa) => prevSumaStansa + sumaRandom);
  };

  return { doneazaSumaRandom, sumaStransa };
};
export default useDonation;
