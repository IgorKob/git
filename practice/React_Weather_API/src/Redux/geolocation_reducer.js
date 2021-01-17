import React from 'react';
import { geolocationFetch } from '../api/api';
import { setIsLoading_ActionCreater, setErrorMess_ActionCreater } from './errorMess_reducer';
import { setWeatherThunk } from './weather_reducer';

const SET_CITY = 'SET_CITY';
const SET_COUNTRY = 'SET_COUNTRY';

const initialState = {
    city: "",
    country: "",
};

const geolocation_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state, city: action.payload
            };
        case SET_COUNTRY:
            return {
                ...state, country: action.payload
            };
        default:
            return state;
    }
}

export default geolocation_reducer;


export const setCity_ActionCreater = (payload) => ({type: SET_CITY, payload});
export const setCountry_ActionCreater = (payload) => ({type: SET_COUNTRY, payload});


export const setGeolocationThunk = () => async (dispatch) => {

    dispatch(setIsLoading_ActionCreater());

    try {

        const response = await geolocationFetch();

        if (response.status === 200) {

           dispatch(setWeatherThunk(response.data.city));
           dispatch(setCity_ActionCreater(response.data.city));
           dispatch(setCountry_ActionCreater(response.data.country_name));
           dispatch(setErrorMess_ActionCreater(null));

        } else {
           dispatch(setErrorMess_ActionCreater(response.data.message));
        }

    } catch(error) {
        dispatch(setErrorMess_ActionCreater(error.response.data.message));
    }

    dispatch(setIsLoading_ActionCreater());
}