// https://reactgo.com/react-load-json-file/
// Ми можемо завантажити файл JSON у компонент реакції, подібно до того, 
// як ми імпортуємо модулі JavaScript або модулі CSS за допомогою importоператора es6 .


// 1.   
// ./users.json
[
  {
    "id": 1,
    "name": "John"
  },
  {
    "id": 2,
    "name": "Pen"
  },
  {
    "id": 3,
    "name": "Lara"
  }
]

// ./App.js
// ми спочатку імпортували users.json файл як Users масив JSON і
// відтворили його в dom за допомогою методу JavaScriptmap() .
import React from "react";
import Users from "./users.json";

export default function App() {

  return (
    <div className="App">
      <h1>Users list</h1>
      {Users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}


