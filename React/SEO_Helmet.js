// https://reactgo.com/react-seo-helmet/
// npm i react-helmet


// 1.
import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>My seo app</title>
        <meta name="description" content="testing react helmet" />
        <meta name="keywords" content="react,seo,helmet" />
      </Helmet>
      <h1>Hello react</h1>
      <h2>This is app route</h2>
    </div>
  );
}

export default App;



// 2.  Пакет React-helmet також використовується у програмах реагування на стороні сервера.
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from './src/App';
const app = express();

app.get('/*', (req, res) => {
  const app = renderToString(<App />);
  const helmet = Helmet.renderStatic();

const html = `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="app">
                ${app}
            </div>
        </body>
    </html>
`;

  res.send(html);
});

app.listen(3000);
