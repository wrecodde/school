var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname+'views'));

app.get('/', function(request, response){
	response.render('index.jade');
});

app.get('/auth', function(request, response){
	response.render('auth.jade');
});

app.post('/auth', authenticate);

function authenticate(request, response){
	console.log("authenticating");
}

app.listen(7012);
console.log("listening on port 7012")