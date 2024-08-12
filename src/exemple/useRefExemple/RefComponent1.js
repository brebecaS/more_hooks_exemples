import { useEffect, useRef, useState } from "react";

const RefComponent1 = () => {
  const ref = useRef(1);
  const [text, setText] = useState("");

  useEffect(() => {
    ref.current++;
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h3>I re-rendered {ref.current} times.</h3>
    </div>
  );
};
export default RefComponent1;
