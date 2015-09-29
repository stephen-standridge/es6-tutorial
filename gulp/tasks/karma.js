'use strict';
var env              = require( '../config/tasks' ).karma,
		gulp             = require( 'gulp' ),
		karma            = require( 'karma' ),
		args             = require( 'yargs' ).argv,
		sysNotifier      = require( '../util/sysNotifier' ),
		karmaParseConfig = require( 'karma/lib/config' ).parseConfig;

function runKarma( options, done ) {
	var configFilePath = process.cwd() + env.config;
	var config = karmaParseConfig( configFilePath, {} );

    Object.keys( options ).forEach( function( key ) {
    	if( key === 'files' ){
    		config[ key ].unshift( options[ key ] );
    	}else{
	      config[ key ] = options[ key ];    		
    	}
    });

  var server = new karma.Server( config, done );	
  server.start();
}

function processFile( file ){
	var added = file + '_' || '';
	var suite = 'dist/main' + added + '.js';

	return suite;
}

gulp.task( 'karma-js', function(){
	runKarma({ files: 'dist/main.js'}, sysNotifier );
});
gulp.task( 'karma-es6', function(){
	runKarma({ files: 'dist/main_es6.js' }, sysNotifier );
});

module.exports = runKarma;
