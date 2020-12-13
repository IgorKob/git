import React from 'react'
import { booksAPI } from './../api/api';

const SET_BOOKS = 'SET_BOOKS' 
const UPDATE_RESULT = 'UPDATE_RESULT'
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS' 
const START_INDEX = 'START_INDEX'
const IS_LOADING = 'IS_LOADING' 
const FREE_BOOKS = 'FREE_BOOKS' 

const initialState = {
  books: [],
  totalItems: null,
  maxResults: 5,
  startIndex: 0,
  isLoading: false,
  isError: false,
};

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOOKS:
            return {
                ...state, 
                books: [...action.payload]
            };
        case UPDATE_RESULT:
            return {
                ...state, 
                books: [...state.books, ...action.payload]
            };
        case START_INDEX:
            return {
                ...state,
                startIndex: action.payload
            };
        case FREE_BOOKS:
            return {
                ...state,
                startIndex: action.payload
            };
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.payload
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
}

export default booksReducer;

export const setBooksActionCreator = (payload) => ({type: SET_BOOKS, payload})
export const updateResultActionCreator = (payload) => ({type: UPDATE_RESULT, payload})
export const startIndexActionCreator = (payload) => ({type: START_INDEX, payload})
export const setTotalItemsActionCreator = (payload) => ({type: SET_TOTAL_ITEMS, payload})
export const isLoadingActionCreator = (payload) => ({type: IS_LOADING, payload})


export const searchBooksThunk = (query, startIndex, filter0, printType0, orderBy0, langRestrict0) => async (dispatch, getState) => {
    dispatch(isLoadingActionCreator(true));

    // if (getState().booksPages.page === 0) {

    // }
    const maxResults = getState().booksPages.maxResults;
    const filter = filter0 ? `filter=${filter0}` : '';
    const printType = printType0 ? `printType=${printType0}` : '';
    const orderBy = orderBy0 ? `orderBy=newest` : 'orderBy=relevance';
    const langRestrict = langRestrict0 ? `langRestrict=uk` : '';


    const response = await booksAPI.searchBooks(query, maxResults, startIndex, filter, printType, orderBy, langRestrict);

    // if (response.status === 200) {
    if (response.data.items) {
        if (startIndex === 0) {
            dispatch(setBooksActionCreator(response.data.items));
        } else {
            dispatch(updateResultActionCreator(response.data.items));
        }
        
        dispatch(startIndexActionCreator(startIndex));
        dispatch(setTotalItemsActionCreator(response.data.totalItems));
        dispatch(isLoadingActionCreator(false));

      }
}
