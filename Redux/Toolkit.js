// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
// npm install @reduxjs/toolkit


// I.  автоматично
// 1. ./src/store.js
import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
  }
})

export default store

// configureStore зробив всю роботу:
// Вона об'єднала todosReducerі filtersReducerв функцію кореневого редуктора, який буде обробляти корінь стан , який виглядає як{todos, filters}
// Він створив магазин Redux, використовуючи цей кореневий редуктор
// Він автоматично додав thunkпроміжне програмне забезпечення
// Він автоматично додав більше проміжного програмного забезпечення для перевірки поширених помилок, таких як випадкова мутація стану
// Він автоматично встановлює підключення розширення Redux DevTools


// II.  або в ручну підключати
// 1. ./src/rootReducer.js
import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer


// 2. ./src/store.js
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)
export default store


