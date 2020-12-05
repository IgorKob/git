// https://react-bootstrap.netlify.app/
// https://react-bootstrap.github.io/components/carousel/
// https://reactgo.com/add-bootstrap-to-react/
npm install --save bootstrap
yarn add bootstrap
// ./src/index.js
import 'bootstrap/dist/css/bootstrap.css';



// 1.
// І.  щоб встановити завантажувальний файл та його залежності.
npm i bootstrap jquery popper.js

// ІІ.  index.js 
index.js
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// 1.                           
// I.                                    bootstrap scss
// ./src/custom.scss
// Замінити змінні за замовчуванням перед імпортом
$body-bg: #000;
// Імпорт Bootstrap та його змінних за замовчуванням
@import '~bootstrap/scss/bootstrap.scss';

// II.
// ./src/index.js
import './custom.scss';


