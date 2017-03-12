'use strict';

var requireDir = require( 'require-dir' );
var gulp = require( 'gulp' );

requireDir( 'gulp_tasks/', { recursive: true } );





gulp.task( 'develop', [ 'browser-sync', 'css_task', 'watch' ] );

