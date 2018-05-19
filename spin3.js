
var count = 0;
var start = Date.now();

function f() {
	count++;
	if (Date.now() < start + 1000) setTimeout(f, 0);
	else console.log("using setTimeout, counted to: " + count);
}

f();
