import { useState, useMemo } from "react";

const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

const sortUsers = (users, type) => {
  console.log("sorting users..");
  if (type === "descending") return users.sort((a, b) => (a > b ? -1 : 1));
  return users.sort();
};

const MemoComponent = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [sortType, setSortType] = useState("ascending");

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  const sortedUsers = useMemo(() => {
    return sortUsers(users, sortType);
  }, [sortType]);

  const usersList = sortedUsers.map((user) => {
    return <li key={user}>{user}</li>;
  });

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "#333" : "#ccc",
        color: darkTheme ? "#ccc" : "#333",
        height: "100vh",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button
        onClick={() => {
          setSortType((prevSortType) => {
            if (prevSortType === "ascending") return "descending";
            return "ascending";
          });
        }}
      >
        Toggle Sort
      </button>
      <h1>Users</h1>
      <ul>{usersList}</ul>
    </div>
  );
};
export default MemoComponent;
