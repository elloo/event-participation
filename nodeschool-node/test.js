// If imported through npm, no relative directory is needed
var tap = require('tap');
// Import a module that has been exported in another file
var add = require('./index');

tap.equal(add(2, 3), 5);