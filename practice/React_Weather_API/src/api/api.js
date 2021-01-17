import React from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
 
const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});


export const geolocationFetch = () => {
  return axios.get(`https://ipapi.co/json`)
}


export const weatherFetch = {
  geolocation(city) {
    return instance.get(`weather?q=${city}&units=metric&appid=${apiKey}`)
  },
  search(city) {
    return instance.get(`forecast?q=${city}&units=metric&appid=${apiKey}`)
  },
}
