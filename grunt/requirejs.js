module.exports = {
    compile: {
        options: {
            baseUrl: 'dev/_assets/scripts',
            paths: {
                requireLib: '../../../bower_components/requirejs/require',
                jquery: '../../../bower_components/jquery/dist/jquery',
                skrollr: '../../../bower_components/scrollr/dist/skrollr.min',
                ajaxChimp: '../../../bower_components/ajaxchimp/jquery.ajaxchimp.min',
                ajaxChimpLan:'../../../bower_components/ajaxchimp/jquery.ajaxchimp.langs.min',
                colorbox:'../../../bower_components/jquery-colorbox/jquery.colorbox-min',
                'css3-animate-it': 'css3-animate-it',
                classie: '../../../bower_components/classie/classie',
                widget: '../../../bower_components/jquery-ui/ui/widget',
                menu: '../../../bower_components/jquery-ui/ui/menu',
                autocomplete: '../../../bower_components/jquery-ui/ui/autocomplete',
                core: '../../../bower_components/jquery-ui/ui/core',
                position: '../../../bower_components/jquery-ui/ui/position',
                menu: '../../../bower_components/jquery-ui/ui/menu'
            },
            name: 'main',
            out: 'web/scripts/main.js',
            include: ['requireLib'],
        }
    }
};