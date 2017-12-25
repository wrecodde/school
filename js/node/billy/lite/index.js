var express = require('express');
var bodyParser = require('body-parser');
var jade = require('jade');

var path = require('path');
var fs = require('fs');

var authx = require('./assets/lib/authx');

var app = express();

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ejs middleware
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// set static path
app.use(express.static(path.join(__dirname, 'assets')));


var settings = JSON.parse(fs.readFileSync('./settings/settings.json'));
var voters = JSON.parse(fs.readFileSync('./settings/voters.json'));
var poll = JSON.parse(fs.readFileSync('./settings/poll.json'));


app.get('/', function(request, response){
	response.render('index', {settings: settings});
});

app.get('/auth', function(request, response){
	response.render('auth', {error: null, settings: settings})
});

app.post('/auth', function(request, response){
	console.log("authenticating...");
	var voter_id = request.body.voter_id;
	var voter_key = request.body.voter_key;
	check = authx.auth(voters, voter_id, voter_key);
	/*
	if (check.pass == true){
		response.redirect('/poll');
	} else (){
		response.redirect('/auth', {error: check.errorMsg});
	}*/
	// response.redirect('/auth');
	console.log(check);
});

app.get('/poll', function(request, response){
	response.render('poll', {poll: poll});
});

var port = 7000;
app.listen(port, function(){
	console.log('server started on port ' + port);
});