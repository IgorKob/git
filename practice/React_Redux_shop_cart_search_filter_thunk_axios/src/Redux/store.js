import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import productList_reducer from './productList_reducer';

const rootReducer = combineReducers({
  productList: productList_reducer,

});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;