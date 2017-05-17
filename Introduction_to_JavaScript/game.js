//Guessing Game code along

var num = Math.floor(Math.random()*10);
var guess = Number(prompt("Take a guess!"));

if(guess > num){
	alert("Your guess is too high!");
	console.log(num);
}
else if (guess < num){
	alert("Your guess is too low!");
	console.log(num);
}
else {
	alert("You got it!");
}