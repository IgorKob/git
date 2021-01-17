import React from 'react';

const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_IS_LOADING2 = 'SET_IS_LOADING2';
const SET_ERROR_MESS = 'SET_ERROR_MESS';
const SET_ERROR_MESS_SEARCH = 'SET_ERROR_MESS_SEARCH';

const initialState = {
    isLoading: false,
    isLoading2: false,
    error: null,
    errorSearch: null,
};

const errorMess_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state, isLoading: !state.isLoading
            };
        case SET_IS_LOADING2:
            return {
                ...state, isLoading2: !state.isLoading2
            };
        case SET_ERROR_MESS:
            return {
                ...state, error: action.payload
            };
        case SET_ERROR_MESS_SEARCH:
            return {
                ...state, errorSearch: action.payload
            };
        default:
            return state;
    }
}

export default errorMess_reducer;

export const setIsLoading_ActionCreater = () => ({type: SET_IS_LOADING});
export const setIsLoading2_ActionCreater = () => ({type: SET_IS_LOADING2});
export const setErrorMess_ActionCreater = (payload) => ({type: SET_ERROR_MESS, payload});
export const setErrorMessSearch_ActionCreater = (payload) => ({type: SET_ERROR_MESS_SEARCH, payload});
