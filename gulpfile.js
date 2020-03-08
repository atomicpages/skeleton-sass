const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const sassdoc = require('sassdoc');
const sourcemaps = require('gulp-sourcemaps');

const ROOT = 'src';

gulp.task('clean', function() {
    return del(['docs', 'main.css*', 'main.scss']);
});

gulp.task('sass', ['clean'], function() {
    if (!fs.existsSync(path.join(__dirname, 'main.scss'))) {
        const template = `@import "node_modules/normalize-scss/sass/normalize/import-now";
@import "${ROOT}/core/config";
@import "${ROOT}/themes/fresh/vars";
@import "${ROOT}/themes/fresh/include_components";
@import "${ROOT}/themes/fresh/grid";`;

        fs.writeFileSync(path.join(__dirname, 'main.scss'), template);
    }

    return gulp
        .src('main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('doc', function() {
    return gulp.src('src/**/*.scss').pipe(
        sassdoc({
            dest: './docs',
            display: {
                alias: true,
                watermark: true,
            },
            groups: {
                core: 'Core API',
                theme: 'Theme API',
            },
        })
    );
});

gulp.task('default', ['sass', 'doc']);
