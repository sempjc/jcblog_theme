'use strict';

var config      = require( './config' ).configuration;
var gulp        = config.dependency.gulp;
var data        = config.watch;





// Watch for change on scss files, php files and sample html
gulp.task( 'watch', ['css_task', 'concat_js' ], function() {
    gulp.watch( data.scssdir,    [ 'css_task' ]   );
    gulp.watch( data.jsdir,      [ 'concat_js'  ]   );
});


