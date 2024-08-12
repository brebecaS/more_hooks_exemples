import { useState, useMemo } from "react";

const users = ["Eve", "Alice", "Charlie", "Bob", "David"];

const sortUsers = (users, sortingType) => {
  console.log("sorting users");
  if (sortingType === "ascending") {
    return users.sort();
  } else return users.sort((a, b) => b.localeCompare(a));
  // return users.sort().reverse(); O(n^2) + O(n) = O(n^2)
};

const MemoComponent = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sortingType, setSortingType] = useState("ascending");

  const sortedUsers = useMemo(() => {
    return sortUsers(users, sortingType);
  }, [sortingType]);

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
        height: "100vh",
      }}
    >
      <button
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          if (sortingType === "ascending") setSortingType("descending");
          if (sortingType === "descending") setSortingType("ascending");
        }}
      >
        Toggle sort
      </button>
      <ul>
        {sortedUsers.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </div>
  );
};
export default MemoComponent;
