import React from 'react'
import { combineReducers, createStore } from 'redux';
import message_reduce from './message_reduce';
import users_reduce from './users_reduce';

let rootReducer = combineReducers({
  message_reduce: message_reduce,
  users_reduce: users_reduce,
});

let store = createStore(rootReducer);

export default store;