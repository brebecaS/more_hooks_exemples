import { useContext } from "react";
import { ThemeContext, FontSizeContext } from "./ContextComponent";

const ContextChildComponent = () => {
  const { darkTheme } = useContext(ThemeContext);

  const { fontSize } = useContext(FontSizeContext);

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
        height: "100vh",
        fontSize: `${fontSize}px`,
      }}
    >
      <h1>Context Child Component</h1>
    </div>
  );
};

export default ContextChildComponent;
