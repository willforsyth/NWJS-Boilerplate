module.exports = {
    options: {
        livereload: true
    },
    styles: {
        files: ['dev/_assets/scss/{,*/}*.scss'],
        tasks: ['sass:dev']
    },
    scripts: {
        files: ['dev/_assets/scripts/{,*/}*.js'],
        tasks: ['copy:scripts']
    },
    svg: {
        files: ['dev/_assets/svg/*.svg'],
        tasks: [
            'recompile',
            'dev/*.html'        ]
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
