import { useRef, useEffect } from "react";

const Example3 = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const acceptedColors = ["red", "green", "blue"];

  useEffect(() => {
    divRef.current.style.backgroundColor = "orange";
  }, []);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => {
          if (acceptedColors.find((color) => e.target.value === color)) {
            divRef.current.style.backgroundColor = e.target.value;
          }
        }}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus input
      </button>
      <div
        ref={divRef}
        style={{
          border: "1px solid red",
          width: "100px",
          height: "100px",
        }}
      ></div>
    </>
  );
};
export default Example3;
