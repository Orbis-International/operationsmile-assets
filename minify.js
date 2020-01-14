const minify = require('@node-minify/core');
const uglifyjs = require('@node-minify/uglify-js');
const noCompress = require('@node-minify/no-compress');
const cssnano = require('@node-minify/cssnano');

// Test Worker
minify({
    compressor: noCompress,
    input: './test/*.js',
    output: './temp/test/bundle.js',
    callback: function(err, min) {}
});

minify({
    compressor: uglifyjs,
    input: './temp/test/*.js',
    output: './dist/test/bundle.min.js',
    callback: function(err, min) {}
});

minify({
    compressor: cssnano,
    input: './test/app.css',
    output: './dist/test/app.min.css',
    callback: function(err, min) {}
});

// Production Worker
minify({
    compressor: noCompress,
    input: './prod/*.js',
    output: './temp/prod/bundle.js',
    callback: function(err, min) {}
});

minify({
    compressor: uglifyjs,
    input: './temp/prod/*.js',
    output: './dist/prod/bundle.min.js',
    callback: function(err, min) {}
});

minify({
    compressor: cssnano,
    input: './prod/app.css',
    output: './dist/prod/app.min.css',
    callback: function(err, min) {}
});