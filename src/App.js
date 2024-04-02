import React, { useState, useEffect } from "react";

const ScrollableList = ({ start, end, direction }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newItem = start + prevData.length;
        return newItem <= end ? [...prevData, newItem] : prevData;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        overflow: "auto",
        height: "600px", // Set your preferred height
        width: "600px", // Set your preferred width
        border: "1px solid #ccc",
        margin: "10px",
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            border: "1px solid #eee",
            margin: "2px",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ScrollableList start={1} end={100} direction="vertical" />
      <ScrollableList start={100} end={200} direction="horizontal" />
      <ScrollableList start={200} end={300} direction="vertical" />
    </div>
  );
};

export default App;
