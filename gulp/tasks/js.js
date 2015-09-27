'use strict';
var gulp       = require( 'gulp' ),
    babel      = require( 'gulp-babel' ),
    concat     = require( 'gulp-concat' ),
    watch      = require( 'gulp-watch' );


gulp.task( 'js', function() {
  return gulp.src('./js/*.js')
    .pipe( babel() )
    .pipe( concat( 'main.js' ) )
    .pipe( gulp.dest( './dist/' ) );
});
