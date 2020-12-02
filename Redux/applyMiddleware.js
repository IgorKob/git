// Проміжне програмне забезпечення формує конвеєр навколо dispatchметоду магазину . 
// Коли ми телефонуємо store.dispatch(action), ми фактично викликаємо перше проміжне програмне забезпечення, 
// яке працює. 
// На відміну від редуктора, проміжне програмне забезпечення може мати побічні ефекти всередині , 
// включаючи тайм-аути та іншу асинхронну логіку.

// 1.
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Передати підсилювач як другий аргумент, оскільки немає preloadedState
const store = createStore(rootReducer, middlewareEnhancer)

export default store


// 2.
const anotherExampleMiddleware = storeAPI => next => action => {
  // Do something in here, when each action is dispatched

  return next(action)
}

// 22.
const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}


// 222.
const fetchTodosMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/fetchTodos') {
    client.get('todos').then(todos => {
      dispatch({ type: 'todos/todosLoaded', payload: todos })
    })
  }

  return next(action)
}



// 3.      DevTools 
// npm install redux-devtools-extension
// Цей пакет експортує спеціалізовану composeWithDevToolsфункцію, 
// яку ми можемо використовувати замість оригінальної composeфункції Redux
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(print1, print2, print3)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store