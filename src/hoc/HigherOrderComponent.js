import { useState } from "react";

const HigherOrderComponent = (Component) => {
  function UpdatedComponent() {
    const [donation, setDonation] = useState(340);
    const doneazaSumaRandom = () => {
      const sumaRandom = Math.floor(Math.random() * 1000);
      setDonation((prevDonation) => prevDonation + sumaRandom);
    };

    return <Component donation={donation} doneaza={doneazaSumaRandom} />;
  }

  return UpdatedComponent;
};
export default HigherOrderComponent;
