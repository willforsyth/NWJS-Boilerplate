module.exports = {
    dev: {
	options: {
            style: 'expanded'
        },
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: '*.scss',
            dest: '.tmp/css/',
            ext: '.css'
        }]
    }
};
