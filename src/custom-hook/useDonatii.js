import { useState } from "react";

const useDonatii = () => {
  const [sumaStransa, setSumaStransa] = useState(0);

  const doneazaSumaRandom = () => {
    const sumaRandom = Math.ceil(Math.random() * 1000);
    setSumaStransa((prevSumaStransa) => prevSumaStransa + sumaRandom);
  };

  return { sumaStransa, doneazaSumaRandom };
};

export default useDonatii;
