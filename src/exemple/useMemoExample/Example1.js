import { useState, useMemo } from "react";

const users = ["Eve", "Alice", "Charlie", "Bob", "David"];

const Example1 = () => {
  const [sortType, setSortType] = useState("asc");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const sortedUsers = useMemo(() => {
    console.log("sorting");

    if (sortType === "asc") {
      return users.sort((a, b) => {
        return a.localeCompare(b);
      });
    } else {
      return users.sort((a, b) => b.localeCompare(a));
    }
  }, [sortType]);

  return (
    <div
      style={{
        backgroundColor: isDarkTheme === true ? "black" : "wheat",
        color: isDarkTheme === true ? "wheat" : "black",
      }}
    >
      <button
        onClick={() => {
          setSortType(sortType === "asc" ? "desc" : "asc");
        }}
      >
        Change Sorting
      </button>

      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>

      <ul>
        {sortedUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example1;
