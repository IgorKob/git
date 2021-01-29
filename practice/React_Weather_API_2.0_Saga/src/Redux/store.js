import React from 'react';
import {weather_reducer} from './weather_reducer';
import {geolocation_reducer} from './geolocation_reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {errorMess_reducer} from './errorMess_reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const rootReducer = combineReducers({
    geolocation: geolocation_reducer,
    weather: weather_reducer,
    errorMess: errorMess_reducer,
});

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

window.store = store;