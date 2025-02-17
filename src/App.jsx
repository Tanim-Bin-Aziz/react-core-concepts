import "./App.css";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concepts</h1>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(3)}>add</button>
    </>
  );
}

export default App;
