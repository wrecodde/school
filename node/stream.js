var fs = require('fs');

stream = fs.createReadStream('notes/spread.txt');
stream.on('data', function(error, chunk){
	// console.log("new chunk");
	// console.log(chunk));
	}
);

var http = require('http');
var server = http.createServer();

server.on('request', function(request, response){
	response.writeHead(200);
	fs.createReadStream('notes/codde.txt').pipe(response);
	}
);

server.listen(8080);
console.log('server is running on port 8080');