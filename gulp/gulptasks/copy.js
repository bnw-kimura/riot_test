/**************************************************
 * modules laod
 *************************************************/
var gulp = require('gulp');
var config = require('../conf/config').copy;

/**************************************************
 * task
 *************************************************/
gulp.task('copy', function (){
  gulp.src(config.src, {base: config.base})
      .pipe(gulp.dest(config.dest));
});