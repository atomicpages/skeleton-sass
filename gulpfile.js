const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');

const PATHS = [
	'bower_components/jquery.stellar/jquery.stellar.js',
	'bower_components/smooth-scroll.js/dist/js/smooth-scroll.js'
];

gulp.task('clean', () => {
	return del('target');
});

gulp.task('clean-sass', () => {
	return del('target/sass');
});

gulp.task('clean-scripts', () => {
	return del('target/js');
});

gulp.task('clean-fonts', () => {
	return del('target/fonts');
});

gulp.task('fonts', ['clean-fonts'], () => {
	gulp.src('bower_components/font-awesome/fonts/**/*.{ttf,woff,eot,svg}')
		.pipe(gulp.dest('target/fonts/'));
});

gulp.task('vendor', ['clean-scripts'], () => {
	return gulp.src(PATHS)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('skeleton-vendor.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('target/js'));
});

gulp.task('scripts', ['vendor'], () => {
	return gulp.src('source/js/*.js')
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = '.min.js';
		}))
		.pipe(gulp.dest('target/js'));
});

gulp.task('images', () => {
	return gulp.src('source/images/*.png')
		.pipe(imagemin({optimizationLevel: 8}))
		.pipe(gulp.dest('target/images'));
});

gulp.task('sass', ['clean-sass'], () => {
	return gulp.src('source/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('target/css'));
});

gulp.task('watch:sass', () => {
	gulp.watch('source/sass/*.scss', ['sass']);
});

gulp.task('watch:scripts', () => {
	gulp.watch('source/js/*.js', ['scripts']);
});

gulp.task('dist', ['clean', 'scripts', 'sass', 'images', 'fonts']);

gulp.task('watch', ['watch:sass', 'watch:scripts']);

gulp.task('default', ['dist']);
