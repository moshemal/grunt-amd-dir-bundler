/*
 * grunt-amd-dir-bundler
 * https://github.com/moshemal/grunt-amd-dir-bundler
 *
 * Copyright (c) 2016 Moshe Malka
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tmp: ['tmp']
    },

    // Configuration to be run (and then tested).
    amd_dir_bundler: {
      modules: {
        files: [
          {
            expand: true,
            src: 'test/fixtures/modules/*/*.js',
            filter: function(filePath){
              var splited   = filePath.split("/");
              var fileName  = splited.pop().split(".js")[0];
              var dirName   = splited.pop();
              return fileName === dirName;
            },
            ext: '.packed.js',
            dest: 'tmp',
            rename: function(dest, src){
              return "tmp" + path.sep + path.basename(src);
            }
          },
          {
            'tmp/main5.js': ['test/fixtures/main5.js']
          }
        ]
      },
      main6: {
        options: {
          useSubOf: ['sandbox']
        },
        files: [
          {
            'tmp/main6.js': ['test/fixtures/main6.js']
          }
        ]
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
  grunt.registerTask('test', ['clean', 'amd_dir_bundler', 'amd_dir_bundler:main6', 'nodeunit', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
