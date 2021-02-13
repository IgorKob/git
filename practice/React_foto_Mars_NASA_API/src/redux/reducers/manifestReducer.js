import React from 'react'
import { SET_MANIFEST, SET_IS_LOADING, SET_ERROR_MESS } from '../actionTypes/index';

const initialState = {
    pending: false,
    error: '',
    name: '',
    landing_date: '',
    max_date: '',
    max_sol: 0,
    status: '',
    total_photos: 0,
    launch_date: '',
    photos: [],
};

export default function manifestReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                pending: !state.pending,
            };
        case SET_MANIFEST:
            return {
                ...state,
                error: '',
                name: action.payload.name,
                landing_date: action.payload.landing_date,
                max_date: action.payload.max_date,
                max_sol: action.payload.max_sol,
                status: action.payload.status,
                total_photos: action.payload.total_photos,
                launch_date: action.payload.launch_date,
                photos: [...action.payload.photos],
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