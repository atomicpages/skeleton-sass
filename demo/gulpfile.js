const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const del = require('del');
const pug = require('gulp-pug');
const fs = require('fs');

const VENDOR = [ 'node_modules/choices.js/assets/scripts/dist/choices.min.js' ];

gulp.task('clean', () => {
	return del('target', {force: true});
});

gulp.task('clean-sass', () => {
	return del('target/css');
});

gulp.task('clean-templates', () => {
	return del('target/html');
});

gulp.task('clean-index', () => {
	return del('index.html');
});

gulp.task('clean-vendor-scripts', () => {
	return del('target/js/vendor');
});

gulp.task('clean-scripts', () => {
	return del('target/js');
});

gulp.task('templates', ['clean-index', 'clean-templates'], () => {
	gulp.src('index.pug')
		.pipe(pug())
		.pipe(gulp.dest('.'));

	return gulp.src('source/html/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('target/html'));~``
});

gulp.task('sass', ['clean-sass'], () => {
	return gulp.src('source/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('target/css'));
});

gulp.task('vendor', ['clean-vendor-scripts'], () => {
	return gulp.src(VENDOR)
		.pipe(uglify())
		.pipe(concat('vendor.min.js'))
		.pipe(gulp.dest('target/js'));
});

gulp.task('scripts', ['clean-scripts', 'vendor'], () => {
	return gulp.src('source/js/*.js')
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = '.min.js';
		}))
		.pipe(gulp.dest('target/js'));
});

gulp.task('watch:sass', () => {
	gulp.watch('source/sass/*.scss', ['sass']);
});

gulp.task('watch:scripts', () => {
	gulp.watch('source/js/*.js', ['scripts']);
});

gulp.task('watch:templates', () => {
	gulp.watch('source/html/*.pug', ['templates']);
	gulp.watch('index.pug', ['templates']);
});

gulp.task('dist', ['clean', 'sass', 'scripts', 'templates']);

gulp.task('watch', ['watch:sass', 'watch:templates', 'watch:scripts']);

gulp.task('default', ['dist']);
