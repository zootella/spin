
var count = 0;
var start = Date.now();

function f() {
	count++;
	if (Date.now() < start + 1000) process.nextTick(f);
	else console.log("using process.nextTick, counted to: " + count);
}

f();
