// https://reactgo.com/react-get-current-date/


// 1.   ./App.js
import React from "react";

export default function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App">
      <h1>Current date is {date}</h1>   // Current date is 2/8/2020
    </div>
  );
}
