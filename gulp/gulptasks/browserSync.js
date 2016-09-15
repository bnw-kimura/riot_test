/**************************************************
 * modules laod
 *************************************************/
var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../conf/config').browser;


/**************************************************
 * task
 *************************************************/
gulp.task('browser-sync', function (){
  browserSync.init({
    server: {
      server: {
        baseDir: './',
        livereload: true,
      }
    }
  });

  gulp.watch(config.css, ['reload']);
  gulp.watch(config.js, ['reload']);
  gulp.watch(config.html, ['reload']);
});

gulp.task('reload', function(){
  browserSync.reload();
});