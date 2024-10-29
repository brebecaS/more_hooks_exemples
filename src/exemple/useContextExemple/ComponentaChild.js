import { useContext } from "react";
import { ThemeContext, FontSizeContext } from "./ComponentaParinte";

const ComponentaChild = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const fontSize = useContext(FontSizeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#ccc",
        color: theme === "dark" ? "#ccc" : "#333",
        height: "200px",
        fontSize: fontSize,
      }}
    >
      <button
        onClick={() => {
          if (theme === "dark") setTheme("light");
          else setTheme("dark");
        }}
      >
        Toggle Theme
      </button>
      <h1>Child Component</h1>
    </div>
  );
};
export default ComponentaChild;
