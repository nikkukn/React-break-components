import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(time);

  function setTime() {
    const now = new Date().toLocaleTimeString();
    setCount(now);
  }
  setInterval(setTime, 1000);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={setTime}>+</button>
    </div>
  );
}

export default App;
