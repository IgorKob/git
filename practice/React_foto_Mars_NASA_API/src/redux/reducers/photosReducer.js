import React from 'react'
import { SET_PHOTOS, SET_IS_LOADING2, SET_ERROR_MESS2 } from '../actionTypes/index';

const initialState = {
    pending: false,
    photos: [],
    maxPage: 1,
    error: ''
};

export default function photosReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING2:
            return {
                ...state,
                pending: !state.pending,
            };
        case SET_PHOTOS:
            return {
                ...state,
                error: '',
                photos: [...action.payload.photos],
                maxPage: action.payload.photos.length,
            };
        case SET_ERROR_MESS2:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}