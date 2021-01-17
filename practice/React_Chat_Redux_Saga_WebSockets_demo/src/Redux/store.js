import React from 'react';
import chat_reducer from './chat_reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { sagaMiddleware } from './sagas';

const rootReducer = combineReducers({
    chat: chat_reducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

window.store = store;