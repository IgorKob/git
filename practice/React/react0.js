import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";

5. SPA - маленька напівпорожня HTML сторінка, в яку приходить багато JS.
  Цей JS працює на клієнта і створюємо динамічно потрібну сторінку.
  Навіть якщо ми перемикається на інший розділ сайту - новий HTML не завантажується.
  JS ловить зміна url, відправляє AJAX запит на сервер, повертається JSON з даними
  і по ним JS малює потрібний HTML.

14. import classes from './../css/nav.module.css';
import Profile from "./src/Components/Profile/Profile";
import Messages from "./src/Components/Messages/Messages";
import News from "./src/Components/News/News";
import Music from "./src/Components/Music/Music";
import Settingss from "./src/Components/Settings/Settingss";
import React from "react";
import state, {addPost} from "./src/Redux/store";
import ReactDOM from "react-dom";
import App from "./src/App";
import StoreContext from "./src/StoreContext";
import store from "./src/Redux/redux_store";
import {addPostActionCreator, newPostTextActionCreator} from "./src/Redux/postPages_reduce";
<nav className={classes.nav}></nav>
<nav className={`${classes.nav} ${classes.active}`}></nav>

20. .active , exact - щоб адреcа співпадала
<>
<Router>
  <nav className={classes.nav}>
    <NavLink to="profile" activeClassName={classes.active} className={classes.nav_link}>Profile</NavLink>
    <NavLink to="messages" activeClassName={classes.active} className={classes.nav_link} >Messages</NavLink>
  </nav>

  <Switch>
    <Route exact path="/profile">
      <Profile />
    </Route>
    <Route path="/messages">
      <Messages />
    </Route>
  </Switch>
</Router>
</>

28. <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/>

29. debugger;

31. ref
let newPostElement = React.createRef();
let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
}
<textarea ref={newPostElement} ></textarea>
<button onClick={addPost} >Add Post</button>


32. При експорті не по дефолту мусимо при імпорті вказувати точне імя у фігурних дужках
//State.js
export let addPost = (message) => {
let newPost = {id : 7, name: 'Admin', text : message, like : 0}
state.postPages.posts.push(newPost)
}
//index.js
import {addPost} from "./Redux/State";
addPost('asd asd asd')

33.
//render.js
export let renderKim = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

//state.js (BLL)
import {renderKim} from '../render.js'

const state = {
  postPages : {...}
};

export let addPost = (message) => {
  let newPost = {id : 7, name: 'Admin', text : message, like : 0};
  state.postPages.posts.push(newPost);
  renderKim(state);
}

export default state;

//index.js
import React from 'react';
import state from './Redux/State';
import {renderKim} from './render';

renderKim(state)

34. window.state = state;

35.
Типи шаблонів і приклади деяких з них

Породжують шаблони (Creational): створення нових об'єктів.
    Конструктор (Constructor) - Створює нові об'єкти в їх власній області видимості.
    Модульний (Module) - Використовуйте для інкапсуляції методів.
    Фабрика (Factory) - Використовуйте для того, щоб спростити створення об'єктів, простіше генерувати екземпляри об'єктів, що не вимагає використання конструктора.
    Сінглтон (Singletion) - Використовуйте для того, щоб обмежитися одним екземпляром об'єкта.

Структурні шаблони (Structural): впорядковують об'єкти.
    Декоратор (Decorator) - Використовуйте, щоб додавати нову функціональність об'єктів (Розширює функціональність).
    Фасад (Façade) - Використовуйте для створення простого інтерфейсу (спрощує функціональність, як наприклад jQuery).

Поведінкові (Behavioral): як об'єкти співвідносяться один з одним.
    Спостерігач (Observer) - Позволяет объектам наблюдать за объектами и быть оповещенными об изменениях.
    Посередник (Mediator) - Один об'єкт контролює сполучення між об'єктами, тому об'єкти не повідомляються один з одним на пряму.
    Команда (Command) - Інкапсулює виклик методу в один об'єкт.

Кожен патерн описує проблему, що виникає у нашому оточенні знову і знову,
а також демонструє розв'язання цієї проблеми в такий спосіб, що можна використовувати
його ще хоч мільйон разів, не повторюючись.
I. «Одинак» (Singleton)
  У розробці цей патерн обмежує створення екземпляра класу одним об'єктом. Тобто буде
  створено лише перший екземпляр класу, а всі наступні будуть повертати той самий об'єкт

II. «Спостерігач» (Observer)
  Observer — патерн проектування, за якого суб'єкт підтримує певну кількість своїх спостерігачів
  і повідомляє їх про будь-які зміни стану: зазвичай, викликаючи один з їхніх методів.

  Ми не будете пробігатися циклом, очікуючи на виклик функції. Ви вкажете суб'єкту, що вам
  потрібні певні події (повідомлення) , а колбек буде викликано, коли з'являться нові дані. У такому випадку ви — спостерігач.

  addEventListener - Додавання слухача подій до елементу має всі ознаки шаблону «Спостерігач»:

  Існує вже готова бібліотека ReactiveX та аналог у JavaScript — RxJS.

III. «Фасад» (Facade)
  У розробці ПЗ шаблон «Фасад» намагається приховати складність реалізації.
  Тобто ви працюєте лише зі зрозумілим API, водночас змінюючи код, як вам потрібно.

  Щоб додати до застосунку управління станом.
  Для цього можна використати Redux, NgRx, Akita, MobX, Apollo або будь-який інший популярний інструмент.

IV. Патерн «Модуль»
  Модуль - це самостійний фрагмент коду, який можна змінювати, не зачіпаючи інший код проекту.
  Модулі, крім того, дозволяють уникати такого явища, як забруднення областей видимості,
  завдяки тому, що вони створюють окремі області видимості для оголошуються в них змінних.


39. Можна скоротити код
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const addMessageActionCreator = () => {
  return {type: 'ADD-MESSAGE'}
}

42. Redux - це проста бібліотека, яка допомагає керувати станом додатка JavaScript.
Redux - це бібліотека для управління глобальним станом програми
Redux використовує структуру програми "односторонній потік даних"
State описує стан програми в певний момент часу, а UI відображає на основі цього стану
Коли щось відбувається в додатку:
Інтерфейс користувача надсилає дію
У магазині працюють редуктори, і стан оновлюється залежно від того, що сталося
Магазин повідомляє інтерфейс користувача про те, що стан змінився
Інтерфейс користувача рендерірується на основі нового стану

Redux використовує кілька типів коду
Дії є звичайними об'єктами з typeполем і описують "що сталося" в додатку
Редуктори - це функції, які обчислюють нове значення стану на основі попереднього стану + дії
Redux магазин запускає кореневої редуктор щоразу , коли дія передану

44. Context
// Створює контекстний об'єкт
//StoreContext.js
import React from 'react';
const StoreContext = React.createContext(null);
export default StoreContext;

//index.js
<StoreContext.Provider value={store}>
  <App />
</StoreContext.Provider>

//ProfileContainer.js
<StoreContext.Consumer>
  {(store) => {
    let addPost = () => {
      store.dispatch(addPostActionCreator());
    }
    let newPostText = (text) => {
      let action = newPostTextActionCreator(text);
      store.dispatch(action);
    }
    return (
      <Profile newPostText={newPostText}
        addPost={addPost}
        posts={store.getState().postPages.posts}
        newPost={store.getState().postPages.newPost}
      />
    )}
  }
</StoreContext.Consumer>

