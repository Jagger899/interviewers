const gulp = require("gulp");
const { src, dest, task, watch, parallel, series } = require("gulp");

//tasks
require("./gulp/dev.js");
require("./gulp/docs.js");

task(
  "default",
  series(
    "clean:dev",
    parallel("html:dev", "sass:dev", "images:dev", "fonts:dev", "js:dev"),
    parallel("server:dev", "watch:dev")
  )
);

task(
  "docs",
  series(
    "clean:docs",
    parallel("html:docs", "sass:docs", "images:docs", "fonts:docs", "js:docs"),
    parallel("server:docs")
  )
);
