import { useContext } from "react";
import { ThemeContext, FontSizeContext } from "./ComponentaParinte";

const ComponentaChild = () => {
  const theme = useContext(ThemeContext);
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
      <h1>Child Component</h1>
    </div>
  );
};
export default ComponentaChild;
