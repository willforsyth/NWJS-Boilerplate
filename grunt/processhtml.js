module.exports = {
    dest: {
        files: [{
            expand: true,
            cwd: 'dev',
            src: '*.html',
            dest: '.tmp',
        }]
    }
};