import { useState, createContext } from "react";
import ComponentaIntermadiara from "./ComponentaIntermadiara";

export const ThemeContext = createContext();
export const FontSizeContext = createContext();

const ContextComponent = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const contextValue = { darkTheme: darkTheme };

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => {
      if (prevDarkTheme === true) {
        return false;
      }
      return true;
    });
  };

  return (
    <FontSizeContext.Provider value={{ fontSize: 7 }}>
      <ThemeContext.Provider value={contextValue}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ComponentaIntermadiara />
      </ThemeContext.Provider>
    </FontSizeContext.Provider>
  );
};
export default ContextComponent;
