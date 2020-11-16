// Thunks є рекомендованим проміжним програмним забезпеченням для основної логіки побічних ефектів Redux, 
// включаючи складну синхронну логіку, яка потребує доступу до сховища, та просту асинхронну логіку, 
// як запити AJAX.

// Проміжне програмне забезпечення thunk повертає функцію замість дії. Оскільки ми маємо справу з 
// асинхронним викликом, ми можемо відкласти функцію відправки за допомогою проміжного програмного забезпечення. 
// Більше того, внутрішня функція дає нам доступ до функцій магазину dispatch та getState.

npm install redux-thunk

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));

1.
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}

2.
function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}


// II.
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/index';
 
const logger = createLogger();
const router = routerMiddleware(browserHistory);
 
const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);
 
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
///
import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';
 
function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user
  };
}
 
export function auth() {
  return function (dispatch) {
    SC.connect().then((session) => {
      dispatch(fetchMe(session));
    });
  };
};
 
function fetchMe(session) {
  return function (dispatch) {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMe(data));
      });
  };
}