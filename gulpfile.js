var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

function css_style(done) {
  gulp
    .src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed",
      })
    )
    .on("error", console.error.bind(console))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browserSync.stream());

  done();
}

function sync(done) {
  browserSync.init({
    server: {
      proxy: "local.dev",
    },
    port: 3000,
  });
  done();
}

function watchSass() {
  gulp.watch("./src/scss/**/*", css_style);
  gulp.watch("index.html").on("change", browserSync.reload);
}

gulp.task("default", gulp.parallel(sync, watchSass));
