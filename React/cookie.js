// https://www.npmjs.com/package/react-cookie
// https://reactgo.com/react-set-cookie/
// https://reactgo.com/react-get-cookie/
// Файл cookie - це частина даних (пари ключ-значення), яка зберігається на комп'ютері 
// користувача веб-браузером під час перегляду веб-сайту. Файли cookie створені для надійного 
// механізму веб-сайтів запам’ятовувати інформацію, що містить інформацію про стан, 
// або реєструвати активність користувача в режимі перегляду або перевіряти особу користувача.
npm install react-cookie


// 1.   Встановлення файлу cookie за допомогою гачків React
// ./index.js
import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  rootElement
);


// 2.  ./App.js
// useCookies() - Крюк приймає масив з ім'ям печива , як це перший аргумент і повертає масив 
// з двома елементами cookies об'єкта, setCookie()методу.
// cookies - Об'єкт містить всі куки , які ви створили в своєму додатку.
// setCookie() - Метод використовується для установки куки.

// ми передали setCookie() методу три аргументи , 
// перший - ім'я cookie, 
// другий - значення cookie
// третій - об'єкт options, де ми використовували path: "/"доступ до файлу cookie на всіх сторінках.

import React from "react";
import { useCookies } from "react-cookie";

export default function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/"
    });
  }
  return (
    <div className="App">
      <h1>React cookies</h1>
      <button onClick={handleCookie}>Set Cookie</button>
    </div>
  );
}

// 22.  ./App.js
import React from "react";
import { useCookies } from "react-cookie";

export default function App() {
  const [cookies, setCookie] = useCookies();

  return (
    <div className="App">
      <h1>React cookies</h1>
      {cookies.user && <p>{cookies.user}</p>}
    </div>
  );
}



// 3.  отримати доступ до файлу cookie
// ./App.js
import React from "react";
import { useCookies } from "react-cookie";

export default function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/"
    });
  }
  return (
    <div className="App">
      <h1>React cookies</h1>
       {cookies.user && <p>{cookies.user}</p>}
      <button onClick={handleCookie}>Set Cookie</button>
    </div>
  );
}





// II.    У компонентах на основі класів нам потрібно використовувати withCookies()
// компонент вищого порядку для встановлення та отримання файлів cookie.
// 1.  ./App.js
import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    user: this.props.cookies.get("user") || ""
  };

  handleCookie = () => {
    const { cookies } = this.props;
    cookies.set("user", "gowtham", { path: "/" }); // setting the cookie
    this.setState({ user: cookies.get("user") });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <h1>React cookies</h1>
        {user && <p>{user}</p>}
        <button onClick={this.handleCookie}>Set Cookie</button>
      </div>
    );
  }
}

export default withCookies(App);



// 2.  ./App.js
import React, { Component } from "react";
import { withCookies } from "react-cookie";

class App extends Component {

  state = {  // getting the cookie
    user: this.props.cookies.get("user") || ""
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        {user && <p>{user}</p>}
      </div>
    );
  }
}

export default withCookies(App);