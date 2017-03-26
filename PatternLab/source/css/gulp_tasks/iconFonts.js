'use strict';

var config  = require( './config' ).configuration;

var gulp     = config.dependency.gulp;
var data     = config.iconFonts;
var iconFont = config.dependency.iconFont;
var iconFontsCss = config.dependency.iconFontCss;



gulp.task( 'iconFonts', function() {
    gulp.src( data.src )
        .pipe( iconFontsCss({

          fontName: data.fontName,
          path: data.path,
          targetPath: data.targetPath,
          fontPath: data.fontPath

        }))

        .pipe( iconFont({

          fontName: data.fontName

        }))

        .pipe( gulp.dest( data.dest ));

});

