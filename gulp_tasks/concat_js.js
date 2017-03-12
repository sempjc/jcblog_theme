'use strict';

var config      = require( './config' ).configuration;
var gulp        = config.dependency.gulp
var concat      = config.dependency.concat
var browserSync = config.dependency.browserSync;
var data        = config.concat_js;




// Concat all local js and vendors on one file
gulp.task( 'concat_js', function() {
    return gulp.src( data.src )
    .pipe( concat( data.outputName ))
    .pipe( gulp.dest( data.dest ));
    browserSync.reload;
});
