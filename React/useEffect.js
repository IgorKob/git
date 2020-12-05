// useEffect-хук для побічних ефектів, які зазвичай використовуються для взаємодії з браузером,
// DOM API або зовнішнім API, для отримання даних.
// Oскільки інтервал також очищається після кожного візуалізації, нам також потрібно
// встановити інтервал у нашому циклі оновлення. Але ми можемо сказати, що ефект запускається
// лише тоді, коли isOn змінна змінюється. Тільки при зміні однієї зі змінних у масиві ефект
// буде діяти під час циклу оновлення. Якщо масив залишатиметься порожнім, ефект буде виконуватися
// лише під час монтування та демонтажу, оскільки немає змінної, яку слід перевірити на повторний
// запуск побічного ефекту:
import React from 'react';

function App() {
  const [isOn, setIsOn] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    let interval;

    if (isOn) {
      interval = setInterval(
        () => setTimer(timer => timer + 1),
        1000,
      );
    }

    return () => clearInterval(interval);
  }, [isOn]);

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  };

  return (
    <div>
      {timer}

      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}

      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}

      <button type="button" disabled={timer === 0} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default App;


2.
import React from 'react';

function App() {
  const [type, setType] = React.useState('users');
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
          .then(response => response.json())
          .then(json => setData(json))
  }, [type]);

  return (
      <div>
          <h1>Value: {type}</h1>
          <button onClick={() => setType('users')}>Users</button>
          <button onClick={() => setType('todos')}>Todos</button>
          <button onClick={() => setType('posts')}>Posts</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  );
}


3.
// потрібно очищати память
React.useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
}, [type]);


// 4.
useEffect(() => {
  const row = localStorage.getItem('myrow') || [];
  setMyrow(JSON.parse(row));
});

useEffect(() => {
  localStorage.setItem('myrow', JSON.stringify(myrow));
}, [myrow]);


// 5.
const [menuItems, setMenuItems] = useState(null);
useEffect(() => {
  get('/menu').then((response) => setMenuItems(response.data));
}, []);
 
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMove = (event) =>
    setPosition({ x: event.clientX, y: event.clientY });
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);



// 6.   ./App.js
import React, { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
   const timeout = setTimeout(() => {
      setCount(1);
    }, 3000);

   return () => clearTimeout(timeout);
  },[]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}