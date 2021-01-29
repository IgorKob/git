import React from 'react';
import * as types from './ActionTypes'

const initialState = {
    city: "",
    country: "",
};

export const geolocation_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CITY:
            return {
                ...state, city: action.payload
            };
        case types.SET_COUNTRY:
            return {
                ...state, country: action.payload
            };
        default:
            return state;
    }
}