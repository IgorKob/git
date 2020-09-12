//для автоматичного створення проекту
//https://createapp.dev/webpack
//https://generatewebpackconfig.netlify.app/

//щоб оновити npm
npm install npm@latest -g


//install
npm install --save-dev webpack

//start webpack
npx webpack

//для взаємодії з html
npm install -D html-webpack-plugin


//для видалення старих файлів
npm install -D clean-webpack-plugin


................
//запуск мого проекту в режимі розробки
npm run dev
//запуск мого проекту в режимі build (стиснення файлів)
npm run build
//для watch режиму розробки
npm run watch
//для dev-server
npm start
..............

//css-loader - для імпорту файлів .css
//style-loader - для підклучення в head
npm i -D style-loader css-loader


//модуль для роботи з файлами і картинками
npm install -D file-loader


//normalize.css
npm install normalize.css


//для роботи з з файлами .xml
npm i -D xml-loader


//для роботи з з файлами .csv
npm i -D csv-loader
npm i -D papaparse


//встановити jquery (-S - наш проект буде залежний від цього пакету)
npm i -S jquery



//встановити dev-server, для автоматичного оновлення сторінок (в мому випадку на порті 4200)
npm install -D webpack-dev-server



//плагін для переміщення файлів (копіювання)
npm i -D copy-webpack-plugin


//mini-css
npm install --save-dev mini-css-extract-plugin



//linox або гідбаш консолі (щоб задати глобальну змінну)
export NODE_ENV=development



//встановлює список залежності для розробки
npm i -D cross-env


//для мінімізації файлів (js)
npm install terser-webpack-plugin --save-dev

//для мінімізації файлів (css)
npm install --save-dev optimize-css-assets-webpack-plugin



//less
npm i -D less-loader
//встановити less
npm i -D less


//sass
npm i -D node-sass sass-loader


//babel
npm install --save-dev babel-loader @babel/core
//preset
npm install @babel/preset-env --save-dev
<!-- npm install --save-dev @babel/preset-env -->
//polyfill
npm install --save @babel/polyfill
//для розуміння нового синтаксису js
<!-- npm install --save-dev @babel/helper-create-class-features-plugin -->
npm i -D @babel/plugin-proposal-class-properties



//react
npm i --save-dev @babel/preset-react
//встановлення react і react-dom
npm i react react-dom





//eslint
npm i -D eslint-loader
//
npm i -D eslint
//
npm i -D babel-eslint





//для оптимізації проекту
npm i webpack-bundle-analyzer -D
