// https://github.com/LogRocket/redux-logger
npm i --save redux-logger



// 1.
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger)
)
