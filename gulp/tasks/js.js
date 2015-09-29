'use strict';
var gulp       = require( 'gulp' ),
    concat     = require( 'gulp-concat' ),
    watch      = require( 'gulp-watch' );



gulp.task( 'js', function() {
  return gulp.src('./js/*.js')
    .pipe( concat( 'main_js.js' ) )
    .pipe( gulp.dest( './dist/' ) );
});