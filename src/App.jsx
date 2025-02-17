import "./App.css";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
