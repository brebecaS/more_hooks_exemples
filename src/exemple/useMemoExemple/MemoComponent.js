import { useState, useMemo } from "react";

const MemoComponent = () => {
  const darkTheme = false;

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
        height: "100vh",
      }}
    ></div>
  );
};
export default MemoComponent;
