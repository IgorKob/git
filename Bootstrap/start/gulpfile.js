"use strict";

const {src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const rigger = require("gulp-rigger");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const del = require("del");
const panini = require("panini");
const browsersync = require("browser-sync").create();



/* Paths to source/build/watch files
=========================*/

var path = {
    build: {
        html: "dist/",
        js: "dist/assets/js/",
        css: "dist/assets/css/",
        images: "dist/assets/img/",
        // fonts: "dist/fonts/"
    },
    src: {
        html: "src/*.{htm,html,php}",
        js: "src/assets/js/*.js",
        css: "src/assets/scss/style.scss",
        images: "src/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico}",
        // fonts: "src/sours/fonts/**/*.*"
    },
    watch: {
        html: "src/**/*.{htm,html,php}",
        js: "src/assets/js/**/*.js",
        css: "src/assets/scss/**/*.scss",
        images: "src/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico}",
        // fonts: "src/sours/fonts/**/*.*"

    },
    clean: "./dist"
};


/* Tasks
=========================*/

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 3000
    });
    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function html() {
    panini.refresh();
    return src(path.src.html, {base: 'src/'})
        .pipe(plumber())
        // .pipe(panini({
        //     root: 'src/',
        //     layouts: 'src/tpl/layouts/',
        //     partials: 'src/tpl/partials/',
        //     helpers: 'src/tpl/helpers/',
        //     data: 'src/tpl/data/'
        // }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function css() {
    return src(path.src.css, {base: './src/assets/scss/'})
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 8 versions"],
            // browsers: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        // .pipe(plumber.stop())
        .pipe(dest(path.build.css))
        // .pipe(notify("style.min.css OK!"))
        .pipe(browsersync.stream());
}

function js() {
    return src(path.src.js, {base: './src/assets/js/'})
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

function images() {
    return src(path.src.images)
        // .pipe(imagemin({
        //           interlaced: true,
        //           progressive: true,
        //           optimizationLevel: 5,
        //           svgoPlugins: [
        //             {
        //               removeViewBox: true
        //             }
        //           ]
        //         }))
        .pipe(dest(path.build.images));
}

// function fonts() {
//     return src(path.src.fonts)
//     .pipe(dest(path.build.fonts))
// }

function clean() {
    return del(path.clean);
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.images], images);
    // gulp.watch([path.watch.fonts], fonts);
}

// const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const build = gulp.series(clean, gulp.parallel(html, css, js, images));
const watch = gulp.parallel(build, watchFiles, browserSync);


// export tasks
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
// exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
