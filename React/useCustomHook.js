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




// 2.   my hook
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return {loading,data};
};

function App() {

  const {loading,data} = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>
      {loading ? <div>Loading...</div> :
      <ul>
       <li>{data.id}</li>
       <li>{data.title}</li>
      </ul>
      }
    </div>
  )
}

export default App;