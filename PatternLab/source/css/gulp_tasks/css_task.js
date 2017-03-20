
'use strict';

var config      = require( './config' ).configuration;
var gulp        = config.dependency.gulp;


// Run all css task
gulp.task( 'css_task', [
        'scssLinter',
        'sass',
        'concat_css',
        'output_css'
        ]);
