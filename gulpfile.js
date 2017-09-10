const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();

const PATHS = ['./node_modules/jump.js/dist/jump.js'];
const FONTS = [
    './node_modules/font-awesome/fonts/**/*.{ttf,woff,eot,svg}',
    './node_modules/open-sans-fontface/fonts/**/*.*'
];

const serve = () => process.argv.length > 2 && process.argv[2] === 'serve';

gulp.task('clean', () => del('target', { force: true }));
gulp.task('clean:sass', () => del('target/sass'));
gulp.task('clean:scripts', () => del('target/js'));
gulp.task('clean:fonts', () => del('target/fonts'));

gulp.task('fonts', ['clean:fonts'], () => gulp.src(FONTS)
    .pipe(gulp.dest('target/fonts/')));

gulp.task('vendor', ['clean:scripts'], () => gulp.src(PATHS)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('skeleton-vendor.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('target/js')));

gulp.task('scripts', ['vendor'], () => gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
        path.extname = '.min.js';
    }))
    .pipe(gulp.dest('target/js')));

gulp.task('images', () => gulp.src('source/images/*.png')
    .pipe(imagemin({optimizationLevel: 7}))
    .pipe(gulp.dest('target/images')));

gulp.task('sass', ['clean:sass'], function () {
    let stream = gulp.src(['source/sass/*.scss', 'source/sass/themes/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('target/css'));

    if (serve()) {
        stream = stream.pipe(browserSync.stream());
    }

    return stream;
});

gulp.task('serve', ['dist', 'watch'], function() {
    browserSync.init({
        server: { baseDir: __dirname }
    });
});

gulp.task('watch:html', () => gulp.watch(path.join(__dirname, 'index.html')).on('change', browserSync.reload));
gulp.task('watch:sass', () => gulp.watch('source/sass/*.scss', ['sass']));
gulp.task('watch:scripts', () => gulp.watch('source/js/*.js', ['scripts'], done => {
    if (serve()) {
        browserSync.reload();
    }

    done();
}));

gulp.task('dist', ['clean', 'scripts', 'sass', 'images', 'fonts']);
gulp.task('watch', ['watch:html', 'watch:sass', 'watch:scripts']);
gulp.task('default', ['dist']);
