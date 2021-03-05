
const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const notify = require("gulp-notify");
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
var less = require('gulp-less');
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
const del = require('del');
const vinylPaths = require('vinyl-paths');
const stripDebug = require('gulp-strip-debug');
//kim message from error
const plumber = require('gulp-plumber');
//img
const imagemin = require('gulp-imagemin');
// "включити" інші файли.  //= template/footer.html
const rigger = require('gulp-rigger');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-htmlmin');
const ghPages = require('gulp-gh-pages');




//kim css
function css() {
    return gulp.src('./dist/styles/**/*.css')
      // //для вставки файлів у файл     //= template/footer.html
      .pipe(rigger())
      .pipe(concatCss("style.css"))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
      }))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/styles/'))
      .pipe(notify("style.min.css OK!"))
      .pipe(browserSync.stream());
}

//kim remove 
function removeCss() {
  return gulp.src('./dist/**/*.css')
      .pipe(purgecss({
          content: ['index.html']
      }))
      .pipe(rename({suffix: '.remove.min'}))
      .pipe(notify("remove css OK!"))
      .pipe(gulp.dest('./dist/styles'));
}




//kim scss
sass.compiler = require('node-sass');
function scss() {
  return gulp.src('./src/styles/**/*.scss') 
  // //для вставки файлів у файл     //= template/footer.html
  .pipe(rigger())
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {
      return {
        title: 'Styles',
        message: err.message
      }
    })
  }))
  .pipe(sass().on('error',sass.logError))
  //kim
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
   }))
  // .pipe(cssmin())
  // .pipe(rename({suffix: '.min'}))
  .pipe(plumber.stop())
  .pipe(gulp.dest('./dist/styles'))
  .pipe(notify("scss OK!"))
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






//kim html
function html() {
  return gulp.src('./src/*.html')
    // //для вставки файлів у файл     //= template/footer.html
    .pipe(rigger())
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(notify("html OK!"))
    .pipe(browserSync.stream());;
}


//kim js
function js() {
  return gulp.src('./src/**/*.js')
    // //для вставки файлів у файл     //= template/footer.html
    .pipe(rigger())
    // .pipe(jsmin())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
    .pipe(notify("js OK!"))
    .pipe(browserSync.stream());;
}





//kim build Html combined css and js (link)
function buildHtml() {
  return gulp.src('./src/index.html')
      .pipe(useref())
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss()))
      .pipe(gulp.dest('dist'))
      .pipe(notify("css and js link OK!"));
}





//kim clean File
function cleanFile() {
  return gulp.src('dist/*')
    .pipe(vinylPaths(del))
    .pipe(stripDebug())
    .pipe(gulp.dest('dist'))
    .pipe(notify("cleanFile OK!"));
}




//kim ftp Files
function ftpFiles() {
  return gulp.src('src/*')
      .pipe(sftp({
          host: 'website.com',
          user: 'johndoe',
          pass: '1234'
          // remotePath: '/home/home2/home3.html/'
      }));
}




//kim img
function img() {
  return gulp.src('./src/assets/img/**/*')
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
        .pipe(gulp.dest('./dist/assets/img/'))
        .pipe(notify("img OK!"))
        .pipe(browserSync.stream());
}





//kim fonts
function fonts() {
  return gulp.src('./src/assets/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts/'))
    .pipe(notify("fonts OK!"))
    .pipe(browserSync.stream());;
}


// gulp deploy
// gulp.task('deploy', function() {
//   return gulp.src('./build/**/*')
//     .pipe(ghPages());
// });
function deploy() {
  return gulp.src('./dist/**/*')
  .pipe(ghPages());
}



//watch
function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            // index: "./dist/index.html"
            index: "./dist/index.html"

        }
    });
    // gulp.watch('./dist/styles/**/*.css', css);
    gulp.watch('./src/styles/**/*.scss', scss);
    // gulp.watch('./less/**/*.less', less);
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/**/*.js', js);
    gulp.watch('./src/assets/img/**/*', img);
    gulp.watch('./src/assets/fonts/**/*', fonts);
    // gulp.watch('./src/**/*.html').on('change',browserSync.reload);
    // gulp.watch('./src/**/*.js').on('change', browserSync.reload);
}





exports.css = css;
exports.scss = scss;
exports.less = less;
exports.html = html;
exports.js = js;
//kim для видалення невикористаного CSS
exports.removeCss = removeCss;
//kim build Html combined css and js
exports.buildHtml = buildHtml;
//kim cleanFile
exports.cleanFile = cleanFile;
//htmlmin
// exports.htmlmin = htmlmin;
//kim img
exports.img = img;
exports.fonts = fonts;
//kim ftp Files
exports.ftpFiles = ftpFiles;
exports.deploy = deploy;
exports.watch = watch;
