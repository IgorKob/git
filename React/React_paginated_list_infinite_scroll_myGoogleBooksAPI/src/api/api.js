import React from 'react';
// import * as axios from "axios";
import axios from 'axios';

const API_KEY = `AIzaSyCWJPlgc1bW_gHaGC6hYCtHeqonbVJwWvA`;
// const maxResults = 5;
// const startIndex = 0;
 // Пагінація
  // startIndex- Позиція в колекції, з якої слід починати. Індекс першого пункту - 0.
  // maxResults- Максимальна кількість результатів, які потрібно повернути. За замовчуванням 10, а максимально допустиме значення - 40.


const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://www.googleapis.com/books/v1/',
//   headers: {
//     "API-KEY": "AIzaSyCWJPlgc1bW_gHaGC6hYCtHeqonbVJwWvA"
//   },
});


// volumes?q=flowers&filter=free-ebooks&key=yourAPIKey
// https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${API_KEY}
export const booksAPI = {
  // getBooks() {
  //   return instance.get(`volumes?q=search+terms`)
  //     .then(response => response);
  // },
  searchBooks(query, maxResults, startIndex) {
    return instance.get(`volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&key=${API_KEY}`)
      .then(response => response);
  },
  // Повертає лише результати, які є безкоштовними електронними книгами Google.
  searchFreeBooks(query) {
    return instance.get(`volumes?q=flowers&filter=free-ebooks&key=${API_KEY}`)
      .then(response => response);
  },
  // Повертає лише ті результати, які є електронними книгами Google, із ціною.
  searchFreeBooks(query) {
    return instance.get(`volumes?q=flowers&filter=paid-ebooks&key=${API_KEY}`)
      .then(response => response);
  },
  // Повертає результати лише тоді, коли весь текст можна переглянути. 
  searchFreeBooks(query) {
    return instance.get(`volumes?q=flowers&filter=full&key=${API_KEY}`)
      .then(response => response);
  },
  // all
  searchFreeBooks(query) {
    return instance.get(`volumes?q=time&printType=all&key=${API_KEY}`)
      .then(response => response);
  },
// Повертає результати журналів
  searchFreeBooks(query) {
    return instance.get(`volumes?q=time&printType=magazines&key=${API_KEY}`)
      .then(response => response);
  },
// newest - Повертає результати в порядку останніх до найменш нещодавно опублікованих.
  searchFreeBooks(query) {
    return instance.get(`volumes?q=flowers&orderBy=newest&key=${API_KEY}`)
      .then(response => response);
  },

  searchFreeBooks(query) {
    return instance.get(`volumes?q=search+terms&langRestrict=uk&key=${API_KEY}`)
      .then(response => response);
  },
  // GET запиту, який отримує один том:-----------------------------------
  searchFreeBooks(query) {
    return instance.get(`volumes/zyTCAlFPjgYC?key=${API_KEY}`)
      .then(response => response);
  },
 }



