import React from 'react';
import { weatherFetch } from '../api/api';
import { setIsLoading2_ActionCreater, setErrorMess_ActionCreater, setErrorMessSearch_ActionCreater } from './errorMess_reducer';

const SET_WEATHER = 'SET_WEATHER';
const SET_WEATHER_SEARCH = 'SET_WEATHER_SEARCH';
const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
const SET_WEATHER_COUNTRY = 'SET_WEATHER_COUNTRY';

const initialState = {
    weather: {},
    weatherSearch: [],
    city: null,
    country: null,
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state, weather: action.payload
            };
        case SET_WEATHER_SEARCH:
            return {
                ...state, weatherSearch: action.payload
            };
        case SET_WEATHER_CITY:
            return {
                ...state, city: action.payload
            };
        case SET_WEATHER_COUNTRY:
            return {
                ...state, country: action.payload
            };
        default:
            return state;
    }
}

export default weather_reducer;

export const setWeather_ActionCreater = (payload) => ({type: SET_WEATHER, payload});
export const setWeatherSearch_ActionCreater = (payload) => ({type: SET_WEATHER_SEARCH, payload});
export const setWeatherSearchCity_ActionCreater = (payload) => ({type: SET_WEATHER_CITY, payload});
export const setWeatherSearchCountry_ActionCreater = (payload) => ({type: SET_WEATHER_COUNTRY, payload});


export const setWeatherThunk = (city) => async (dispatch) => {

    const cityURL = city.replace(/\s/g, '-'); 

    dispatch(setIsLoading2_ActionCreater());

    try {
        const response = await weatherFetch.geolocation(cityURL);
        
        if (response.data.cod === 200) {
           dispatch(setWeather_ActionCreater(response.data));
           dispatch(setErrorMess_ActionCreater(null));
        } else {
           dispatch(setWeather_ActionCreater({}));
           dispatch(setErrorMess_ActionCreater(response.data.message));
        }
        
    } catch(error) {
        dispatch(setWeather_ActionCreater({}));
        dispatch(setErrorMess_ActionCreater(error.response.data.message));
    }

    dispatch(setIsLoading2_ActionCreater());
}



export const setWeatherSearchThunk = (city) => async (dispatch) => {

    const cityURL = city.replace(/\s/g, '-'); 

    dispatch(setIsLoading2_ActionCreater());

    try {
        const response = await weatherFetch.search(cityURL);
      
        if (response.data.cod === '200') {

            const list = response.data.list;
            const startNewDay = list.findIndex(el => el.dt_txt.split(' ')[1] === '00:00:00');
            const arr = [];

            if (startNewDay > 0) {
                arr.push(list.splice(0, startNewDay))
            }

            while(list.length > 0) {
              arr.push(list.splice(0, 8))
            }

           dispatch(setWeatherSearch_ActionCreater(arr));
           dispatch(setWeatherSearchCity_ActionCreater(response.data.city.name));
           dispatch(setWeatherSearchCountry_ActionCreater(response.data.city.country));
           dispatch(setErrorMessSearch_ActionCreater(null));

        } else {

           dispatch(setWeatherSearch_ActionCreater([]));
           dispatch(setErrorMessSearch_ActionCreater(response.data.message));

        }
        
    } catch(error) {
        dispatch(setWeatherSearch_ActionCreater([]));
        dispatch(setErrorMessSearch_ActionCreater(error.response.data.message));
    }

    dispatch(setIsLoading2_ActionCreater());
}
