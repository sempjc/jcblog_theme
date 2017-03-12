'use strict';

var config     = require( './config' ).configuration;
var gulp       = config.dependency.gulp;
var scssLinter = config.dependency.scssLinter;
var data       = config.scssLinter;




// Task for check if sass code are write correctly
// and without errors
gulp.task( 'scssLinter', function() {
    return gulp.src( data.src )
    .pipe( scssLinter() )
    .pipe( scssLinter.format() )
    .pipe( scssLinter.failOnError() );
});



