// Чтобы передать параметры обработчику событий, оберните его в стрелочную функцию:
<button onClick={() => this.handleClick(id)} />
// Это действие равносильно использованию .bind:
<button onClick={this.handleClick.bind(this, id)} />



import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";

5.
SPA - маленька напівпорожня HTML сторінка, в яку приходить багато JS.
Цей JS працює на клієнта і створюємо динамічно потрібну сторінку.
Навіть якщо ми перемикається на інший розділ сайту - новий HTML не завантажується.
JS ловить зміна url, відправляє AJAX запит на сервер, повертається JSON з даними
і по ним JS малює потрібний HTML.

14.
import classes from './../css/nav.module.css';
import {ProfileDataForm, ProfileDataReduxForm} from "./src/Components/Profile/ProfileDataForm";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "./src/Components/all/FormsControls/FormsControls";
<nav className={classes.nav}></nav>
<nav className={`${classes.nav} ${classes.active}`}></nav>

20.
.active , exact - щоб адреcа співпадала
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

28.
<Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/>

29.
debugger;

31.
ref
let newPostElement = React.createRef();
let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
}
<textarea ref={newPostElement} ></textarea>
<button onClick={addPost} >Add Post</button>


32.
При експорті не по дефолту мусимо при імпорті вказувати точне імя у фігурних дужках
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

34.
window.state = state;

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


39.
Можна скоротити код
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const addMessageActionCreator = () => {
  return {type: 'ADD-MESSAGE'}
}

42.
Redux - це проста бібліотека, яка допомагає керувати станом додатка JavaScript.
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

44.
Context
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

49.
Чиста функція - це функція яка приймає пропси і повертає jsx розмітку.

Екшени - це структури, які передають дані з нашої програми в стор.
  Вони є єдиними джерелами інформації для стору. Ви відправляєте їх в стор,
  використовуючи метод store.dispatch ().

Редюсер (reducer) - це чиста функція, яка приймає старий state і action,
якщо потрібно то вона змінює старий state (але працює з копією старого state)
і повертає копію зміненого старого state,
або незмінний старий state якщо ми його не змінювали


Стор (Store) - це об'єкт, який з'єднує ці частини разом. Стор бере на себе такі завдання:
  містить стан додатка (application state);
  надає доступ до стану за допомогою getState();
  може випускати оновлення стану за допомогою dispatch(action);
  Обробляє скасування реєстрації слухачів за допомогою функції, що повертається subscribe(listener).


.........................
компонент вищого порядку (HOC) - це функція, яка приймає компонент і повертає новий компонент.
const EnhancedComponent = higherOrderComponent(WrappedComponent);


..................
function makeDoggy(e) {
e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
e.target.setAttribute('alt', 'doggy');
}

const kitty = (
<img
  src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
  alt="kitty"
  onClick={makeDoggy}
/>

......
function App1() {
return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
const props = {firstName: 'Ben', lastName: 'Hector'};
return <Greeting {...props} />;
}


/////////useState(), useEffect(), useContext(), useReducer(), і useRef(), useCallback
I.)
useState() - повертає масив із двома значеннями:
поточний стан - поточне значення цього стану
установник стану - функція, яку ми можемо використовувати для оновлення значення цього стану
import React, { useState } from 'react';
const [toggle, setToggle] = useState();
<p>The toggle is {toggle}</p>
<button onClick={() => setToggle("On")}>On</button>
//для першої візуалізації компоненти, значення color буде 'Tomato'.
const [color, setColor] = useState('Tomato');
//стану обчислюється з використанням поточного стану
const [count, setCount] = useState(0);
const increment = () => setCount(prevCount => prevCount + 1);
//////
export default function Login() {
const [formState, setFormState] = useState({});

const handleChange = ({ target }) => {
const { name, value } = target;
setFormState((prev) => ({
...prev,
[name]: value
}));
};

return (
<form>
<input
value={formState.firstName}
onChange={handleChange}
name="firstName"
type="text"
/>
<input
value={formState.password}
onChange={handleChange}
type="password"
name="password"
/>
</form>
);
}

/////////
II.)






/////////////
У JavaScript функція зворотного виклику - це функція, яка передається в іншу функцію
як аргумент. Потім цю функцію можна викликати під час виконання функції вищого
порядку (аргументом якої є).
Оскільки в JavaScript функції є об'єктами, функції можуть передаватися як аргументи.


/////////
83.
///Selectors.js
export const getUsers = (state) => {
  return state.findUser.users;
}
export const getUsersSelector = (state) => {
  return getUsers(state).filter(el => el>12);
}
//Reselect - дає змогу створювати складні селектори,
// де в перших параметрах ми вказуємо простіші селектори
// а в другому параметрі функцію стрілку де аргументами є повернуті значення простіших селекторів
export const getUsersSuperSelector = createSelector(getUsers, getIsFatching,
  (users, isFatching) => {
    return users.filter(el => el>12);
  }
)

84.
onClick={myff}
inputValue = e.currentTarget.value;


88.
1. immutability (имьютабельность, неизменяемость) - входные данные, пришедшие в функцию, эта функция не должна менять (речь про объекты и массивы, так как по ссылке они передаются, поэтому делаем копию)
2. отсутствие side-effects (пункт 1 связан с этим, а так же использование глобальных переменных, их модификация, асинхронные операции и что-то может быть ещё)
3. детерменированность\идемпотентность  -  сколько бы раз на вход чистой функции не подавали одно и тоже, на выходе чистой функции должен быть один и тот же результат
4. чистая функция должна вернуть (return) что-либо)))

Pure function
reducer это тоже чистая функция, не меняет state и action
правила которых должна придерживаться чистая функция:
1.иммутабельность - не имеет права изменять входные ссылочные типы данных (props)
2.возвращает данные
3. no side effect - не оставляет какого-то мусора во внешнем мире
4. детерминированность (идемпотентность) - это значит что сколько ни пускай мне на вход одни и те же данные я тебе всегда верну один и тот же ответ






97.
//initialValues={props.profile} - завдяки цьому, при редагуванні поля, буде відображатися в ньому старі дані з початку
/profile.js
<ProfileDataReduxForm {...props}
  onSubmit={onSubmit}
  initialValues={props.profile} />

/ProfileDataReduxForm.js
export const ProfileDataReduxForm = reduxForm({
  form: 'ProfileDataForm'
})(ProfileDataForm)

/ProfileDataForm.js
<div>fullName: <Field component={Input}
type="text"
name={'fullName'}
placeholder={'fullName ...'}
/></div>


99.
<Redirect exact from="/" to="/profile" />


100.
два минуса, первое что весь рендер происходит на клиенте а не на сервере (если я правильно понял),
а второе что у реакта нет SEO оптимизации и для этого есть решения

......................
classnames - це бібліотека, яка забезпечує нам умовний вибір класу в React.
cn - це функція, яка може приймати n кількість аргументів, і кожен аргумент є визначеним класом css.
Ця функція після завершення повертає рядок усіх об'єднаних аргументів.
npm install classnames --save
import cn from 'classnames'
className={cn("btn","h-100",w-100")}
className={cn(
{ "btn-green": this.state.flag },
{ "btn-red": !this.state.flag }
)}
  //
  import React, { Component } from "react";
  import cn from "classnames";
  class App extends Component {
    state = {flag: false};
    onClickHandler = () => {
     this.setState({flag: !this.state.flag});
    };
    render() {
      return (
        <div className="align-center ">
          <button className={cn("btn",
            { "btn-green": this.state.flag },
            { "btn-red": !this.state.flag }
           )}
            onClick={this.onClickHandler}>
            Click me!</button>
        </div>
      );
    }
  }
export default App;
