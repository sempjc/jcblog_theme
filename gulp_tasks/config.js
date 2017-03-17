'use strict';

// Base directory  location
var basedir   = './';
var vendordir = './vendor';
var styleguide = './API_Documentation/styleguide/';


// Locations of the local directories resource files
var local = {
    jsdir:     basedir + 'js',
    cssdir:    basedir + 'css',
    scssdir:   basedir + 'css/scss',
    sampledir: basedir + 'sample'
}

// Locations of the vendor directories resource files
var vendor = {
    jsdir:   vendordir  +  '/js' ,
    cssdir:  vendordir  +  '/css',
    fontdir: vendordir  +  '/fonts'
}

// Fonts
var fonts = {
    alfaSlabdir: vendor.fontdir + '/Alfa_Slab_One',
    galadadir:   vendor.fontdir + '/Galada',
    openSansdir: vendor.fontdir + '/Open_Sans',

    alfaSlab:    'AlfaSlabOne-Regular.ttf',
    galada:      'Galada-Regular.ttf',
    openSans:    'OpenSans-Regular.ttf',
    OpenSansBold:'OpenSans-Bold.ttf'
}

// Proxy Server
var proxy = {
    name: 'localhost:3000/jcsr-blog/'
};


var gulpDependency  = {
    gulp:        require( 'gulp'),
    browserSync: require( 'browser-sync'   ).create(),
    concat:      require( 'gulp-concat'    ),
    sass:        require( 'gulp-sass'      ),
    rename:      require( 'gulp-rename'    ),
    scssLinter:  require( 'gulp-sass-lint' ),
    inject:      require( 'gulp-inject-string' ),
    fs:          require( 'fs' ),
    styleguide:  require( 'sc5-styleguide' )
};




var config = {

    dependency: gulpDependency,


    browserSync: {
        proxy: proxy.name
    },


    scssLinter: {
        src: local.scssdir  + '/**/*.scss'
    },


    styleguide: {
        src:      local.scssdir  + '/**/*.scss',
        dest:     styleguide,
        styleSrc: basedir + 'style.css',
        fontdest: styleguide + 'vendor/fonts/',
        fontsrc:  vendor.fontdir + '/*.ttf',
        options: {
            title: 'JCSR Blog \'s Styleguide',
            server: true,
            port:  '3003',
            overviewPath: styleguide + '/styleguide.md',
            rootPath: styleguide
        }
    },


    sass: {
        src:  local.scssdir  + '/styles.scss',
        dest: local.cssdir,
        outputName: 'stylesheet.css'
    },


    concat_css: {
        src: [
            vendor.cssdir + '/**/*.css',
            local.cssdir  + '/*.css'
        ],
        outputName: 'stylesheet.css',
        dest: local.cssdir
    },


    output_css: {
        src:    local.cssdir  +  '/stylesheet.css',
        file:   basedir  +  'theme-info.css',
        output: 'style.css',
        dest:    basedir
    },


    concat_js: {
        src: [
            vendor.jsdir +  '/**/*.js',
            local.jsdir  +  '/*.js'
        ],
        outputName: 'app.js',
        dest: basedir
    },


    watch: {
        phpdir: [
            basedir  +  'index.php'
        ],
        scssdir:   [ local.scssdir  + '/**/*.scss', './*.css' ],
        jsdir:     local.jsdir      + '/*.js',
        sampledir: local.sampledir  + '/**/*.html'
    }

}


module.exports = { configuration: config }
