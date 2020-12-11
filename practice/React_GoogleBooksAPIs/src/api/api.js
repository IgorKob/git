import React from 'react';
// import * as axios from "axios";
import axios from 'axios';

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://www.googleapis.com/books/v1/',
//   headers: {
//     "API-KEY": "AIzaSyCWJPlgc1bW_gHaGC6hYCtHeqonbVJwWvA"
//   },
});

export const booksAPI = {
  getBooks() {
    return instance.get(`volumes?q=search+terms`)
      .then(response => response);
  },
  // getBooks2() {
  //   return axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms`)
  //     .then(response => response);
  // },
}
