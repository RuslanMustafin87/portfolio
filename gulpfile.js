var gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('pug', function(){
    return gulp.src(['src/html/**/*.pug', '!src/html/template.pug'])
            .pipe(plumber({
                errorHandler: notify.onError(function(error) {
                    return {
                    title: 'Styles',
                    message: error.message
                    };
                })})
            )
            .pipe(pug({pretty: true}))
            .pipe(gulp.dest('dest/html/'));
});

gulp.task('sass', function(){
    return gulp.src('src/**/main.scss')
            .pipe(plumber({
                errorHandler: notify.onError(function(error) {
                    return {
                    title: 'Styles',
                    message: error.message
                    };
                })})
            )
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(sourcemaps.write())
            .pipe(rename({suffix: '.min'}))
            .pipe(autoprefixer({
                browsers: ['last 15 version', 'ie 9']
            }))
            .pipe(gulp.dest('dest/'));
});

gulp.task('watch', function(){
    gulp.watch('src/html/**/*.pug', gulp.parallel('pug'));
    gulp.watch('src/css/main.scss', gulp.parallel('sass'));
});

function server(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    // browserSync.watch('dest/**/*.*', browserSync.reload);
};

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass'),
    gulp.parallel( 'watch', server)
));

exports.server = server;