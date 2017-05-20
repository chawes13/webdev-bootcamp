//Guessing Game code along

var secretNumber = Math.floor(Math.random()*10);
var guess = Number(prompt("Take a guess!"));

if(guess > secretNumber){
	alert("Your guess is too high!");
}
else if (guess < secretNumber){
	alert("Your guess is too low!");
}
else {
	alert("You got it!");
}