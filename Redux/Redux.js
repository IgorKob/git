npx create-react-app my-app --template redux
npm install redux
yarn add redux

npm install react-redux
yarn add react-redux

npm install @reduxjs/toolkit
yarn add @reduxjs/toolkit

npm install redux-thunk

npm i --save redux-logger

npm install axios




Redux - це шаблон і бібліотека для управління та оновлення стану програми,
використовуючи події, що називаються "actions". Він служить централізованим сховищем для програми,
який потрібно використовувати в усьому вашому додатку, з правилами, що забезпечують оновлення програми
лише передбачуваним чином.

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


Побічний ефект - це будь-яка зміна стану або поведінки, яку можна побачити поза поверненням значення з функції . Деякі найпоширеніші види побічних ефектів:
    Запис значення на консоль
    Збереження файлу
    Встановлення асинхронного таймера
    Виконання запиту AJAX HTTP
    Зміна деякого стану, що існує поза функцією, або мутація аргументів функції
    Створення випадкових чисел або унікальних випадкових ідентифікаторів (таких як Math.random()або Date.now())


  ............................
//connect - підключає наш компонент до магазину
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
//
mapStateToProps - використовується для вибору тієї частини даних із сховища,
яка потрібна підключеному компоненту.
//
mapDispatchToProps - використовується для відправлення дій у магазин.

.....................Redux
//слід почати з обгортання всієї програми в <Provider>компонент, щоб зробити сховище доступним у всьому дереві компонентів:
//index.js
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

///Redux/store.js
import findUserReduce from "./findUser_reduce";
import mytestPages_reduce from "./mytestPages_reduce";

let rootReducer = combineReducers({
  findUser: findUserReduce,
  mytestPages: mytestPages_reduce,
});

let store = createStore(rootReducer);

export default store;

///Redux/mytestPages_reduce.js
const MYTESTADD = 'MYTESTADD';
const MYTESTCHANGE = 'MYTESTCHANGE';

const initialstate = {
  mytestText: '',
  mytestArr: [
    {id: 1, name: 'Admin', text: 'my text loren'},
    {id: 2, name: 'Admin', text: 'my text loren'},
    {id: 3, name: 'Admin', text: 'my text loren'},
  ]
};

const mytestPages_reduce = (state = initialstate, action) => {
  switch (action.type) {
    case MYTESTCHANGE:
      return {
        ...state,
        mytestText: action.text
      }
    case MYTESTADD:
      return {
        ...state,
        mytestText: '',
        mytestArr: [...state.mytestArr, {id: state.mytestArr.length + 1, name: 'Admin', text: state.mytestText}]
      }
    default:
      return state;
  }
}

export const mytestChangeActionCreater = (text) => ({type: MYTESTCHANGE, text: text});
export const mytestaddActionCreater = () => ({type: MYTESTADD});

export default mytestPages_reduce;

///Component/MytestPagesContainer.jsx
import React from 'react'
import {connect} from "react-redux";
import MytestPages from "./MytestPages";
import {mytestaddActionCreater, mytestChangeActionCreater} from "../../Redux/mytestPages_reduce";

const mypropsState = (state) => {
  return {
    mytestText: state.mytestPages.mytestText,
    mytestArr: state.mytestPages.mytestArr
  }
};

const mypropsAction = (dispatch) => {
  return {
    mytestChange: (ev) => {
      return dispatch(mytestChangeActionCreater(ev));
    },
    mytestadd: () => {
      return dispatch(mytestaddActionCreater());
    }
  }
};

const MytestPagesContainer = connect(mypropsState, mypropsAction)(MytestPages);

export default MytestPagesContainer;

///Component/MytestPages.jsx
const MytestPages = (props) => {
  return (
    <>
      <h1>My test pages</h1>
      <textarea onChange={(e) => props.mytestChange(e.target.value)} value={props.mytestText}/>
      <button onClick={() => {props.mytestadd()}}>OK</button>
      {props.mytestArr.map(el=> (
        <div key={el.id}>
          <div>{el.id}.) {el.name}:</div><div>{el.text}</div>
        </div>
      ))}
    </>
  );
}
