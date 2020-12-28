import React from 'react'
import { booksAPI } from './../api/api';

const SET_BOOKS = 'SET_BOOKS' 
const UPDATE_RESULT = 'UPDATE_RESULT'
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS' 
const START_INDEX = 'START_INDEX'
const IS_LOADING = 'IS_LOADING' 
const FREE_BOOKS = 'FREE_BOOKS' 
const ADD_FAVOURITES_BOOKS = 'ADD_FAVOURITES_BOOKS' 
const UPDATE_FAVOURITES_BOOKS = 'UPDATE_FAVOURITES_BOOKS' 

type initialStateType = {
    books: any
    totalItems: number | null,
    maxResults: number,
    startIndex: number,
    isLoading: boolean,
    isError: boolean,
    favouritesBook: any 
}

const initialState: initialStateType = {
  books: [],
  totalItems: null,
  maxResults: 5,
  startIndex: 0,
  isLoading: false,
  isError: false,
  favouritesBook: [], 
};

const booksReducer = (state = initialState, action: any): initialStateType => {
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
        case ADD_FAVOURITES_BOOKS:
            return {
                ...state,
                favouritesBook: [... state.favouritesBook, action.payload]
            };
        case UPDATE_FAVOURITES_BOOKS:
            return {
                ...state,
                favouritesBook: [...action.payload]
            };
        default:
            return state;
    }
}

export default booksReducer;


type setBooksActionCreatorType = {
    type: typeof SET_BOOKS
    payload: any
}
export const setBooksActionCreator = (payload: any): setBooksActionCreatorType => ({type: SET_BOOKS, payload})
type updateResultActionCreatorType = {
    type: typeof UPDATE_RESULT
    payload: any
}
export const updateResultActionCreator = (payload: any): updateResultActionCreatorType => ({type: UPDATE_RESULT, payload})
type startIndexActionCreatorType = {
    type: typeof START_INDEX
    payload: number
}
export const startIndexActionCreator = (payload: number): startIndexActionCreatorType => ({type: START_INDEX, payload})
type setTotalItemsActionCreatorType = {
    type: typeof SET_TOTAL_ITEMS
    payload: number
}
export const setTotalItemsActionCreator = (payload: number): setTotalItemsActionCreatorType => ({type: SET_TOTAL_ITEMS, payload})
type isLoadingActionCreatorType = {
    type: typeof IS_LOADING
    payload: boolean
}
export const isLoadingActionCreator = (payload: boolean): isLoadingActionCreatorType => ({type: IS_LOADING, payload})
type addFavouritesBookActionCreatorType = {
    type: typeof ADD_FAVOURITES_BOOKS
    payload: any
}
export const addFavouritesBookActionCreator = (payload: any): addFavouritesBookActionCreatorType => ({type: ADD_FAVOURITES_BOOKS, payload})
type updateFavouritesBookActionCreatorType = {
    type: typeof UPDATE_FAVOURITES_BOOKS
    payload: any
}
export const updateFavouritesBookActionCreator = (payload: any): updateFavouritesBookActionCreatorType => ({type: UPDATE_FAVOURITES_BOOKS, payload})


export const searchBooksThunk = (query, startIndex, filter0, printType0, orderBy0, langRestrict0) => async (dispatch: any, getState: any) => {
   
    dispatch(isLoadingActionCreator(true));

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




export const favouritesBookThunk = (id) => async (dispatch, getState) => {

    const favouritesBook = getState().booksPages.favouritesBook;
    const books = getState().booksPages.books;
    const myFavouritesBooksLocalStorage = JSON.parse(localStorage.getItem('mybooks'));
    const prevLocalStorage = myFavouritesBooksLocalStorage === null ? '' : myFavouritesBooksLocalStorage;

    if (favouritesBook.find(el => el.id === id)) {
        dispatch(updateFavouritesBookActionCreator(favouritesBook.filter(el => el.id !== id)));
        localStorage.setItem('mybooks', JSON.stringify([...prevLocalStorage.filter(el => el.id !== id)]));
    } else {
        const newBook = books.find(el => el.id === id);
        dispatch(addFavouritesBookActionCreator(newBook));
        localStorage.setItem('mybooks', JSON.stringify([...prevLocalStorage, newBook]));
    }

}
