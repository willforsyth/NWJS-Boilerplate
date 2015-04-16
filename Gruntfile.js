module.exports = function(grunt) {

  // load all grunt tasks

  grunt.initConfig({

    pkg:grunt.file.readJSON('package.json'),

    compass: {
        options: {
          config: 'config.rb',
          force: true        }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'        },
        files: {
            'public/css/project.css': 'build/css/project.scss'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          open: true,
          livereload: 35729,
          hostname: '0.0.0.0'
        }
      }
    },

    nodewebkit: {
    options: {
        platforms: ['win','osx'],
        buildDir: 'app', // Where the build version of my node-webkit app is saved
    },
      src: ['build/**/*'] // Your node-webkit app
    },

    sass_directory_import: {
      options: {
        quiet: true,
      },
      files: {
        src: ['build/css/**/project.scss']
      },
    },
    
    watch: {
      sass_directory_import: {
          files: ['build/css/**/project.scss']
      },
      css: {
        files: ['build/css/**/*.scss'],
        tasks: ['compass', 'sass_directory_import','sass'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['public/js/main.js', 'public/components/**/*.js'],
        tasks: ['uglify']
      },
      livereload: {
        files: ['*.html', 'css/*.css', 'img/*', 'js/{main.min.js, plugins.min.js}'],
        options: {
          livereload: true
        }
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-sass-directory-import');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', 'watch');
};
