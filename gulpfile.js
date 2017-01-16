const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function () {
    return del('main.css*');
});

gulp.task('sass', ['clean'], function () {
    return gulp.src('main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['sass']);
