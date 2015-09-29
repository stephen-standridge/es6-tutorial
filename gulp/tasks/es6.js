'use strict';
var gulp       = require( 'gulp' ),
    babel      = require( 'gulp-babel' ),
    concat     = require( 'gulp-concat' ),
    watch      = require( 'gulp-watch' );



gulp.task( 'es6', function() {
  gulp.start( 'karma-es6' );	      
  gulp.start( 'watch-es6' );
});
gulp.task( 'process-es6', function(){
  return gulp.src('./es6/*.js')
    .pipe( babel() )
    .pipe( concat( 'main_es6.js' ) )
    .pipe( gulp.dest( './dist/' ) );	
})
gulp.task( 'watch-es6', function(){
  gulp.watch('./es6/*.js', ['process-es6']);	
})