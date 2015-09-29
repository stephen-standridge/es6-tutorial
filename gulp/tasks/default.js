'use strict';
var gulp   = require( 'gulp' ),
    config = require( '../config/tasks' );


gulp.task( 'default', function() {
		gulp.start('js')
		gulp.start('es6')
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./es6/*.js', ['es6']);
    gulp.start( 'karma' );	    
});
