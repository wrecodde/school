function longRunningOp(callback){
	setTimeout(callback, 3000);
}

function webRequest(request){
	console.log("starting a long operation for request " + request.id);
	longRunningOp(function(){
		console.log("done with request " + request.id);
	});
}

webRequest({id: 1});
webRequest({id: 2});
webRequest({id: 3});