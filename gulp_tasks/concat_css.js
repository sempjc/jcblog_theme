'use strict';

var config      = require( './config' ).configuration;
var gulp        = config.dependency.gulp;
var concat      = config.dependency.concat;
var browserSync = config.dependency.browserSync;
var data        = config.concat_css;





// Concat all css files in one file and inject the file to the browser
gulp.task( 'concat_css', function() {
    return gulp.src( data.src )
    .pipe( concat( data.outputName ))
    .pipe( gulp.dest( data.dest ))
    .pipe( browserSync.reload( { stream: true } ));

});
