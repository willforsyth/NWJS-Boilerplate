/*global requirejs:false */
'use strict';
requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery'
    }
    // ,
    // shim: {
    //     'css3-aminate-it': [
    //         'jquery'
    //     ]
    // }
});

// run jquery on the page
// ----------
require(['jquery']);

// Colorbox
// ----------
// require(['twitter'], function($){
//     var Twitter = require('twitter');
//     var client = new Twitter({
//         consumer_key: '0000',
//         consumer_secret: '0000',
//         access_token_key: '0000',
//         access_token_secret: '0000'
//     });
// });

