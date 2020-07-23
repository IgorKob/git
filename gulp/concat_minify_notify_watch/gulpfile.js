var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var notify = require("gulp-notify");
// var watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');



gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("styleKim.css"))
    .pipe(autoprefixer({
          browsers: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('out/css/'))
    .pipe(notify("Hello Gulp!"));
});

// gulp.task('autoprefixer', () => {
//   const autoprefixer = require('autoprefixer')
//   const sourcemaps = require('gulp-sourcemaps')
//   const postcss = require('gulp-postcss')
//
//   return gulp.src('./src/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([ autoprefixer() ]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./dest'))
// })

gulp.task("watch", function() {
  gulp.watch('css/*.css', gulp.parallel('default'));
});

// gulp.task('stream', function () {
//     // Endless stream mode
//     return watch('css/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });
//
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
//     return watch('css/*.css', function () {
//         gulp.src('css/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });
