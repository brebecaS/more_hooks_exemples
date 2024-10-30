import { useState, useEffect } from "react";

const List = ({ getItems, x }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating Items");
    setItems(getItems());
  }, [getItems]);

  // va rula doar la prima randare pentru ca x este transmis ca valoare si nu se schimba
  useEffect(() => {
    console.log("x", x);
  }, [x]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
