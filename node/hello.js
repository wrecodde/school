// hello world!

var http = require("http");

// say hello!
/*
http.createServer(
	function(request, response){
		response.writeHead(200);
		response.write("dog is running"+"\n");
		setTimeout(
			function(){
				response.write("dog is done"+"\n");
				response.end();
			}, 7000);
	}
).listen(8080); */

// alternative syntax

var server = http.createServer();
server.on("request", 
	function(request, response){
		response.write("Hello, Dawg");
		response.end();
	}
);

server.listen(8080);

console.log("server is running on port 8080...");