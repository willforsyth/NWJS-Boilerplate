/*global requirejs:false */
'use strict';
requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        skrollr: '../../bower_components/scrollr/dist/skrollr.min',
        ajaxChimp: '../../bower_components/ajaxchimp/jquery.ajaxchimp.min',
        ajaxChimpLan:'../../bower_components/ajaxchimp/jquery.ajaxchimp.langs.min',
        colorbox:'../../bower_components/jquery-colorbox/jquery.colorbox-min',
        'css3-animate-it': '../scripts/css3-animate-it',
        classie: '../../bower_components/classie/classie',
        widget: '../../bower_components/jquery-ui/ui/widget',
        core: '../../bower_components/jquery-ui/ui/core',
        position: '../../bower_components/jquery-ui/ui/position',
        menu: '../../bower_components/jquery-ui/ui/menu',
        autocomplete: '../../bower_components/jquery-ui/ui/autocomplete'
    },
    shim: {
        'css3-aminate-it': [
            'jquery'
        ],
        'ajaxChimp': [
            'jquery'
        ],
        'ajaxChimpLan': [
            'ajaxSubmitCall'
        ],
        'colorbox': [
            'jquery'
        ],
        'searchComplete': [
            'jquery'
        ],
        'cloneInput': [
            'jquery'
        ],
        'fieldOptions': [
            'jquery'
        ]
    }
});

// Clone Input
// -----------
require(['jquery', 'cloneInput'], function($){
    $('.add-line').cloneInput();
});

// Clone Input
// -----------
require(['jquery', 'profileEdit'], function($){
    $('.profileEdit').profileEdit();
});


//Option Fields
// -------------
require(['jquery', 'fieldOptions'], function($){
    $(".select").fieldOptions();
});

// skrolr activate the css
// ----------
require(['jquery', 'skrollr', 'css3-animate-it']);

// Colorbox
// ----------
require(['jquery', 'colorbox'], function($){
    $(".lightbox").colorbox();
});

// Push nav 
// -----------
require(['jquery'], function($){

    var body = document.body,
        mask = $('<div class="mask"></div>'),
        togglePushRight = $('.toggle-push-right')
    ;

    /* push menu right */
    togglePushRight.on( 'click', function(){
        $(body).addClass('pmr-open');
        $(body).append(mask);
    });

    /* hide active menu if mask is clicked */
    mask.on( 'click', function(){
        $(body).removeClass('pmr-open');
        mask.remove();
    });

    $('.close-menu').on('click', function(){
        $(body).removeClass('pmr-open');
        mask.remove();
    });

    /* hide active menu if close menu button is clicked */
    // [].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
    //     el.addEventListener( "click", function(){
    //         classie.remove( body, activeNav );
    //         activeNav = "";
    //         document.body.removeChild(mask);
    //     } );
    // });
});

// Search reveal
// ----------
require(['jquery'], function($){
    $('.search--revel, .close').click(function(e){
        e.preventDefault();
        $('#search--panel').toggleClass('open');
    });
});

// Type ahead
// ----------
require(['jquery', 'ajaxChimp', 'ajaxSubmitCall', 'ajaxChimpLan'], function($){
    $('.sign-up__form').ajaxSubmitCall();
});

// Search complete
// ----------
require(['jquery', 'widget', 'menu', 'autocomplete', 'core', 'position', 'searchComplete'], function($){
    $('.autocomplete').searchComplete();
});



