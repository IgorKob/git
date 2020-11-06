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