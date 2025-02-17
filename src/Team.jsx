import { useState } from "react";

export default function Team() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const teamstyle = {
    border: "2px solid green",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamstyle}>
      <h3>Players:{count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
