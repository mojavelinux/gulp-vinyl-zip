'use strict';

var File = require('vinyl');

class ZipFile extends File {
	constructor(file) {
	  super(file);
	}
}

module.exports = ZipFile;
