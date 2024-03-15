const { src, dest, watch, parallel, series } = require("gulp");
// import { src, dest, watch, parallel, series } from 'gulp';
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;

const browserSync = require("browser-sync").create();
// import browserSync from 'browser-sync';
// const autoprefixer = require("gulp-autoprefixer");
const clean = require('gulp-clean');
// import autoprefixer from "gulp-autoprefixer";
// const webp = require("gulp-webp");
// import webp from "gulp-webp";
// const imagemin = require("gulp-imagemin");
// import imagemin from 'gulp-imagemin';

const cached = require("gulp-cached");
// import cached from 'gulp-cached';


// function images() {
//   return src(["app/images/**/*.*", "!app/images/**/*.svg"])
//     .pipe(src("app/images/**/*.*"))
//     .pipe(webp())
//     .pipe(src("app/images/**/*.*"))
//     .pipe(imagemin())

//     .pipe(dest("app/images/dist"));
// }

function styles() {
  return (
    src("app/scss/main.scss")
      // .pipe(
      //   autoprefixer({
      //     overrideBrowserslist: ["last 10 version"],
      //   })
      // )
      .pipe(concat("main.min.css"))
      .pipe(scss({ outputStyle: "compressed" }))
      .pipe(dest("app/css"))
      .pipe(browserSync.stream())
  );
}

function scripts() {
  return src([
    "node_modules/swiper/swiper-bundle.js",
    "app/js/main.js",
    // "app/js/*.js",
    // '!app/main.min.js'
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["app/scss/main.scss"], styles);
  watch(["app/js/main.js"], scripts);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
}

function cleanDist() {
  return src("dist").pipe(clean());
}

function building() {
  return src(["app/css/main.min.css", "app/js/main.min.js", "app/**/*.html"], {
    base: "app",
  }).pipe(dest("dist"));
}

// exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, browsersync, watching);
