import { useState, useRef } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment State Value Count: {count}
      </button>

      <button onClick={() => countRef.current++}>
        Increment count Ref value: {countRef.current}
      </button>

      <button onClick={() => countLet++}>
        Increment count let value: {countLet}
      </button>
    </div>
  );
};

export default Example1;
