// functions 101

function job(){
	return "on top of it";
}

console.log(job());

// immediatrly executing functions
(function (){
	console.log("i'm still breathing");
})();

var shed = function (){return "shed function";}

// wasted characters naming this function
var shop = function shop(){return "shop function";}

console.log(shed, shop);

// higher order functions
on_my_mind = [
	"start over",
	"i'm the one",
]
var one = function (){
	console.log(on_my_mind);
}
setTimeout(one, 2000);