var fs = require('fs');

var src = fs.createReadStream("notes/source.txt");
var dst = fs.createWriteStream("notes/destination.txt");

src.pipe(dst);
console.log("script: piped files already");
// readFrom.pipe(writeTo) does just that
// read from the source and writes it to the destination

// on a network..

var http = require('http');
var server = http.createServer();

server.on('request',
	function(request, response){
		response.write("\n");
		response.write("file transfer demo." + "\n");
		response.write("writes an uploaded file to ./notes/uploads.txt" + "\n");
		response.write("try >curl --upload-file [filename] localhost:8080<" + "\n");
		response.end();
	}
);

// ain't working
server.on('data',
	function(request, response){
		var uploads = fs.createWriteStream("notes/uploads.txt");
		console.log("piping uploaded file" + "\n");
		request.pipe(uploads);
	request.on('end',
		function(){
			response.write("uploaded!"+"\n");
			response.end();
		});
});

server.listen(8080);
console.log("piping on a web server demo");
console.log("server is running on port 8080");