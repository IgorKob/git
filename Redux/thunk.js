// https://github.com/reduxjs/redux-thunk
// npm install redux-thunk
// Асинхронна логіка зазвичай пишеться у спеціальних функціях, які називаються "thunks"

// щоб підключити Redux Thunk, використовуйте applyMiddleware():
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));


// 1.
// Коли потрібно зробити дзвінки AJAX, щоб отримати дані із сервера
const fetchUserById = userId => {
  return async (dispatch, getState) => {
    try {
      const user = await userAPI.fetchById(userId)
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}

// 2.
const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState, extraArgument)
  }

  return next(action)
}


// 3.
function makeASandwichWithSecretSauce(forPerson) {
  return function(dispatch) {
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    );
  };
}

...
componentDidUpdate(prevProps) {
  if (prevProps.forPerson !== this.props.forPerson) {
    this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson));
  }
}


// 4.
// Redux Thunk підтримує введення власного аргументу за допомогою withExtraArgument функції:
// Щоб передати кілька аргументів, просто оберніть їх одним об’єктом
const api = "http://www.example.com/sandwiches/";
const whatever = 42;

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({ api, whatever })),
);

// later
function fetchUser(id) {
  return (dispatch, getState, { api, whatever }) => {
    // you can use api and something else here
  };
}