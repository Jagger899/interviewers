const gulp = require("gulp");
const { src, dest, task, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const fileInclude = require("gulp-file-include");
const fileIncludeSettings = { prefix: "@@", basepath: "@file" };
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
// const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");


task("html:dev", function () {
  return src(["src/html/**/*.html", "!src/html/blocks/*.html"])
    .pipe(changed("build/", { hasChanged: changed.compareContents }))
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(dest("build/"));
});

task("sass:dev", function () {
  return src("src/scss/*.scss")
    .pipe(changed("build/css"))
    .pipe(plumber(plumberNotify("SASS")))
    .pipe(sourseMaps.init())
    .pipe(sassGlob())
    .pipe(scss())
    .pipe(sourseMaps.write())
    .pipe(dest("build/css/"));
});

task("images:dev", function () {
  return (
    src("src/images/**/*")
      .pipe(changed("build/images"))
      // .pipe(imagemin({ verbose: true }))
      .pipe(dest("build/images"))
  );
});

task("fonts:dev", function () {
  return src("src/fonts/**/*")
    .pipe(changed("build/fonts/"))
    .pipe(dest("build/fonts"));
});

task("js:dev", function () {
  return (
    src("./src/js/*.js")
      .pipe(changed("build/js"))
      .pipe(plumber(plumberNotify("JS")))
      // .pipe(babel())
      .pipe(webpack(require("../webpack.config.js")))
      .pipe(dest("build/js"))
  );
});

task("server:dev", function () {
  return src("build/").pipe(server(serverSettings));
});

task("clean:dev", function (done) {
  if (fs.existsSync("build")) {
    return src("build", { read: false }).pipe(clean({ force: true }));
  }

  done();
});

task("watch:dev", function () {
  watch("src/scss/**/*.scss", parallel("sass:dev"));
  watch("src/**/*.html", parallel("html:dev"));
  watch("src/images/**/*", parallel("images:dev"));
  watch("src/fonts/**/*", parallel("fonts:dev"));
  watch("src/js/**/*.js", parallel("js:dev"));
});

