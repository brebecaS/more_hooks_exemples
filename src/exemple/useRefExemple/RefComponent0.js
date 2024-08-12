import { useRef, useState } from "react";
const RefComponent0 = () => {
  const [count, setCount] = useState(0);

  const ref = useRef(0); // const ref = { current: 0 }
  console.log(ref.current);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          if (count === 3) {
            ref.current = count;
          }
        }}
      >
        Count: {count}
      </button>
    </div>
  );
};
export default RefComponent0;
