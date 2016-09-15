/**************************************************
 * modules laod
 *************************************************/
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../conf/config').watch;


/**************************************************
 * task
 *************************************************/
gulp.task('watch', function (){
  // JSの結合
  watch(config.webpack, function(){
    gulp.start(['webpack']);
  });

  // stylusの変換
  watch(config.stylus, function(){
    gulp.start(['stylus']);
  });

  // HTMLのcopy
  watch(config.html, function(){
    gulp.start(['copy']);
  });

});