
var Promise = require("bluebird");
var count = 0;
var start = Date.now();

function f() {
	count++;
	if (Date.now() < start + 1000) Promise.resolve().then(f);
	else console.log("using bluebird, counted to: " + count);
}

f();
