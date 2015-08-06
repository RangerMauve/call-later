var asap = require("asap");
var toArray = require("to-array");

module.exports = later;

function later(fn) {
	var buffer = [];
	var ticking = false;

	return call;

	function call() {
		buffer.push(toArray(arguments));
		if (!ticking) {
			ticking = true;
			asap(flush);
		}
	}

	function flush() {
		var old_buffer = buffer;
		buffer = [];
		ticking = false;
		fn(old_buffer);
	}
}
