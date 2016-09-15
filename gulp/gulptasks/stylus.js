/**************************************************
 * modules laod
 *************************************************/
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../conf/config').stylus;


/**************************************************
 * task
 *************************************************/
gulp.task('stylus', function (){
  gulp.src(config.src)
      .pipe(stylus())
      .pipe(autoprefixer(config.autoprefixer))
      // .pipe(gulp.dest(config.pc_dest)) // dest が複数ある場合
      .pipe(gulp.dest(config.dest));
});