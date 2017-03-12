'use strict';

var config  = require( './config' ).configuration;
var gulp    = config.dependency.gulp;
var data    = config.styleguide;
var styleguide  = config.dependency.styleguide;




// Generate Sass documentation
gulp.task( 'styleguide', function() {

    gulp.src( data.src )
    .pipe( styleguide.generate( data.options ))
    .pipe( gulp.dest( data.dest ));

    gulp.src( data.styleSrc )
    .pipe( styleguide.applyStyles() )
    .pipe( gulp.dest( data.dest ));

    gulp.src( data.fontsrc )
    .pipe( gulp.dest( data.fontdest ));

});
