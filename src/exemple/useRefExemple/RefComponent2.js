import { useRef, useEffect } from "react";

const RefComponent2 = () => {
  const divRef = useRef(null); // const divRef = { current: null }
  const inputRef = useRef(null); // const inputRef = { current: null }

  useEffect(() => {
    setTimeout(() => {
      divRef.current.style.color = "green";
    }, 2000);
  });

  return (
    <>
      <div ref={divRef}>RefComponent2</div>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus input
      </button>
    </>
  );
};
export default RefComponent2;
