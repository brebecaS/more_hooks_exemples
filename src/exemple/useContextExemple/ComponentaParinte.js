import ComopnentaIntermediara from "./ComponentaInttermediara";
import { useState, createContext } from "react";

export const ThemeContext = createContext();
export const FontSizeContext = createContext();

const ComponentaParinte = () => {
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(10);

  return (
    <div>
      <button
        onClick={() => {
          if (theme === "dark") setTheme("light");
          else setTheme("dark");
        }}
      >
        Toggle Theme
      </button>
      <button onClick={() => setFontSize(fontSize + 10)}>
        Increase font size by 10 px
      </button>
      <FontSizeContext.Provider value={fontSize}>
        <ThemeContext.Provider value={theme}>
          <ComopnentaIntermediara />
        </ThemeContext.Provider>
      </FontSizeContext.Provider>
    </div>
  );
};

export default ComponentaParinte;
