var later = require("./");

var fn = later(function (args) {
	console.log("Shows up second");
	console.log(args);
	// [ ['foo'], ['bar'], ['baz'] ]
});

fn("foo");
fn("bar");
fn("baz");

console.log("Shows up first");
