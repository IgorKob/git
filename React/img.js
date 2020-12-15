// 1.
import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;



// 2.              svg
import { ReactComponent as Logo } from './logo.svg';

function App() {
  return (
    <div>
      {/* Logo is an actual React component */}
      <Logo />
    </div>
  );
}



// 0.
< link rel = " icon " href = " % PUBLIC_URL% / favicon.ico " />   
// Тільки файли всередині public папки будуть доступні за %PUBLIC_URL% префіксом. 
// Якщо вам потрібно використовувати файл із src або node_modules, вам доведеться скопіювати його туди, 
// щоб чітко вказати намір зробити цей файл частиною збірки.

// Під час запуску програма npm run buildCreate React замінить %PUBLIC_URL% правильний абсолютний шлях, 
// тому ваш проект працює, навіть якщо ви використовуєте маршрутизацію на стороні клієнта або розміщуєте 
// його за некореневою URL-адресою.

// У коді JavaScript ви можете використовувати process.env.PUBLIC_URL для подібних цілей:
render() {
   // Примітка: це евакуаційний люк, і ним слід користуватися економно!
  // Зазвичай ми рекомендуємо використовувати `import` для отримання URL-адрес об’єктів
  // як описано в “Додавання зображень та шрифтів” вище цього розділу.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}



// 3. встановити фонове зображення в React
// I.    Встановлення зображення за допомогою вбудованих стилів
import React from 'react';
import car from './images/car.png'

function App() {
  return (
    <div  styles={{ backgroundImage:`url(${car})` }}>
      <h1>This is red car</h1>
    </div>
  );
}

export default App;


function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
      Hello World
    </div>
  );
}

// II.  Встановлення зображення за допомогою зовнішнього css
// ./App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div  className="container">
      <h1>This is red car</h1>
    </div>
  );
}

export default App;

// ./App.css
.container{
  background-image: url(./images/car.png);
}


// або
// використовуючи метод абсолютної URL-адреси
<div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})` 
}}>
  Hello World
</div>


