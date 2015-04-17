module.exports = {
    scripts: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'scripts/{,*/}*.js'
        }]
    },
    images: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'svg/{,*/}*.{png,jpg,jpeg,gif,svg}'
        }]
    },
    fonts: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'fonts/{,*/}*.{eot,svg,ttf,woff,woff2}'
        }]
    }
};