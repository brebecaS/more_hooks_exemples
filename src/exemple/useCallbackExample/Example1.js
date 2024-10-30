import { useState, useCallback } from "react";
import List from "./List";

const Example1 = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [inputNumber, setInputNumber] = useState(0);

  let x = 0;

  const getItems = useCallback(() => {
    return [inputNumber, inputNumber + 1, inputNumber + 2];
  }, [inputNumber]);

  return (
    <div
      style={{
        backgroundColor: isDarkTheme === true ? "black" : "wheat",
        color: isDarkTheme === true ? "wheat" : "black",
        height: 200,
      }}
    >
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>

      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(parseInt(e.target.value))}
      />
      <List getItems={getItems} x={x} />
    </div>
  );
};
export default Example1;
