'use strict';
var gulp   = require( 'gulp' ),
    config = require( '../config/tasks' );


gulp.task( 'default', function() {
		gulp.start('js')
    gulp.watch('./js/*.js', ['js']);
    gulp.start( 'karma' );	    
});
