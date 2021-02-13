import React from 'react'
import { SET_MY_WATCH_LIST, ADD_MY_WATCH_LIST } from '../actionTypes/index';

const initialState = {
    results: [],
};

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MY_WATCH_LIST:
            return {
                ...state,
                results: action.payload,
            };
        case ADD_MY_WATCH_LIST:
            return {
                ...state,
                results: [...state.results, ...action.payload],
            };
        default:
            return state;
    }
}