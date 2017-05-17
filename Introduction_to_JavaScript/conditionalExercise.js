//Conditional Exercise

//if age is negative, print an error message
//if age is 21, print "happy 21st birthday"
//if age is odd, print "your age is odd!"
//if age is a perfect square, print "perfect square!"

//prompt always returns a string...conver to Number to avoid coercion with logical operators
var age = Number(prompt("How old are you?"));

if(age < 0){
	console.log("ERROR: Age can't be negative");
}

if(age === 21){
	console.log("happy 21st birthday!");
}

if(age % 2 === 1){
	console.log("your age is odd!");
}

//can check if there are decimals using % 1
if(Math.sqrt(age) % 1 === 0){
	console.log("perfect square!")
}
