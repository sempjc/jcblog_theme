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


var config = {

    dependency: {
          gulp: require( 'gulp'),
        concat: require( 'gulp-concat' ),
          sass: require( 'gulp-sass'   ),
        rename: require( 'gulp-rename' ),
    scssLinter: require( 'gulp-sass-lint' ),
        inject: require( 'gulp-inject-string' ),
            fs: require( 'fs' )
    },

    scssLinter: {
           src: './scss/**/**/*.scss'
    },

    sass: {
           src: './scss/style.scss',
          dest: './temp/',
    outputName: 'temp.css'
    },

    concat_css: {
        src: [
            'theme-info.css',
            '../vendor/css/*.css',
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
            './scss/**/**/*.scss',
            './*.css'
        ],

        jsdir: '/*.js',
    }

}


module.exports = { configuration: config }
