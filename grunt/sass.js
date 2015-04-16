module.exports = {
    dev: {
	options: {
            style: 'expanded'
        },
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: '*.scss',
            dest: 'dev/_assets/css/',
            ext: '.css'
        }]
    }
};
