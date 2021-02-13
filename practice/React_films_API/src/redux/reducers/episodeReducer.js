import React from 'react'
import { SET_EPISODE } from '../actionTypes/index';

const initialState = {
    pages: 0,
    count: 0,
    results: [],
};

export default function episodeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EPISODE:
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