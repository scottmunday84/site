const path = require('path');
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .alias({
        '@': path.join(__dirname, 'resources/js')
    })
    .sass('resources/sass/app.sass', 'public/css')
    .js('resources/js/main.js', 'public/js').vue({version: 3});
