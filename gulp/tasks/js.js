'use strict';
var gulp       = require( 'gulp' ),
    concat     = require( 'gulp-concat' ),
    watch      = require( 'gulp-watch' );



gulp.task( 'test-js', function() {
  gulp.start( 'karma-js' );	
});
gulp.task( 'bad-js', function(){
  return gulp.src('./examples/bad_js_classes/*.js')
    .pipe( concat( 'bad_js.js' ) )
    .pipe( gulp.dest( './dist/' ) );
})
