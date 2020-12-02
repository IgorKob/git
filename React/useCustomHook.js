// https://reactgo.com/react-custom-hooks/
// створити власні гачки React Custom

// 1.
// ./counter-hook.js
import { useState } from "react";

function useCounter(val, step) {
  const [count, setCount] = useState(val);

  function Increment() {
    setCount(count + step);
  }

  function Decrement() {
    setCount(count - step);
  }

  return [count, Increment, Decrement];
}

export default useCounter;


// ./App.js
import React from "react";
import useCounter from "./counter-hook";

function App() {
  const [count, Increment, Decrement] = useCounter(0, 1);

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;