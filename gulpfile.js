const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const sassdoc = require('sassdoc');
const sourcemaps = require('gulp-sourcemaps');
const sassLint = require('gulp-sass-lint');

// PostCSS
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const doiuse = require('doiuse');

gulp.task('clean', function () {
    return del(['docs', 'main.css*']);
});

gulp.task('sass', ['clean'], function () {
    return gulp.src('main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({ browsers: ['last 1 version', ' >= 1%'] }),
            cssnano(),
            doiuse({ browsers: ['last 1 version', ' >= 1%'] })
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('lint', function () {
    return gulp.src('skeleton/**/*.scss')
        .pipe(sassLint({
                    rules: {
                        'brace-style': [1, {
                            style: '1tbs',
                            'allow-single-line': true
                        }],
                        'declarations-before-nesting': 1,
                        'no-qualifying-elements': 0,
                        'empty-line-between-blocks': 0,
                        'extends-before-declarations': 0,
                        'hex-notation': [1, { style: 'uppercase' }],
                        'indentation': [1, { size: 4 }],
                        'leading-zero': [1, { include: true }],
                        'nesting-depth': [1, { 'max-depth': 3 }],
                        'no-important': 0,
                        'no-color-literals': 0,
                        'no-duplicate-properties': 1,
                        'no-empty-rulesets': 1,
                        'no-invalid-hex': 1,
                        'no-mergeable-selectors': 1,
                        'no-misspelled-properties': 1,
                        'no-trailing-whitespace': 1,
                        'no-trailing-zero': 1,
                        'no-vendor-prefixes': 1,
                        'one-declaration-per-line': 1,
                        'pseudo-element': 1,
                        'shorthand-values': 1,
                        'single-line-per-selector': 0,
                        'url-quotes': 1,
                        'zero-unit': 1,
                        'property-sort-order': 0,
                        'no-color-keywords': 0,
                        'no-ids': 0,
                        'no-css-comments': 0,
                        'force-attribute-nesting': 0,
                        'quotes': [1, { style: 'double' }],
                        'no-warn': 0,
                        'border-zero': 0
                    }
                }))
                .pipe(sassLint.format())
                .pipe(sassLint.failOnError())
});

gulp.task('doc', function () {
    return gulp.src('skeleton/**/*.scss')
        .pipe(sassdoc({
            dest: './docs',
            display: {
                alias: true,
                watermark: true
            },
            groups: {
                core: 'Core API',
                theme: 'Theme API'
            }
        }));
});

gulp.task('default', ['lint', 'sass', 'doc']);
