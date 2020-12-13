import React from 'react';
import axios from 'axios';

const API_KEY = `AIzaSyCWJPlgc1bW_gHaGC6hYCtHeqonbVJwWvA`;

// Пагінація
// startIndex- Позиція в колекції, з якої слід починати. Індекс першого пункту - 0.
// maxResults- Максимальна кількість результатів, які потрібно повернути. За замовчуванням 10, а максимально допустиме значення - 40.

// FILTER
// filter=free-ebooks - Обмежте результати безкоштовними електронними книгами Google.
// filter=paid-ebooks - Обмежте результати для електронних книг Google із ціною придбання.
// filter=full - Повертає результати лише тоді, коли весь текст можна переглянути. 

// new
// relevance - Повертає результати в порядку релевантності пошукових термінів (це за замовчуванням).
// orderBy=newest - Повертає результати в порядку останніх до найменш нещодавно опублікованих.

// lang
// langRestrict=uk

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://www.googleapis.com/books/v1/',
//   headers: {
//     "API-KEY": "AIzaSyCWJPlgc1bW_gHaGC6hYCtHeqonbVJwWvA"
//   },
});

export const booksAPI = {
  searchBooks(query, maxResults, startIndex, filter, printType, orderBy, langRestrict) {
    // console.log(`https://www.googleapis.com/books/v1/volumes?q=${query}&${filter}&${printType}&${orderBy}&${langRestrict}&maxResults=${maxResults}&startIndex=${startIndex}&key=${API_KEY}`);
    return instance.get(`volumes?q=${query}&${filter}&${printType}&${orderBy}&${langRestrict}&maxResults=${maxResults}&startIndex=${startIndex}&key=${API_KEY}`)
      .then(response => response);
  },
  // // GET запиту, який отримує один том:-----------------------------------
  // searchFreeBooks(query) {
  //   return instance.get(`volumes/zyTCAlFPjgYC?key=${API_KEY}`)
  //     .then(response => response);
  // },
 }



