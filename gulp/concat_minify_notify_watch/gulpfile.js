
const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const notify = require("gulp-notify");
// const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const purgecss = require('gulp-purgecss');

//kim class
function css() {
    return gulp.src('css/*.css')
      .pipe(concatCss("styleKim.css"))
      .pipe(autoprefixer({
            browsers: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
      }))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('out/css/'))
      .pipe(notify("style.min.css OK!"))
      .pipe(browserSync.stream());
}

//compile scss into css
function scss() {
    //1.where is my scss
    return gulp.src('scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
    .pipe(sass().on('error',sass.logError))
    //kim
    .pipe(autoprefixer({
          browsers: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    // .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('out/css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}

//kim
function removeCss() {
  return gulp.src('css/**/*.css')
      .pipe(purgecss({
          content: ['index.html']
      }))
      .pipe(rename({suffix: '.removeCss'}))
      .pipe(gulp.dest('removeCss/css'));
}



function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "/index.html"
        }
    });
    gulp.watch('./css/**/*.css', css);
    gulp.watch('./scss/**/*.scss', scss);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}





exports.css = css;
exports.scss = scss;
//kim для видалення невикористаного CSS
exports.removeCss = removeCss;
exports.watch = watch;


// //kim
// const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
//
// const dev = gulp.series(clean, scripts, serve, watch);
// export default dev;
