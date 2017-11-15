// writing my entrance papers

// intro to event driven code
// blocking and non-blockimg code

var fs = require("fs");

// blocking
var contents = fs.readFileSync("notes/lorem.txt");
console.log(">>>" + contents.toString());
console.log("next operation");

// non-blocking
var callback = function(err, contents){
	console.log(">>>" + contents.toString());
}

fs.readFile("notes/lorem.txt", callback);
console.log("already reading file. moving on");

// alternatively
fs.readFile("notes/lorem.txt", function(err, contents){
	console.log(">>>" + contents.toString());
});
console.log("one minute, pls. multitasking here");