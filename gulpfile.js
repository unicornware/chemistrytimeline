// imports
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

// error handling
handleError = error => {
  console.log(error.toString());
  this.emit("end");
};

// compile sass
gulp.task("sass", () =>
  gulp
    .src("./src/style/sass/app.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer())
    .pipe(
      cssbeautify({
        indent: "  ",
        autosemicolon: true
      })
    )
    .on("error", handleError)
    .pipe(gulp.dest("./src/style/css/"))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./src/style/css/"))
);

gulp.task("watch", () =>
  gulp.watch("./src/style/sass/**/*").on("change", gulp.series("sass"))
);

gulp.task("default", gulp.parallel("sass", "watch", done => done()));
