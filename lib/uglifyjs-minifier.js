var uglify = require('uglify-js');

module.exports = uglify.minify.bind(uglify);
