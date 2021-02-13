import React from 'react';
import axios from 'axios';

// const api_key = process.env.api_key;
const api_key = '2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo';
 
const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/',
  params: {
         api_key: api_key,
      }
});
  
export const manifestFetch = (roverName) => {
  return instance.get(`manifests/${roverName}`)
}

export const photosFetch = (name, sol, camera, page) => {
  return instance.get(`rovers/${name}/photos?sol=${sol}&camera=${camera}&page=${page}`)
}