
var count = 0;
var start = Date.now();

function f() {
	count++;
	if (Date.now() < start + 2000) setImmediate(f);
	else console.log("using setImmediate, counted to: " + count);
}

f();
