import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const multiply = () => {
    const result = num1 * num2;
    setResult(result);
  };

  return (
    <div className="App">
      <h1>Multiply App</h1>
      <label>
        Num1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </label>
      <label>
        Num2:
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </label>
      <button onClick={multiply}>Multiply</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
