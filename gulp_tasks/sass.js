'use strict';

var config = require( './config' ).configuration;
var gulp   = config.dependency.gulp;
var rename = config.dependency.rename;
var sass   = config.dependency.sass;
var data   = config.sass;




// Compile sass files
gulp.task( 'sass', function() {
    return gulp.src( data.src )
    .pipe( sass().on( 'error', sass.logError ))
    .pipe( rename( data.outputName ))
    .pipe( gulp.dest( data.dest    ));
});
