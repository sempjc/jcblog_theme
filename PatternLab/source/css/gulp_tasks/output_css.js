'use strict';

var config  = require( './config' ).configuration;

var gulp    = config.dependency.gulp;
var rename  = config.dependency.rename;
var inject  = config.dependency.inject;
var fs      = config.dependency.fs;
var data    = config.output_css;



gulp.task( 'output_css', function() {

    var file = fs.readFileSync( data.file, 'utf-8' );

    return gulp.src( data.src )
    .pipe( inject.prepend( file ))
    .pipe( rename( data.output       ))
    .pipe( gulp.dest( data.dest ));
});

