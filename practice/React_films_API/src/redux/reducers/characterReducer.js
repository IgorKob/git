import React from 'react'
import { SET_CHARACTER } from '../actionTypes/index';

const initialState = {
    pages: 0,
    count: 0,
    results: [],
};

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHARACTER:
            return {
                ...state,
                pages: action.payload.info.pages,
                count: action.payload.info.count,
                results: [...action.payload.results], 
            };
        default:
            return state;
    }
}