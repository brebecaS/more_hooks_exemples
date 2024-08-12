import { useEffect, useRef, useState } from "react";

const RefComponent1 = () => {
  const [text, setText] = useState("text");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h3>I re-rendered {renderCount.current} times.</h3>
    </div>
  );
};
export default RefComponent1;
