import React from 'react'
import { booksAPI } from './../api/api';

const SET_BOOKS = 'SET_BOOKS' 
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS' 

const initialState = {
  books: [],
  totalItems: 0
};

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOOKS:
            return {
                ...state, 
                books: [...action.payload]
            };
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.payload
            };
        default:
            return state;
    }
}

export default booksReducer;

export const setBooksActionCreator = (payload) => ({type: SET_BOOKS, payload})
export const setTotalItemsActionCreator = (payload) => ({type: SET_TOTAL_ITEMS, payload})

// export const setBooksThunk = () => async (dispatch, getState) => {
export const setBooksThunk = () => async (dispatch) => {
    const response = await booksAPI.getBooks();
    // if (response.status === 200) {
    if (response.data.items) {
    debugger
        dispatch(setBooksActionCreator(response.data.items));
        dispatch(setTotalItemsActionCreator(response.data.totalItems));
      }
}
