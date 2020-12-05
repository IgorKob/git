// https://react-icons.github.io/react-icons/
// https://reactgo.com/using-react-icons/
// fontawesome, Material design, Ionicons, devicons
// npm install react-icons --save

// 1. FontAwesome
import { FaAccessibleIcon } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <p>
      Accessible icon <FaAccessibleIcon size="50px" color="red" />
      </p>
    </div>
  );
}

export default App;


// 2. Material Design
import { MdDns } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <p>
        Dns Icon <MdDns size="30px" color="green" />
      </p>
    </div>
  );
}

export default App;




// 3.               Динамічна зміна значка
// https://reactgo.com/react-change-favicon-dynamically/
// У наведеному вище коді у нас є дві кнопки - Google, YouTube, 
// якщо ми натиснемо Googleкнопку, наш значок буде змінено на Google's Favicon в іншому випадку, 
// якщо ми натиснемо на YouTubeкнопку, Наш значок буде змінено на YouTube'sFavicon.

// Перейдіть до publicпапки та відкрийте index.htmlфайл, додайте idатрибут до наступного linkтегу.
<link rel="shortcut icon" id="favicon" href="%PUBLIC_URL%/favicon.ico">
// ./App.js
import React from "react";

function getFaviconEl() {
  return document.getElementById("favicon");
}

function App() {

  const handleGoogle = () => {
    const favicon = getFaviconEl(); // Accessing favicon element
    favicon.href = "https://www.google.com/favicon.ico";
  };

  const handleYoutube = () => {
    const favicon = getFaviconEl();
    favicon.href = " https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico";
  };

  return (
    <div className="App">
      <h1>Dynamically changing favicon</h1>
      <button onClick={handleGoogle}>Google</button>
      <button onClick={handleYoutube}>YouTube</button>
    </div>
  );
}

export default App;