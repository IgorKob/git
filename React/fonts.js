// https://reactgo.com/add-fonts-to-react-app/


// 1.
// Створіть нову папку, що називається fonts у вашій src папці.
// Завантажте шрифти локально та розмістіть їх усередині fonts папки.
// Відкрийте index.css файл і включіть шрифт, вказавши шлях.
// ./index.css
@font-face {
  font-family: 'Rajdhani';
  src: local('Rajdhani'), url(./fonts/Rajdhani/Rajdhani-Regular.ttf) format('truetype');
}
// Тепер ми можемо використовувати наш шрифт у таких класах css.
// ./App.css
.title{
    font-family: Rajdhani, serif;
    color: #0004;
}



// 2.    Google fonts
// ./index.css
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500&display=swap');
// Так само ми можемо додати його всередину index.html файлу за допомогою link тегу.
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500&display=swap" rel="stylesheet">

