import React from 'react';
import weather_reducer from './weather_reducer';
import geolocation_reducer from './geolocation_reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import errorMess_reducer from './errorMess_reducer';

const rootReducer = combineReducers({
    geolocation: geolocation_reducer,
    weather: weather_reducer,
    errorMess: errorMess_reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;