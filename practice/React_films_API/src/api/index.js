import React from 'react';
import axios from 'axios';

// const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const characterFetch = (page, species, status, gender) => {
  return instance.get(`character?page=${page}&species=${species}&status=${status}&gender=${gender}`)
}

export const episodeFetch = (page, name, episode) => {
  return instance.get(`episode?page=${page}&name=${name}&episode=${episode}`)
}

export const locationFetch = (page, name, type, dimension) => {
  return instance.get(`location?page=${page}&name=${name}&type=${type}&dimension=${dimension}`)
}

// LocalStorage
export const getLocalStorageFetch = (nameDB) => {
  return JSON.parse(localStorage.getItem(nameDB))
}
export const setLocalStorageFetch = (nameDB, episodes) => {
  localStorage.setItem(nameDB, JSON.stringify(episodes));
}

// const baseURL = 'https://rickandmortyapi.com/api/';

// export const characterFetch = async (page, species, status, gender) => {
//   const response = await  fetch(`${baseURL}character?page=${page}&species=${species}&status=${status}&gender=${gender}`)
//   const result = await response.json();
//   return  result;
// }

