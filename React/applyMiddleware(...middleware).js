// Проміжне програмне забезпечення - рекомендований спосіб розширення Redux за допомогою спеціальних 
// функціональних можливостей. Проміжне програмне забезпечення дозволяє обгортати dispatchметод магазину 
// для задоволення та отримання прибутку.

// Суть middleware функций, взять входные данные, добавить что-то и передать дальше.

import { createStore, applyMiddleware } from 'redux'
import todos from './reducers'

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const store = createStore(todos, ['Use Redux'], applyMiddleware(logger))

store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware'
})
// (These lines will be logged by the middleware:)
// will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }
// state after dispatch: [ 'Use Redux', 'Understand the middleware' ]