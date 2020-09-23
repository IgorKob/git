      Gulp
// для додавання з caniuse.com префіксів //
https://www.npmjs.com/package/gulp-autoprefixer
const gulp = requ ('gulp');
const autoprefixer = requ ('gulp-autoprefixer');

gulp.task('default', () =>
     gulp.src('css/1.css')
    .pipe(autoprefixer({
    browsers: ['last 20 versions'],
    cascade: false
}))
    .pipe(gulp.dest('dist'))
);


html
Дозволяє розбити сторінку на окремі блоки
npm i gulp-file-include

css
З'єднуючі файли css https://www.npmjs.com/package/gulp-concat-css

плагін для мінімізації CSS https://www.npmjs.com/package/gulp-clean-css

плагін для легкого перейменування файлів. https://www.npmjs.com/package/gulp-rename

Видаліть невикористаний CSS https://www.npmjs.com/package/gulp-uncss-sp

автоматично форматує ваш стиль, ВІН БУВ щоб послідовнім и для читання легким https://www.npmjs.com/package/gulp-cssbeautify

         js
https://www.npmjs.com/package/gulp-concat

https://www.npmjs.com/package/gulp-jscs-with-reporter

https://www.npmjs.com/package/gulp-babel

https://www.npmjs.com/package/gulp-jshint

       image
https://www.npmjs.com/package/gulp-imagemin

Зміна розмірів зображення https://www.npmjs.com/package/gulp-image-resize

https://www.npmjs.com/package/gulp-img-retina

Створіть зображення різного розміру https://www.npmjs.com/package/gulp-responsive

https://www.npmjs.com/package/gulp-imacss

       all
https://www.npmjs.com/package/gulp-less

https://www.npmjs.com/package/gulp-sass

https://www.npmjs.com/package/gulp-react-templates

https://www.npmjs.com/package/gulp-angular-templatecache

https://www.npmjs.com/package/gulp-autoprefixer

для запущеної локальної веб-сервера з переглядом в реальній часі для використання socket.io https://www.npmjs.com/package/gulp-server-livereload
