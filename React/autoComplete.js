// https://reactgo.com/react-turn-off-autocomplete/
// Щоб вимкнути автозаповнення inputполів, нам потрібно встановити його autoCompleteатрибут off.
// Він повідомляє браузеру не зберігати введені користувачем дані для подальшого автозавершення.
// Браузери припиняють кешування form даних з історії сеансів.


// 1.  ./App.js
import React from "react";

export default function App() {
  return (
    <div className="App">
      <input type="text" autoComplete="off"/>
    </div>
  );
}


// 2. Ми також можемо вимкнути автозаповнення для цілої форми, замість конкретного inputполя, подібного до цього.
// ./App.js
import React from "react";

export default function App() {
  return (
    <div className="App">
      <form autoComplete="off">
         <input type="text"/>
      </form>
    </div>
  );
}
