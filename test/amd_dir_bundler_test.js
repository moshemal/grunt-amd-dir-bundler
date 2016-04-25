'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.amd_dir_bundler = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  
  modules: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/main5.js');
    var expected = grunt.file.read('test/expected/main5.js');
    test.equal(actual, expected, 'should pack main5 module');

    actual = grunt.file.read('tmp/M1.packed.js');
    expected = grunt.file.read('test/expected/modules/M1.packed.js');
    test.equal(actual, expected, 'should pack M1 module');

    test.done();
  }
};
