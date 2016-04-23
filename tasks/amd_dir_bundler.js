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
    //var options = this.options();

    // Iterate over all specified file groups.
    var promises = this.files.map(function(el) {

      //options.sourceFileName = path.relative(path.dirname(el.dest), el.src[0]);

      return bundler.pack(el.src[0]).then(function(res){
        grunt.file.write(el.dest, res);
        grunt.log.writeln('File "' + el.dest + '" created.');
      }, function(err){console.log(err)});


      // Concat specified files.
      //var src = f.src.filter(function(filepath) {
      //  // Warn on and remove invalid source files (if nonull was set).
      //  if (!grunt.file.exists(filepath)) {
      //    grunt.log.warn('Source file "' + filepath + '" not found.');
      //    return false;
      //  } else {
      //    return true;
      //  }
      //}).map(function(filepath) {
      //  // Read file source.
      //  return grunt.file.read(filepath);
      //}).join(grunt.util.normalizelf(options.separator));
      //
      //// Handle options.
      //src += options.punctuation;
      //
      //// Write the destination file.
      //grunt.file.write(f.dest, src);
      //
      //// Print a success message.
      //grunt.log.writeln('File "' + f.dest + '" created.');
    });
    Promise.all(promises).then(function(){
      done();
    })
  });

};
