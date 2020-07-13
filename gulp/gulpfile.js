//для додавання з caniuse.com префіксів
//https://www.npmjs.com/package/gulp-autoprefixer
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
         gulp.src('css/1.css')
          .pipe(autoprefixer({
    browsers: ['last 20 versions'],
    cascade: false
}))
          .pipe(gulp.dest('dist'))
         );
          
    