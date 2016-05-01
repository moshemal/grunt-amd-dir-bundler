/*
 * grunt-amd-dir-bundler
 * https://github.com/moshemal/grunt-amd-dir-bundler
 *
 * Copyright (c) 2016 Moshe Malka
 * Licensed under the MIT license.
 */
var path = require('path');
var bundler = require('amd-dir-bundler');
'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('amd_dir_bundler', 'bundle an AMD module with its private dependencies into a single javascript file', function() {
    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({

    });

    // Iterate over all specified files
    var promises = this.files.map(function(el) {
      return bundler.pack(el.src[0], options).then(function(res){
        grunt.file.write(el.dest, res.code);
        grunt.log.writeln('File "' + el.dest + '" created.');
      }, function(err){
        grunt.error(err);
      });
    });
    Promise.all(promises).then(function(){
      grunt.log.writeln("packing done");
      done();
    })
  });

};
