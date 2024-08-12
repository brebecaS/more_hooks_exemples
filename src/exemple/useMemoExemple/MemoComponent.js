import { useState, useMemo } from "react";

const MemoComponent = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
        height: "100vh",
      }}
    >
      <button
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        Click me
      </button>
    </div>
  );
};
export default MemoComponent;
