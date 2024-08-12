import { useContext } from "react";
import { ThemeContext } from "./ContextComponent";

const ContextChildComponent = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
        height: "100vh",
      }}
    >
      <h1>Context Child Component</h1>
    </div>
  );
};

export default ContextChildComponent;
