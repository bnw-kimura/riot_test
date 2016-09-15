var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('../conf/webpack.config');
var config = require('../conf/config').webpack;


/**************************************************
 * task
 *************************************************/
gulp.task('webpack', function () {
  return gulp.src(config.src)
             .pipe(webpack(webpack_config))
             .pipe(gulp.dest(config.dest));
});