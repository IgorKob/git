import React from 'react'
import { SET_IS_LOADING, SET_ERROR_MESS } from '../actionTypes/index';

const initialState = {
    pending: false,
    error: '',
};

export default function allReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                pending: !state.pending,
            };
        case SET_ERROR_MESS:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}