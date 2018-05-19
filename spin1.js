
var count = 0;
var start = Date.now();

while (Date.now() < start + 1000) {
	count++;
}

console.log("in a synchronous loop, counted to: " + count);
