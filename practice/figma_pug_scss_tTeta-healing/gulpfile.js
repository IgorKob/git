const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const notify = require("gulp-notify");
// const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
var less = require('gulp-less');
// var LessAutoprefix = require('less-plugin-autoprefix');
// var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

var path = require('path');
const browserSync = require('browser-sync').create();
//removeCss
const purgecss = require('gulp-purgecss');
//збірка проекту
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
//kim ftp
const sftp = require('gulp-sftp');
// const clean = require('gulp-clean');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const stripDebug = require('gulp-strip-debug');
//kim message from error
const plumber = require('gulp-plumber');
//img
const imagemin = require('gulp-imagemin');

//pug
var pug = require('gulp-pug');





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



//kim
sass.compiler = require('node-sass');
//compile scss into css
function scss() {
    //1.where is my scss
    return gulp.src('scss/**/*.scss') //gets all files ending with .scss in src/scss
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'Styles',
          message: err.message
        }
      })
    }))
    //2. pass that file through sass compiler
    .pipe(sass().on('error',sass.logError))
    //kim
    .pipe(autoprefixer({
          browsers: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    // .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(plumber.stop())
    //3. where do I save the compiled css file
    .pipe(gulp.dest('out/css/'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}


// //kim less error
// function less() {
//   return gulp.src('less/**/*.less')
//      .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//      }))
//      .pipe(less())
//      .pipe(gulp.dest('out/css'))
//      .pipe(browserSync.stream());
// }





//kim
function removeCss() {
  return gulp.src('css/**/*.css')
      .pipe(purgecss({
          content: ['index.html']
      }))
      .pipe(rename({suffix: '.removeCss'}))
      .pipe(gulp.dest('removeCss/css'));
}



//kim build Html combined css and js
function buildHtml() {
  return gulp.src('./index.html')
      .pipe(useref())
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss()))
      .pipe(gulp.dest('dist'));
}

//kim clean File
function cleanFile() {
  return gulp.src('dist/*')
    .pipe(vinylPaths(del))
    .pipe(stripDebug())
    .pipe(gulp.dest('dist'));
}


//kim ftp Files
function ftpFiles() {
  return gulp.src('src/*')
      .pipe(sftp({
          host: 'website.com',
          user: 'kim',
          pass: '1234'
          // remotePath: '/home/home2/home3.html/'
      }));
}
// gulp.task('default', function () {
//     return gulp.src('src/*')
//         .pipe(sftp({
//             host: 'website.com',
//             auth: 'keyMain'
//         }));
// });


//kim img
function img() {
  return gulp.src('img/**/*')
        .pipe(imagemin({
          interlaced: true,
          progressive: true,
          optimizationLevel: 5,
          svgoPlugins: [
            {
              removeViewBox: true
            }
          ]
        }))
        .pipe(gulp.dest('out/img'))
}



//kim pug
function htmlpug() {
      return gulp.src('pug/**/*.pug')
      .pipe(plumber({
        errorHandler: notify.onError(function(err) {
          return {
            title: 'Pug',
            message: err.message
          }
        })
      }))
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./out'))
      .pipe(browserSync.stream());
}




//watch
function watch() {
    browserSync.init({
        server: {
            baseDir: "./out",
            index: "/index.html"
        }
    });
    gulp.watch('./css/**/*.css', css);
    gulp.watch('./scss/**/*.scss', scss);
    gulp.watch('./less/**/*.less', less);
    gulp.watch('./pug/**/*.pug', htmlpug);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}





exports.css = css;
exports.scss = scss;
exports.less = less;
//kim для видалення невикористаного CSS
exports.removeCss = removeCss;
//kim build Html combined css and js
exports.buildHtml = buildHtml;
//kim cleanFile
exports.cleanFile = cleanFile;
//kim img
exports.img = img;
//kim pug
exports.htmlpug = htmlpug;
//kim ftp Files
exports.ftpFiles = ftpFiles;
exports.watch = watch;


// //kim
// const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
//
// const dev = gulp.series(clean, scripts, serve, watch);
// export default dev;
