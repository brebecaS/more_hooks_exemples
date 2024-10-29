import ComopnentaIntermediara from "./ComponentaInttermediara";
import { useState, createContext } from "react";

export const ThemeContext = createContext();
export const FontSizeContext = createContext();

//1. Creaza un context folosind createContext din react
//2. Export contextul
//3. Faci wrapping la componnetele care au nevoie de valaorea din context cu Context.Provider
//4. Daugam valoarea in context  cu value={valoare}
//5. In componentele care au nevoie de valoare din context folosim useContext apelat cu contextul importat

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
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ComopnentaIntermediara />
        </ThemeContext.Provider>
      </FontSizeContext.Provider>
    </div>
  );
};

export default ComponentaParinte;
