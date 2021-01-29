import React from 'react';
import * as types from './ActionTypes'

const initialState = {
    isLoading: false,
    isLoading2: false,
    error: null,
    errorSearch: null,
};

export const errorMess_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_IS_LOADING:
            return {
                ...state, isLoading: !state.isLoading
            };
        case types.SET_IS_LOADING2:
            return {
                ...state, isLoading2: !state.isLoading2
            };
        case types.SET_ERROR_MESS:
            return {
                ...state, error: action.payload
            };
        case types.SET_ERROR_MESS_SEARCH:
            return {
                ...state, errorSearch: action.payload
            };
        default:
            return state;
    }
}