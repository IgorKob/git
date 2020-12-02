// https://redux.js.org/tutorials/essentials/part-2-app-structure
// Магазин Redux створюється за допомогою configureStore функції з Redux Toolkit. 
// configureStore вимагає, щоб ми передали reducer аргумент.

// {counter: counterReducer}, це означає , що ми хочемо мати state.counterрозділ нашого об’єкта стану Redux, 
// і що ми хочемо, щоб counterReducer функція відповідала за вирішення питання про те, як і як оновити state.counter 
// розділ щоразу, коли надсилається дія.

// 1.
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    // posts: postsReducer,
    // comments: commentsReducer
  }
})

// 1.
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})

const store = configureStore({
  reducer: rootReducer
})




// 2. приклад гарячого перезавантаження за допомогою Redux Toolkit:
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}