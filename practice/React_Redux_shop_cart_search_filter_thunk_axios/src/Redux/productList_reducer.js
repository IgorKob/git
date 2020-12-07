import axios from 'axios';
import React from 'react';

const ADD_PRODUCT = 'ADD_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const DEL_TO_CART = 'DEL_TO_CART';
const PRICE_UP = 'PRICE_UP';
const PRICE_DOWN = 'PRICE_DOWN';
const AUTHOR = 'AUTHOR';
const RATING = 'RATING';
const SEARCH_FILTER = 'SEARCH_FILTER';


const initialState = {
    product: [],
    cart: [],
};

const productList_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                // kim Error 
                // ...state, product: [...state.product, ...action.payload.filter(el => {
                //     let isTrue = false;
                //     for (let i = 0; i < state.product.length; i++) {
                //       return el.id !== state.product[i].id ? isTrue = true : isTrue = false;
                //     }
                //     return isTrue;
                // })] 

                // ...state, product: [...state.product, ...action.payload.filter((el) => { 
                //     if (state.product.length > 0) {
                //         return state.product.some(e => e.id !== el.id) ? el : '' ;
                //     }
                //     )]

                // ...state, product: [...new Set([...state.product, ...action.payload])] 

                ...state, product: [...action.payload] 
            };
        case ADD_TO_CART:
            return {
                ...state, cart: [...state.cart, state.product.filter(el => el.id === action.payload)]
            };
        case DEL_TO_CART:
            return {
                ...state, cart: [...state.cart.filter(el => el[0].id !== action.payload)]
            };
        case PRICE_UP:
            return {
                ...state, product: [...state.product.sort((a, b) => a.price - b.price)]
            };
        case PRICE_DOWN:
            return {
                ...state, product: [...state.product.sort((a, b) => b.price - a.price)]
            };
        case AUTHOR:
            return {
                ...state, product: [...state.product.sort((a, b) => a.author.localeCompare(b.author))]
            };
        case RATING:
            return {
                ...state, product: [...state.product.sort((a, b) => a.rating - b.rating)]
            };
        case SEARCH_FILTER:
            return {
                ...state, product: [...state.product.filter(el => el.author.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 || el.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)]
            };
        default:
            return state;
    }
}

export default productList_reducer;

export const add_productActionCreater = (arr) => ({
    type: ADD_PRODUCT, payload: arr
});
export const add_to_cartActionCreater = (id) => ({
    type: ADD_TO_CART, payload: id
});
export const del_to_cartActionCreater = (id) => ({
    type: DEL_TO_CART, payload: id
});
export const sort_price_upActionCreater = () => ({
    type: PRICE_UP
});
export const sort_price_downActionCreater = () => ({
    type: PRICE_DOWN
});
export const sort_authorActionCreater = () => ({
    type: AUTHOR
});
export const sort_ratingActionCreater = () => ({
    type: RATING
});
export const search_filterActionCreater = (text) => ({
    type: SEARCH_FILTER, payload: text
});

export const all_productThunk = () => (dispatch) => {
    const fetch = async () => {
        const res = await axios.get('./books.json');
        const product = dispatch(add_productActionCreater(res.data));
    };
    fetch();
};

window.state = initialState;