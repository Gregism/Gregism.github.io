'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    watch: {
      all: {
        options: { livereload: true },
        files: [
          'app/**/*.js',
          'app/**/*.css',
          'app/**/*.html'
        ],
        //tasks: ['jshint'],
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};