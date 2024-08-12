import { useEffect, useRef, useState } from "react";

const RefComponent1 = () => {
  const [text, setText] = useState("text");
  const renderCount = useRef(1);
  const divColorRef = useRef(null);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div ref={divColorRef}>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h3>I re-rendered {renderCount.current} times.</h3>
      <button
        onClick={() => {
          if (divColorRef.current.style.backgroundColor === "red") {
            divColorRef.current.style.backgroundColor = "transparent";
          } else divColorRef.current.style.backgroundColor = "red";
        }}
      >
        Push
      </button>
    </div>
  );
};
export default RefComponent1;
