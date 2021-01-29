import React from 'react';
import * as types from './ActionTypes'

const initialState = {
    weather: {},
    weatherSearch: [],
    city: null,
    country: null,
};

export const weather_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_WEATHER:
            return {
                ...state, weather: action.payload
            };
        case types.SET_WEATHER_SEARCH:
            return {
                ...state, weatherSearch: action.payload
            };
        case types.SET_WEATHER_CITY:
            return {
                ...state, city: action.payload
            };
        case types.SET_WEATHER_COUNTRY:
            return {
                ...state, country: action.payload
            };
        default:
            return state;
    }
}