'use strict';
var gulp       = require( 'gulp' ),
    babel      = require( 'gulp-babel' ),
    concat     = require( 'gulp-concat' ),
    watch      = require( 'gulp-watch' );



gulp.task( 'es6', function() {
  return gulp.src('./es6/*.js')
    .pipe( babel() )
    .pipe( concat( 'main_es6.js' ) )
    .pipe( gulp.dest( './dist/' ) );
});