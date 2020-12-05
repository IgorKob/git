// https://reactgo.com/react-render-html/
// для відображення HTML-рядка, Якщо ми використовувати синтаксис фігурних дужок JSX { }, 
// то реакція буде розглядати його як звичайний текст


// Error
// ./App.js
import React from "react";

export default function App() {
  const htmlString = "<h1>Hello World</h1>";

  return <div>{htmlString}</div>;
}


// 1.  ./App.js
import React from "react";

export default function App() {
  const htmlString = "<h1>Hello World</h1>";

  return <div dangerouslySetInnerHTML={{ __html: htmlString }}>
         </div>;
}


// 11.  Або можете використовувати html-react-parser бібліотеку для візуалізації рядка html.
// ./App.js
import React from "react";
import parse from "html-react-parser";

export default function App() {
  const htmlString = "<h1>Hello World</h1>";

  return <div>{parse(htmlString)}</div>;
}