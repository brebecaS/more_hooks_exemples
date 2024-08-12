import { useState, createContext } from "react";
import ContextChildComponent from "./ContextChildComponent";

export const ThemeContext = createContext();

const ContextComponent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ContextChildComponent />
    </ThemeContext.Provider>
  );
};
export default ContextComponent;
