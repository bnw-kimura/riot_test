/**************************************************
 * path
 *************************************************/
var path = require('path');
var src = './src/';
var dest = './release/';
var js = 'js/';


/**************************************************
 * task
 *************************************************/
module.exports = {
  dest: dest,

  webpack: {
    src: src + '**/**',
    dest: dest + js,
  },

  stylus: {
    src: src + 'stylus/' + '!(_)*',
    dest: dest + 'css/',
    autoprefixer: {
      browsers: ['last 3 versions', 'Android >= 4', 'ie 8'],
      cascade: false
    }
  },

  browser: {
    css: dest + 'css/*.css',
    js: dest + 'js/*.js',
    html: dest + '**/*.html',
  },

  watch: {
    webpack: './src/**/*.+(js|tag)',
    stylus: './src/stylus/**/*.styl',
    html: './src/**/*.html',
  },

  copy: {
    src: './src/**/*.html',
    dest: './release/',
    base: src
  }


};