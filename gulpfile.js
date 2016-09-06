const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('clean', () => {
	return del('target');
});

gulp.task('sass', ['clean'], () => {
	return gulp.src('source/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('target/css'));
});

gulp.task('watch:sass', () => {
	gulp.watch('source/sass/*.scss', ['sass']);
});

gulp.task('dist', ['clean', 'sass']);

gulp.task('watch', ['watch:sass']);

gulp.task('default', ['dist']);
