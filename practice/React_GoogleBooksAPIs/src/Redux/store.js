import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import booksReducer from './booksReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    booksPages: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;