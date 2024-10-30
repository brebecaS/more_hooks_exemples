import { useState, useMemo } from "react";
const Example2 = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [inputNumber, setInputNumber] = useState(10);

  const bigFunctionValue = useMemo(() => {
    console.log("big function called");
    return bigFunction(inputNumber);
  }, [inputNumber]);

  return (
    <div
      style={{
        backgroundColor: isDarkTheme === true ? "black" : "wheat",
        color: isDarkTheme === true ? "wheat" : "black",
        height: 200,
      }}
    >
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => {
          setInputNumber(Number(e.target.value));
        }}
      ></input>
      <p>
        {inputNumber} + 1 = {bigFunctionValue}
      </p>

      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>
    </div>
  );
};

function bigFunction(number) {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return number + 1;
}

export default Example2;
