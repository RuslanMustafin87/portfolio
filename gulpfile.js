var gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserSync = require('browser-sync').create();

//script
var gulpWebpack = require('gulp-webpack'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

gulp.task('scripts', function(){
    return gulp.src('src/scripts/*.js')
            .pipe(gulpWebpack(webpackConfig, webpack))
            .pipe(gulp.dest('dest/'))
})

gulp.task('pug', function(){
    return gulp.src(['src/html/pages/*.pug', '!src/html/template.pug'])
            .pipe(plumber({
                errorHandler: notify.onError(function(error) {
                    return {
                    title: 'Styles',
                    message: error.message
                    };
                })})
            )
            .pipe(pug({pretty: true}))
            .pipe(gulp.dest('dest/'));
});

gulp.task('image', function(){
    return gulp.src('src/**/*.{jpg,png,svg}')
            .pipe(gulp.dest('dest/'));
})

gulp.task('sass', function(){
    return gulp.src('src/css/main.scss')
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
                browsers: ['last 10 version', 'ie 9']
            }))
            .pipe(gulp.dest('dest/'));
});

gulp.task('clean', function(){
    return del('dest/**');
})

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './dest'
        }
    });
    browserSync.watch('dest/**/*.*', browserSync.reload);
});

gulp.task('watch', function(){
    gulp.watch('src/html/**/*.pug', gulp.parallel('pug'));
    gulp.watch('src/css/**/*.scss', gulp.parallel('sass'));
    gulp.watch('src/scripts/app.js', gulp.parallel('scripts'));
    gulp.watch('src/image/**/*.*', gulp.parallel('image'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('pug', 'sass', 'scripts', 'image'),
    gulp.parallel( 'watch', 'serve')
));

exports.server = 'serve';
exports.scripts = 'scripts';
exports.image = 'image';
exports.clean = 'clean';