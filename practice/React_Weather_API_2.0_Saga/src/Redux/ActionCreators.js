import * as types from './ActionTypes'

export const setCity_ActionCreater = (payload) => ({type: types.SET_CITY, payload});
export const setCountry_ActionCreater = (payload) => ({type: types.SET_COUNTRY, payload});

export const setWeather_ActionCreater = (payload) => ({type: types.SET_WEATHER, payload});
export const setWeatherSearch_ActionCreater = (payload) => ({type: types.SET_WEATHER_SEARCH, payload});
export const setWeatherSearchCity_ActionCreater = (payload) => ({type: types.SET_WEATHER_CITY, payload});
export const setWeatherSearchCountry_ActionCreater = (payload) => ({type: types.SET_WEATHER_COUNTRY, payload});

export const setIsLoading_ActionCreater = () => ({type: types.SET_IS_LOADING});
export const setIsLoading2_ActionCreater = () => ({type: types.SET_IS_LOADING2});
export const setErrorMess_ActionCreater = (payload) => ({type: types.SET_ERROR_MESS, payload});
export const setErrorMessSearch_ActionCreater = (payload) => ({type: types.SET_ERROR_MESS_SEARCH, payload});
