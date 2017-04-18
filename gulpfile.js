'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var connectMulti = require('gulp-connect-multi');
var connect = connectMulti();
var uglify = require('gulp-uglify');

 
gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
  	.pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['IE >= 8', 'last 2 Firefox versions', 'Safari >= 6', 'last 2 Chrome versions', 'last 2 Edge versions']
    })) 
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.init())
    .pipe(gulp.dest('./dist/css'));	
});

gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
  	.pipe(plumber())
    //.pipe(js().on('error', js.logError))
    .pipe(uglify())
    .pipe(sourcemaps.init())
    .pipe(gulp.dest('./dist/js'));	
});
 
gulp.task('html', function(){
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('img', function () {
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/*.html', ['html']);
});

function connectOptions(browser, port, live) {
	return {
		root: ['dist/'],
		port: port,
		livereload: {
			port: live
		},
		open: {
			browser: browser
		}
	};
} 

gulp.task('connect', connect.server(connectOptions('Google Chrome', 8000, 35729)));

gulp.task('default', ['sass', 'html', 'js', 'img', 'connect', 'watch'])