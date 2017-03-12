'use strict'


var config      = require( './config' ).configuration;
var gulp        = config.dependency.gulp;
var browserSync = config.dependency.browserSync;
var data        = config.browserSync;




//
// Task for run browser-sync
// Browser-Sync is used for auto reload the browser when change
// are detected. Also is use to inject style when he detect change.
gulp.task( 'browser-sync', function() {

    browserSync.init({
        proxy: data.proxy
    });

});
