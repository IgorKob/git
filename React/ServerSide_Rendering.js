// https://reactgo.com/aws-serverless-server-side-rendering-react/
// реалізувати безсерверне рендеринг на стороні сервера в React

// Візуалізація на стороні сервера або ізоморфний або універсальний Javascript означає запуск JavaScript 
// як з боку клієнта, так і з боку сервера. У програмах для однієї сторінки потрібно багато часу для початкового 
// завантаження програми, оскільки нам потрібно завантажити сценарій і виконати його в браузері користувачів. 
// При візуалізації на стороні сервера клієнт отримує повністю побудований HTML-файл, так що клієнту не потрібно 
// чекати, поки сценарій завантажиться і створить розмітку.
      // Seo
      // Покращити веб-ефективність.
      // Швидка взаємодія.

npm install -g serverless
// створюємо шаблон node.js
serverless create --template aws-nodejs

// 1.  ./parcel.js - конфігурація
const Bundler = require("parcel-bundler");
const Path = require("path");
// Entrypoint file location
const server = Path.join(__dirname, "app.js");
// Bundler options
const serverOpt = {
  outDir: "./", // The out directory to put the build files in, defaults to dist
  outFile: "handler.js", // The name of the outputFile
  publicUrl: "./", // The url to server on, defaults to dist
  watch: true,
  cacheDir: ".cache", // The directory cache gets put in, defaults to .cache
  minify: true, // Minify files, enabled if process.env.NODE_ENV === 'production'
  target: "node", // browser/node/electron, defaults to browser
  logLevel: 3, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
  sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (not supported in minified builds yet)
  detailedReport: true // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};

// Entrypoint file location
const browser = Path.join(__dirname, "./src/index.js");

// Bundler options
const browserOpt = {
  outDir: "./Browser",
  outFile: "bundle.js",
  publicUrl: "./",
  watch: true,
  cacheDir: ".cache",
  minify: true,
  target: "browser",
  https: false,
  logLevel: 3,
  hmrPort: 0,
  sourceMaps: true,
  hmrHostname: "",
  detailedReport: false
};

const serverbundler = new Bundler(server, serverOpt);
const bundle = serverbundler.bundle();

// Initialises a bundler using the entrypoint location and options provided
const browserbundler = new Bundler(browser, browserOpt);
const bundle1 =browserbundler.bundle();


// 2.  ./Package.json
{
  "name": "ssr-react",
  "version": "1.0.0",
  "description": "ssr rendering react using serverless",
  "main": "index.js",
  "scripts": {
    "bundle": "rimraf Browser && node parcel.js",
    "start": "sls offline start",
    "deploy":"sls deploy"
  },
  "author": "",
  "license": "ISC",
  "babel": {
    "presets": [
      [
        "env",
        {
          "targets": {
            "browsers": [
              ">1%",
              "last 3 versions"
            ]
          }
        }
      ],
      "stage-2",
      "latest",
      "react"
    ],
    "plugins": [
      "syntax-dynamic-import",
      "transform-class-properties"
    ]
  },
  "devDependencies": {
    "babel": "^6.23.0",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-latest": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "parcel-bundler": "^1.8.1",
    "rimraf": "^2.6.2",
    "serverless-offline": "^3.25.4"
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "cors": "^2.8.4",
    "express": "^4.16.3",
    "isomorphic-fetch": "^2.2.1",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-router-dom": "^4.2.2",
    "serverless-http": "^1.5.5"
  }
}


// 3.   /src/App.js
import React,{Fragment} from "react";

const App = (props) => {
  return (
    <Fragment>
    <h1>Users</h1>
    <ul>
      {props.data.map((user, i) => {
        return <li key={i}>{user.name}</li>
      })}
    </ul>
 </Fragment>
  )
}

export default App;



// 4.  /src/users.js
import fetch from 'isomorphic-fetch';
function Data() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
}
export default Data;


// 5.   /src/index.js
import React from "react";
import "./app.css";
import { hydrate } from "react-dom";
import App from "./Myfirst";
import Data from "./users";

// Гідрат: якщо розмітку вже сформовано сервером, він не регенерує її знову у браузері та не додає необхідні обробники подій.
Data().then(users => {
  hydrate(<App data={users} />, document.getElementById("root"));
});



// 6.   ./app.js
import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import Data from "./src/users";
import fs from "fs";
import path from "path";
// Тепер нам потрібно додати кілька проміжних програм
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "./Browser")));
const markup = fs.readFileSync(__dirname + "/index.html",
  "utf8"
);

app.get("**", (req, res) => {
  Data().then(users => {
    const html = renderToString(<App data={users} />);
    res.send(markup.replace("<!--App-->", html));
  });
});

module.exports.ssr = serverless(app);



// 7.
// Тепер нам потрібно згрупувати наш код і перетворити синтаксис для них, відкрити термінал і запустити команду нижче.
npm run bundle
// він створює пакетний код із папкою браузера та файлом handler.js



// 8.
// Serverless.yml Налаштування останнього кроку
service: ssr

provider:
  name: aws
  runtime: nodejs8.10

functions:
  app:
    handler: handler.ssr
    events:
        - http: ANY /
        - http: 'ANY {proxy+}'

plugins:
  - serverless-offline


// 9.
npm start


// 10.
// Як розгорнути код?
sls deploy

