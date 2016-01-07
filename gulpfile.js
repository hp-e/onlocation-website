var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var merge = require('merge2');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.task('ts-transpile');

  gulp.src('./app/')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: "index.html"
    }));
});

gulp.task('ts-transpile', function () {

    var result = gulp.src(['./src/**/*.ts'])
            .pipe(ts({
                noImplicitAny: false,
                removeComments: true,
                declaration: true,
                emitDecoratorMetadata: true,
                out: 'onlocation-core.js'
            }));
            //.pipe(gulp.dest('build'));

     merge([
         //result.dts.pipe(gulp.dest('typings/avento-messaging')),
         result.js.pipe(gulp.dest('build')),
         result.js.pipe(gulp.dest('app/js')),
     ])
});

gulp.task('minify', function () {
    gulp.src(['build/onlocation-core.js'])
        .pipe(uglify({ compress: true }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['ts-transpile']);
});