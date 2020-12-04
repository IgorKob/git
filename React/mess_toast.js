// https://github.com/fkhadra/react-toastify
// https://reactgo.com/react-toastify/
// npm i react-toastify
// toast - це спливаючі повідомлення, які самі зникають або ми їх можемо закрити на Х


// 1.  App.js
// toast (): метод toast приймає contentяк перший аргумент, це означає, який вміст ми повинні бачити під час сповіщення про тост (як ми додали You clicked the buttonу наведеному вище коді).
// ToastContainer: Щоб відтворити тост, нам потрібно додати ToastContainerкомпонент у наш додаток.
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  function Notify() {
    toast("You clicked the button");
  }

  return (
    <div className="App">
      <ToastContainer />
      <button onClick={Notify}>Run toast</button>
    </div>
  );
}

export default App;



// 2.
// За замовчуванням тости відображатимуться на top-rightпозиції вашого браузера, ми можемо змінити позицію тостів, додавши до toastметоду другий аргумент .
  function Notify() {
    toast("You clicked the button",{
        //toast is positioned on bottom right
        position: "bottom-right"
    });
  }
// Це інші доступні значення позицій.
    // top-right,
    // top-center,
    // top-left
    // bottom-right,
    // bottom-center,
    // bottom-left


// 3.
// За замовчуванням тости автоматично закриваються через 5000мілісекунди (5 секунд), ми можемо затримати час закриття тостів, додавши autoCloseвластивість до toastметоду.
  function Notify() {
    toast("You clicked the button",{
        position: "bottom-right",
        //toast will be closed after 10 seconds
        autoClose: 10000
    });
  }
// Ми також можемо відключити автоматичне закриття, встановивши для autoCloseвластивості false.
  function Notify() {
    toast("You clicked the button",{
        position: "bottom-right",
        autoClose: false
    });
  }