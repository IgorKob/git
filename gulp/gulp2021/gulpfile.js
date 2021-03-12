const gulp = require('gulp');  // const {task, src, dest, watch, series, parallel} = require('gulp');
const concatCss = require('gulp-concat-css');  // npm install --save-dev gulp-concat-css    // https://www.npmjs.com/package/gulp-concat-css
const cssmin = require('gulp-cssmin');  // npm install --save-dev gulp-cssmin  // https://www.npmjs.com/package/gulp-cssmin
const rename = require('gulp-rename');  // npm install --save-dev gulp-rename  // https://www.npmjs.com/package/gulp-rename
const notify = require("gulp-notify");  // npm install --save-dev gulp-notify  // https://www.npmjs.com/package/gulp-notify
const autoprefixer = require('gulp-autoprefixer');  // npm install --save-dev gulp-autoprefixer  // https://www.npmjs.com/package/gulp-autoprefixer
const sass = require('gulp-sass');  // npm install node-sass gulp-sass --save-dev  // https://www.npmjs.com/package/gulp-sass
const browserSync = require('browser-sync').create();  // npm install --save-dev browser-sync  // https://www.npmjs.com/package/browser-sync
const purgecss = require('gulp-purgecss');  // npm install --save-dev gulp-purgecss  // https://www.npmjs.com/package/gulp-purgecss
const del = require('del');  // npm install --save-dev del  // https://www.npmjs.com/package/del
const vinylPaths = require('vinyl-paths');  // npm install --save-dev vinyl-paths  // https://www.npmjs.com/package/vinyl-paths
const stripDebug = require('gulp-strip-debug');  // npm install --save-dev gulp-strip-debug  // https://www.npmjs.com/package/gulp-strip-debug
const plumber = require('gulp-plumber');  // npm install --save-dev gulp-plumber  // https://www.npmjs.com/package/gulp-plumber
const imagemin = require('gulp-imagemin');  // npm install --save-dev gulp-imagemin  // https://www.npmjs.com/package/gulp-imagemin
const imageminZopfli = require('imagemin-zopfli');  // npm install --save imagemin-zopfli  // https://www.npmjs.com/package/imagemin-zopfli
const imageminMozjpeg = require('imagemin-mozjpeg');  // npm install --save-dev imagemin-mozjpeg  // https://www.npmjs.com/package/imagemin-mozjpeg
const imageminGiflossy = require('imagemin-giflossy');  // npm install --save imagemin-giflossy  // https://www.npmjs.com/package/imagemin-giflossy
const rigger = require('gulp-rigger');  // npm install --save-dev gulp-rigger  // https://www.npmjs.com/package/gulp-rigger
const jsmin = require('gulp-jsmin');  // npm install --save-dev gulp-jsmin  // https://www.npmjs.com/package/gulp-jsmin 
const htmlmin = require('gulp-htmlmin');  // npm install --save gulp-htmlmin  // https://www.npmjs.com/package/gulp-htmlmin
const ghPages = require('gulp-gh-pages');  // npm install --save-dev gulp-gh-pages  // https://www.npmjs.com/package/gulp-gh-pages
const newer = require('gulp-newer');  // npm install gulp-newer --save-dev  // https://www.npmjs.com/package/gulp-newer
const concat = require('gulp-concat');  // npm install --save-dev gulp-concat  // https://www.npmjs.com/package/gulp-concat

// html
function html() {
  return gulp.src('./src/*.html')
    .pipe(rigger())  // для вставки файлів у файл     //= template/footer.html
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(notify("html OK!"))
    .pipe(browserSync.stream());
}

function html_Build() {
  return gulp.src('./dist/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build'))
    .pipe(notify("index.min.html OK!"))
}

// css
function css() {
  return gulp.src('./src/styles/**/*.css')
    .pipe(rigger())  
    .pipe(concatCss("style.css"))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    // .pipe(cssmin())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/styles/'))
    .pipe(notify("css OK!"))
    .pipe(browserSync.stream());
}

function css_Build() {
  return gulp.src('./dist/styles/**/*.css')
    .pipe(cssmin())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/styles/'))
    .pipe(notify("style.min.css OK!"));
}

function css_remove_Build() {
  return gulp.src('./build/styles/**/*.css')
    .pipe(purgecss({
        content: ['index.html']
    }))
    .pipe(rename({suffix: '.remove.min'}))
    .pipe(gulp.dest('./build/styles/'))
    .pipe(notify("remove css OK!"));
}

// scss
sass.compiler = require('node-sass');
function scss() {
  return gulp.src('./src/styles/**/*.scss')
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

// js
function js() {
  return gulp.src([ 
    // 'node_modules/jquery/dist/jquery.min.js', 
    // 'node_modules/bootstrap/js/dist/util.js', 
    // 'node_modules/bootstrap/js/dist/modal.js', 
    // 'node_modules/bootstrap/js/dist/dropdown.js', 
    './src/**/*.js', 
    ])
    .pipe(concat('js/main.js')) // Конкатенируем в один файл
    .pipe(rigger())
    // .pipe(jsmin())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
    .pipe(notify("js OK!"))
    .pipe(browserSync.stream());
}

function js_Build() {
  return gulp.src('./dist/**/*.js')
    .pipe(jsmin())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build'))
    .pipe(notify("main.min.js OK!"));
}

// img
function img() {
  return gulp.src('./src/assets/img/**/*')
    .pipe(newer('./dist/assets/img/'))
    // .pipe(debug({'title':' image'}))
    // .pipe(imagemin({
    //   interlaced: true,
    //   progressive: true,
    //   optimizationLevel: 5,
    //   svgoPlugins: [
    //     {
    //       removeViewBox: true
    //     }
    //   ]
    // }))
    .pipe(gulp.dest('./dist/assets/img/'))
    .pipe(notify("img OK!"))
    .pipe(browserSync.stream());
}

function img_Build() {
  return gulp.src('./dist/assets/img/**/*')
    .pipe(imagemin([
      imageminGiflossy({
        optimizationLevel: 3,
        optimize: 3,
        lossy: 2
      }),
      imageminZopfli({
        more: true
      }),
      imageminMozjpeg({
        progressive: true,
        quality: 90
      }),
      imagemin.svgo({
        plugins: [
            { removeViewBox: false },
            { removeUnusedNS: false },
            { removeUselessStrokeAndFill: false },
            { cleanupIDs: false },
            { removeComments: true },
            { removeEmptyAttrs: true },
            { removeEmptyText: true },
            { collapseGroups: true }
          ]
      })
    ]))
    .pipe(gulp.dest('./build/assets/img/'))
    .pipe(notify("min img OK!"));
}

// fonts
function fonts() {
  return gulp.src('./src/assets/fonts/**/*')
    .pipe(newer('./dist/assets/fonts/'))
    .pipe(gulp.dest('./dist/assets/fonts/'))
    .pipe(notify("fonts OK!"))
    .pipe(browserSync.stream());
}

function fonts_Build() {
  return gulp.src('./dist/assets/fonts/**/*')
    .pipe(gulp.dest('./build/assets/fonts/'))
    .pipe(notify("fonts OK!"));
}

// clean File
function cleanFile() {
  return gulp.src('build')
    .pipe(vinylPaths(del))
    .pipe(stripDebug())
    .pipe(notify("cleanFile OK!"));
}

// gulp deploy
function deploy() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
}

function watch() {
    browserSync.init({
      server: {
          baseDir: "./",
          index: "./dist/index.html"
      },
      port: 3000,
      // notify: false, // виключити повідомлення
      // online: true 
    });
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/styles/**/*.css', css);
    gulp.watch('./src/styles/**/*.scss', scss);
    gulp.watch('./src/**/*.js', js);
    gulp.watch('./src/assets/img/**/*', img);
    gulp.watch('./src/assets/fonts/**/*', fonts);
}

exports.html = html;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.html_Build = html_Build;
exports.css_Build = css_Build;
exports.js_Build = js_Build;
exports.img_Build = img_Build;
exports.fonts_Build = fonts_Build;
exports.css_remove_Build = css_remove_Build;  // для видалення невикористаного CSS
exports.cleanFile = cleanFile;  // clean file ./build
exports.deploy = deploy;  // gulp deploy
exports.watch = watch; // gulp watch
exports.default = gulp.parallel(html, css, scss, js, img, fonts, watch);
// exports.build = gulp.series(cleanFile, html_Build, css_Build, css_remove_Build, js_Build, img_Build, fonts_Build);
exports.build = gulp.series(html_Build, css_Build, css_remove_Build, js_Build, img_Build, fonts_Build);
