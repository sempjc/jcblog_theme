'use strict';

// Base directory  location
var basedir   = './';
var vendordir = './vendor';


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


var config = {

    dependency: {
          gulp: require( 'gulp'),
          sass: require( 'gulp-sass' ),
        concat: require( 'gulp-concat' ),
        rename: require( 'gulp-rename' ),
      iconFont: require( 'gulp-iconfont' ),
   iconFontCss: require( 'gulp-iconfont-css'  ),
        inject: require( 'gulp-inject-string' ),
    scssLinter: require( 'gulp-sass-lint'     ),
            fs: require( 'fs' )
    },

    iconFonts: {
        fontName: 'jc-icons',
             src: '../fonts/iconFonts/*.svg',
      targetPath: '../css/scss/base/_iconFonts.scss',
        fontPath: '../fonts/',
            dest: '../fonts/'
    },

    scssLinter: {
           src: './scss/**/*.scss'
    },

    sass: {
           src: './scss/style.scss',
          dest: './temp/',
    outputName: 'temp.css'
    },

    concat_css: {
        src: [
            'theme-info.css',
            'temp/*.css',
        ],
          dest: './',
    outputName: 'style.css'
    },


    output_css: {
           src: './style.css',
          file: './theme-info.css',
        output: 'style.css',
          dest: './'
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
       scssdir:   [
            './scss/**/*.scss',
            './*.css'
        ],

         jsdir: '/*.js',
    }
}


module.exports = { configuration: config }
