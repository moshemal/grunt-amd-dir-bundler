/*
 * grunt-amd-dir-bundler
 * https://github.com/moshemal/grunt-amd-dir-bundler
 *
 * Copyright (c) 2016 Moshe Malka
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    amd_dir_bundler: {
      //default_options: {
      //  options: {
      //  },
      //  files: {
      //    'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
      //  }
      //},
      //custom_options: {
      //  options: {
      //    separator: ': ',
      //    punctuation: ' !!!'
      //  },
      //  files: {
      //    'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
      //  }
      //}
      main5: {
        files: {
          'tmp/main5.js': ['test/fixtures/main5.js']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'amd_dir_bundler', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
