const gulp = require("gulp");
const { src, dest, task, watch, parallel, series } = require("gulp");

//scss
const scss = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const webpCss = require("gulp-webp-css");

//Html
const fileInclude = require("gulp-file-include");
const fileIncludeSettings = { prefix: "@@", basepath: "@file" };
const htmlclean = require("gulp-htmlclean");
const webpHtml = require("gulp-webp-html");

const server = require("gulp-server-livereload");
const serverSettings = { livereload: true, open: true };
const clean = require("gulp-clean");
const fs = require("fs");
const sourseMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const plumberNotify = function (title) {
  return {
    errorHandler: notify.onError({
      title: title,
      message: "ERROR <%= error.message %>",
      sound: false,
    }),
  };
};
const webpack = require("webpack-stream");
const babel = require("gulp-babel");
const changed = require("gulp-changed");

// images
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

task("html:docs", function () {
  return src(["src/html/**/*.html", "!src/html/blocks/*.html"])
    .pipe(changed("docs/"))
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(webpHtml())
    .pipe(htmlclean())
    .pipe(dest("docs/"));
});

task("sass:docs", function () {
  return src("src/scss/*.scss")
    .pipe(changed("docs/css"))
    .pipe(plumber(plumberNotify("SASS")))
    .pipe(sourseMaps.init())
    .pipe(autoprefixer())
    .pipe(sassGlob())
    .pipe(webpCss())
    .pipe(scss())
    .pipe(csso())
    .pipe(sourseMaps.write())
    .pipe(dest("docs/css/"));
});

task("images:docs", function () {
  return src("src/images/**/*")
    .pipe(changed("docs/images"))
    .pipe(webp())
    .pipe(dest("docs/images"))
    .pipe(src("src/images/**/*"))
    .pipe(changed("docs/images"))
    .pipe(imagemin({ verbose: true }))
    .pipe(dest("docs/images"));
});

task("fonts:docs", function () {
  return src("src/fonts/**/*")
    .pipe(changed("docs/fonts/"))
    .pipe(dest("docs/fonts"));
});

task("js:docs", function () {
  return src("./src/js/*.js")
    .pipe(changed("docs/js"))
    .pipe(plumber(plumberNotify("JS")))
    .pipe(babel())
    .pipe(webpack(require("../webpack.config.js")))
    .pipe(dest("docs/js"));
});

task("server:docs", function () {
  return src("docs/").pipe(server(serverSettings));
});

task("clean:docs", function (done) {
  if (fs.existsSync("docs")) {
    return src("docs", { read: false }).pipe(clean({ force: true }));
  }

  done();
});

