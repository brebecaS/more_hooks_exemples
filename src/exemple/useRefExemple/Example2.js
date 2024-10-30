import { useState, useEffect, useRef } from "react";

const Example2 = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const countRerendersRef = useRef(0);

  useEffect(() => {
    countRerendersRef.current++;
  });

  return (
    <div
      style={{
        backgroundColor: isDarkTheme === true ? "black" : "wheat",
        color: isDarkTheme === true ? "wheat" : "black",
        height: 400,
      }}
    >
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>

      <h2>The component re-rendered {countRerendersRef.current} times.</h2>
    </div>
  );
};

export default Example2;
